import updateProductList from './product-list';
import updateShoppingCart from './shopping-cart-table';

const reducer = (state, action) =>{
    return{ 
        productList: updateProductList(state, action),
        shoppingCart: updateShoppingCart(state, action)
    };
};

export default reducer;