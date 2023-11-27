import './checkout-item.styles.scss';

const CheckoutItem = ({cartItems, deleteItem, incrementQuanity, decrementItemFromCart}) => {
    return ( 
        <>
        <table className='checkout-table'>
            <thead>
                <th></th>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price</th>
                <th></th>
            </thead> 

         {cartItems.map(item => (
                <tbody className="checkout-container">
                    <td><img src={item.imageUrl} alt={item.name} /></td>
                    <td>{item.name}</td>
                    <td className="quantity-div">
                    <div className="iconQuantity" onClick={() => decrementItemFromCart(item)}>⬸</div>
                    <h3>{item.quantity}</h3>
                    <div className="iconQuantity" onClick={() => incrementQuanity(item)}>⤑</div>
                    </td>
                    <td>{item.price}</td>
                    <td className="iconQuantity" onClick={() => deleteItem(item)}>X</td>
               </tbody>
            ))}
            </table>
        </>
     );
}
 
export default CheckoutItem;