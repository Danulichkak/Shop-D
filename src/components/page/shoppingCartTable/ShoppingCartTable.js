import React, { Component } from 'react';
import './shoppingCartTable.css';
import { connect } from 'react-redux';
import {
    productAddedToCart,
    productRemovedFormCart, 
    allProductsRemovedFormCart} from '../../../actions';


const ShoppingCartTable = ({items, total, onIncrease, onDecrease, onDelete }) => {
    const renderRow = (item, idx) => {
        const {id, name, count, total} = item;
        return(
            <tr key ={id}>
                <td>{idx +1}</td>
                <td>{name}</td>
                <td>{count}</td>
                <td>{total}грн</td>
                <td>
                    <button 
                        onClick={() =>onIncrease(id)}
                        className="btn btn-outline-success" title="Збільшити кількість">
                        <i className="fas fa-plus-circle"/>
                    </button>
                    <button 
                        onClick={() =>onDecrease(id)}
                        className="btn btn-outline-warning" title="Зменшити кількість">
                        <i className="fas fa-minus-circle"/>
                    </button>
                    <button 
                         onClick={() =>onDelete(id)}
                        className="btn btn-outline-danger" title="Видалити">
                        <i className="fas fa-trash-alt"/>
                    </button>
                </td>
            </tr>
        );
    };
    return(
        <div className ="shopping-cart-table">
            <h4>Ваше Замовлення</h4>
            <table className= "table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Назва товару</th>
                        <th>Кількість</th>
                        <th>Вартість</th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody>
                    { items.map(renderRow)}
                </tbody>
            </table>
            <div className="total"> 
                Разом: {total} 
            </div>

        </div>
    );
};

const mapStateToProps = ({ shoppingCart: {cartItems, orderTotal}}) => {
    return{
        items: cartItems,
        total: orderTotal
    };
};

const mapDispatchToProps = {
        onIncrease: productAddedToCart,

        onDecrease: productRemovedFormCart,
        
        onDelete: allProductsRemovedFormCart
};

export default connect(mapStateToProps, mapDispatchToProps) (ShoppingCartTable);

// export default class CustomButton extends Component {

// const CustomButton = () => {
//     return(
//         <div className ="shopping-cart-table">
//             <h2>Ваше замовлення</h2>

//         </div>
//     );

// };

//     constructor(props) {
//         super(props);
//         this.state = {
//             data: {
//                 clickCounter: 0
//             }
//         };
//     }

//     handleClick = () => {
//         let clickCounter = this.state.data.clickCounter;
//         alert(`Clicked: ${++clickCounter}`);
//         this.setState({
//             data: {
//                 clickCounter: clickCounter
//             }
//         });
//     };
//     list = ["item1", "item2", "item3"];

//     result = <ul>
//         {this.list.map(item => <li key={item}>{item}</li>)}
//     </ul>;

//     render() {
//         return (
//             <div>
//                 {this.result}
//                 <button id={this.id} onClick={this.handleClick} className="btn btn-danger">
//                     {this.props.route.label} {this.state.data.clickCounter}
//                 </button>
//             </div>
//         );
//     }
// }