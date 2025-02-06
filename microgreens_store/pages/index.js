// Importing the Navigation component and Next.js Link for routing
import Navigation from './components/navigation';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* The Navigation component that renders the navigation bar */}
      <Navigation />

      {/* Welcome message and description on the homepage */}
      <h1>Welcome to Microgreens Shop!</h1>
      <p>Fresh, organic microgreens delivered to your door.</p>
      
      {/* Button that redirects to the products page */}
      <Link href="/products">
        <button>Shop Now</button>
      </Link>
    </div>
  );
}