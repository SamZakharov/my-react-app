// // pages/Checkout/Checkout.jsx
// import {useState} from 'react';
// import {Button, TextField, Typography} from '@mui/material';
//
// const Checkout = () => {
//     const [form, setForm] = useState({
//         firstName: '',
//         lastName: '',
//         phone: '',
//         email: '',
//         address: '',
//         deliveryMethod: '',
//         paymentMethod: ''
//     });
//
//     const handleChange = (e) => {
//         setForm({...form, [e.target.name]: e.target.value});
//     };
//
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         alert('Order placed successfully!');
//     };
//
//     return (
//         <div className="checkout">
//             <Typography variant="h4">Checkout</Typography>
//             <form onSubmit={handleSubmit}>
//                 <TextField label="First Name" name="firstName" value={form.firstName} onChange={handleChange} fullWidth
//                            margin="normal" required/>
//                 <TextField label="Last Name" name="lastName" value={form.lastName} onChange={handleChange} fullWidth
//                            margin="normal" required/>
//                 <TextField label="Phone" name="phone" value={form.phone} onChange={handleChange} fullWidth
//                            margin="normal" required/>
//                 <TextField label="Email" name="email" value={form.email} onChange={handleChange} fullWidth
//                            margin="normal" required/>
//                 <TextField label="Address" name="address" value={form.address} onChange={handleChange} fullWidth
//                            margin="normal" required/>
//                 <TextField label="Delivery Method" name="deliveryMethod" value={form.deliveryMethod}
//                            onChange={handleChange} fullWidth margin="normal" required/>
//                 <TextField label="Payment Method" name="paymentMethod" value={form.paymentMethod}
//                            onChange={handleChange} fullWidth margin="normal" required/>
//                 <Button type="submit" variant="contained" color="primary">
//                     Place Order
//                 </Button>
//             </form>
//         </div>
//     );
// };
//
// export default Checkout;
import React from 'react';
import {Button, Container, Typography} from '@mui/material';

const Checkout = () => {
    return (
        <Container>
            <Typography variant="h4">Checkout</Typography>
            <Button variant="contained" color="primary">
                Complete Purchase
            </Button>
        </Container>
    );
};

export default Checkout;
