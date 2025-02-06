import Navigation from './components/navigation';
import { useState } from 'react';

export default function Checkout() {
    const [submitted, setSubmitted] = useState(false);
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
};

return (
    <div>
        <Navigation />
        <h1>Checkout</h1>
        <p>Fill in the form to place your order!</p>

        {submitted ? (
            <h2>Thank you, {name}! Your order has been placed.</h2>
        ) : (
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