const productsLoaded = (newProducts) => {
    return{
        type: 'PRODUCTS_LOADED',
        payload: new newProducts
    };
};

export {
    roductsLoaded
};