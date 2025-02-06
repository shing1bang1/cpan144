import Navigation from './components/navigation';
import ProductCard from './components/productCard';

const products = [
  { id: 1, name: "Cilantro Microgreens", price: 5.99 },
  { id: 2, name: "Pea Shoots", price: 4.99 },
  { id: 3, name: "Broccoli Microgreens", price: 6.99 }
];

export default function Products() {
  return (
    <div>
      <Navigation />
      <h1>Our Products:</h1>
      <div>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
