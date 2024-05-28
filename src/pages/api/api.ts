
import type { NextApiRequest, NextApiResponse } from 'next';
import usersData from '../../data/users.json';

type User = {
  id: number;
  email: string;
  password: string;
  type: string;
};

type ResponseData = {
  success: boolean;
  user?: User;
  message?: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  if (req.method === 'POST') {
    const { email, password } = req.body;
    const user = usersData.find((u: User) => u.email === email && u.password === password);

    if (user) {
      res.status(200).json({ success: true, user });
    } else {
      res.status(401).json({ success: false, message: 'Invalid email or password' });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method not allowed' });
  }
}
