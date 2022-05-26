import React from 'react';

const Order = ({order}) => {
    const { _id, quantity, name, img, minQuantity, suppliar, description, price } = order;
    return (
    <tbody>
        <tr>
            <th>{name}</th>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>{description}</td>
        </tr>
    </tbody>
    );
};

export default Order;