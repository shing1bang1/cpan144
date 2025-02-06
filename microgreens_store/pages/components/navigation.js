
import Link from 'next/link';

const Navigation = () => {
  return (
    <nav>
      <Link href="/">Home</Link> | 
      <Link href="/products">Products</Link> | 
      <Link href="/checkout">Checkout</Link>
    </nav>
  );
};

export default Navigation;