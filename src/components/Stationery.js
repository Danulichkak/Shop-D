import React, { Component } from 'react';
import ProductData from '../data/products.json'
import { Card, Button, Container, Row, Col } from 'react-bootstrap';


export default class Stationery extends Component {


    render() {
        return (
            <div className='row'>
                <div className='col-md-12'>
                    <h3>Канцтовари</h3>
                    {ProductData.map((productDetail, index) => {
                        return <div className='cardProd'>
                            <Col sm={4}>
                                <Card key={productDetail.id} style={{ color: 'black' }}>
                                    <Card.Body>
                                        <Card.Title className={"h6"}> 
                                            <h4>{productDetail.name}</h4>
                                            <span>{productDetail.description}</span>
                                            <span className ='priceProd'>{productDetail.price}{productDetail.text}</span>
                                        <Button variant="success" style={{ 'font-size': '0.75em' }}>Добавить в корзину</Button>
                                        </Card.Title>
                                       
                                    </Card.Body>
                                </Card>
                            </Col>


                        </div>
                    })}
                </div>
            </div>
        );
    }
}

