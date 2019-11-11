import React from 'react';
import ProductList from '../product-list';

const Stationery =() => {
    
    return (
      <div  className='row'>
        <div  className='col-md-12'>
          <h4> Канцтовари </h4>
          <ProductList/>
        </div>
      </div>
    );
};

export default Stationery;
// import {connect} from 'react-redux';
//  class Stationery extends Component {


//     render() {
//         return (
            // <div className='row'>
            //     <div className='col-md-12'>
            //         <h3>Канцтовари</h3>
            //         {ProductData.map((productDetail, index) => {
            //             return <div className='cardProd'>
            //                 <Col sm={4}>
            //                     <Card key={productDetail.id} style={{ color: 'black' }}>
            //                         <Card.Body>
            //                             <Card.Title className={"h6"}> 
            //                                 <h4>{productDetail.name}</h4>
            //                                 <span>{productDetail.description}</span>
            //                                 <span className ='priceProd'>{productDetail.price}{productDetail.text}</span>
            //                             <Button className ='add-to-card' data-id ={productDetail.id} variant="success" style={{ 'font-size': '0.75em' }}>Добавить в корзину</Button>
            //                             </Card.Title>
                                       
            //                         </Card.Body>
            //                     </Card>
            //                 </Col>


            //             </div>
            //         })}
            //     </div>
            // </div>
//         );
//     }
// }

// export default connect ()(Stationery);