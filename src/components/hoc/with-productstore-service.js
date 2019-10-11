import React from 'react';
import {ProductstoreServiceConsumer} from '../ productstore-service-context';

const withProductstoreService = () => (Wrapped) => {
    return ( props) =>{
        return (
            <ProductstoreServiceConsumer>
                {
                    (productstoreService) =>{
                        <Wrapped {...props} 
                            productstoreService={productystoreService}/>;
                    }
                }
            </ProductstoreServiceConsumer>
        );
    }
};

export default withProductstoreService;