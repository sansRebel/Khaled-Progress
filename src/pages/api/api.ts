// src/pages/api/api.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { promises as fs } from 'fs';
import path from 'path';

type User = {
  id: number;
  email: string;
  password: string;
  type: 'customer' | 'manager';
};

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  rating: string;
};

const getFilePath = (fileName: string) => path.join(process.cwd(), 'src', 'data', fileName);

const readJsonFile = async (filePath: string) => {
  const fileContents = await fs.readFile(filePath, 'utf8');
  return JSON.parse(fileContents);
};

const writeJsonFile = async (filePath: string, data: any) => {
  await fs.writeFile(filePath, JSON.stringify(data, null, 2));
};

const readProductsFile = async (filePath: string) => {
  const fileContents = await fs.readFile(filePath, 'utf8');
  const match = fileContents.match(/const products: Product\[\] = (\[.*\]);/s);
  if (match) {
    return eval(`(${match[1]})`);
  }
  return [];
};

const writeProductsFile = async (filePath: string, data: Product[]) => {
  const fileContents = `import { Product } from '../context/CartContext'

const products: Product[] = ${JSON.stringify(data, null, 2)};
  
export default products;
`;
  await fs.writeFile(filePath, fileContents);
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const usersFilePath = getFilePath('users.json');
  const productsFilePath = getFilePath('products.ts');

  switch (req.method) {
    case 'POST':
      if (req.query.type === 'add-user') {
        const { email, password, type } = req.body;
        if (!email || !password || !type) {
          res.status(400).json({ message: 'Missing user data' });
          return;
        }

        const users: User[] = await readJsonFile(usersFilePath);
        const newUser: User = {
          id: users.length ? users[users.length - 1].id + 1 : 1,
          email,
          password,
          type
        };

        users.push(newUser);
        await writeJsonFile(usersFilePath, users);

        res.status(201).json({ message: 'User added successfully' });
      } else if (req.query.type === 'auth-user') {
        const { email, password } = req.body;
        if (!email || !password) {
          res.status(400).json({ message: 'Missing user data' });
          return;
        }

        const users: User[] = await readJsonFile(usersFilePath);
        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
          res.status(200).json({ message: 'Authentication successful', type: user.type });
        } else {
          res.status(401).json({ message: 'Invalid email or password' });
        }
      } else if (req.query.type === 'add-product') {
        const { name, price, image, description, rating } = req.body;

        if (!name || !price || !image || !description || !rating) {
          res.status(400).json({ message: 'Missing product data' });
          return;
        }

        const products: Product[] = await readProductsFile(productsFilePath);
        const newProduct: Product = {
          id: products.length ? products[products.length - 1].id + 1 : 1,
          name,
          price,
          image,
          description,
          rating,
        };

        products.push(newProduct);
        await writeProductsFile(productsFilePath, products);

        res.status(201).json({ message: 'Product added successfully' });
      } else {
        res.status(400).json({ message: 'Invalid query type' });
      }
      break;

    default:
      res.status(405).json({ message: 'Method not allowed' });
      break;
  }
}
