import React, { Component } from 'react';
import ProductListItem from '../product-list-item';
import './product-list.css';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import {withProductstoreService} from '../hoc';
import {fetchProducts, productAddedToCart} from '../../actions';
import {compose} from '../../utils';

const ProductList =({products, onAddedToCart})=>{
    return (
        <div className = "product-list">
            {
                products.map((product) =>{
                    return( 
                        <div key={product.id}>
                            <ProductListItem
                            product={product}
                            onAddedToCart={() => onAddedToCart(product.id)}/>
                        </div>
                    );
                })
            }
        </div>
    );
};

class ProductListContainer extends Component {

     componentDidMount(){
        this.props.fetchProducts();
     }

    render() {
        const {products, loading, error,  onAddedToCart} = this.props;

        if(loading) {
            return <Spinner/>;
        }

        if (error) {
            return <ErrorIndicator/>;
        }

        return <ProductList products={products}  onAddedToCart = { onAddedToCart} />;
    }
} 

const mapStateToProps = ({productList: {products, loading, error}}) => {
    return { products, loading, error };
};
 
const mapDispatchToProps = (dispatch, {productstoreService}) =>{
    return bindActionCreators({
        fetchProducts: fetchProducts(productstoreService),
        onAddedToCart: productAddedToCart 
    }, dispatch);
 };

export default compose(
    withProductstoreService(),
    connect (mapStateToProps, mapDispatchToProps)
    )(ProductListContainer);

