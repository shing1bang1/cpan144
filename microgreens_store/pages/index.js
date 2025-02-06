import Navigation from './components/navigation';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Navigation />
      <h1>Welcome to Microgreens Shop!</h1>
      <p>Fresh, organic microgreens delivered to your door.</p>
      <Link href="/products">
        <button>Shop Now</button>
      </Link>
    </div>
  );
}