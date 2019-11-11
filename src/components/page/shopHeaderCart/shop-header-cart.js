import React from 'react';
import './shop-header-cart.css';
import { NavLink} from 'react-router-dom';


const ShopHeaderCart = ({numItems, total}) => {
    return(
        <div className="shop-header-cart row">
        <NavLink to="/shoppingCartTable">
            <i className="fas fa-shopping-cart"/>
            {numItems} items ({total}грн)
        </NavLink>
        </div>
    );
};

export default ShopHeaderCart;