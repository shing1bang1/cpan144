
//product card component to display the card of the product
const ProductCard = ({ product }) => {
    return (
      <div className="product-card">
        <h3>{product.name}</h3>
        <p>${product.price.toFixed(2)}</p>
      </div>
    );
  };
  

  // Exporting the component 
  export default ProductCard;