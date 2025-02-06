// Importing the Navigation component and and useState
import Navigation from './components/navigation';
import { useState } from 'react';

export default function Checkout() {
    // variables to track form submission and customer name
    const [submitted, setSubmitted] = useState(false);
    const [name, setName] = useState("");

    // Form submission handler to prevent default behavior and set the "submitted" state to true
    const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
};

return (
    <div>
        {/* The Navigation component that renders the navigation bar */}
        <Navigation />
        <h1>Checkout</h1>
        <p>Fill in the form to place your order!</p>


        {/* Conditional rendering based on 'submitted' state */}
        {submitted ? (
            <h2>Thank you, {name}! Your order has been placed.</h2>
        ) : (
            
            // Order form that captures customer details and order items
            <form onSubmit={handleSubmit} className='order'>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required /><br></br>

                <label>Address:</label>
                <input type="text" required /><br></br>

                <p>Order:</p>
                <input type="checkbox" id="opt1" name="opt1" value="cilantro"/>
                <label for="vehicle1">Cilantro Microgreens</label>
                <input type="checkbox" id="opt2" name="opt2" value="pea"/>
                <label for="vehicle1">Pea Shoots</label>
                <input type="checkbox" id="opt3" name="opt3" value="broccoli"/>
                <label for="vehicle1">Broccoli Microgreens</label><br></br>
                

                <button type="submit">Place Order</button>
            </form>
        )}
        </div>
    );
}