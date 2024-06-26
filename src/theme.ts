import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Roboto', sans-serif`, 
  },
  colors: {
    brand: {
      50: '#EBF8FF',
      100: '#CEEDFF',
      200: '#90CDF4',
      300: '#63B3ED',
      400: '#4299E1',
      500: '#3182CE',
      600: '#2B6CB0',
      700: '#2C5282',
      800: '#2A4365',
      900: '#1A365D',
    },
    accent: {
      50: '#FFE5F7',
      100: '#FFB3DA',
      200: '#FF80BE',
      300: '#FF4DA1',
      400: '#FF1A85',
      500: '#E6006B',
      600: '#B40054',
      700: '#82003D',
      800: '#510026',
      900: '#210010',
    },
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.800',
        fontFamily: 'Roboto, sans-serif',
      },
      a: {
        color: 'brand.500',
        _hover: {
          textDecoration: 'underline',
          color: 'brand.600',
        },
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: 'md', 
      },
      sizes: {
        md: {
          h: '48px',
          fontSize: 'lg',
          px: '24px',
        },
      },
      variants: {
        solid: {
          bg: 'brand.500',
          color: 'white',
          _hover: {
            bg: 'brand.600',
          },
        },
        outline: {
          borderColor: 'brand.500',
          color: 'brand.500',
          _hover: {
            bg: 'brand.50',
          },
        },
      },
    },
    Heading: {
      baseStyle: {
        fontWeight: 'bold',
      },
    },
    Text: {
      baseStyle: {
        color: 'gray.600',
      },
    },
  },
});

export default theme;
