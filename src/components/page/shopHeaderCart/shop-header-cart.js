import React from 'react';
import './shop-header-cart.css';
import { NavLink} from 'react-router-dom';


const ShopHeaderCart = ({cartItems, total}) => {
    
    return(
        <div className="shop-header-cart row">
        <NavLink to="/shoppingCartTable">
            <i className="fas fa-shopping-cart"/>
            {cartItems} товар(ів) ({total}грн)
            
        </NavLink>
        </div>
    );
};

export default ShopHeaderCart;

//  // Возвращаем общее количество товаров 
//  const getCountAll() {
//     return _.reduce(cartData, function(sum, item) {return sum + item.count}, 0);
// }
 
// // Возвращаем общую сумму
// const getSumma() {
//     return _.reduce(cartData, function(sum, item) {return sum + item.count * item.price}, 0);
// }    