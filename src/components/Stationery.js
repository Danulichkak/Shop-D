import React, { Component } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import {Route, NavLink} from 'react-router-dom';



export default class Stationery extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.route.productsData|| []
        };
        
    }
    render() {
      return (
      <div className='row'>
        <div className='col-md-12'>Канцтовари
            <div>
                <NavLink to="/showBtn">Корзина</NavLink>
                <Container>
                    <Row>
                        {this.state.data.map(product => {
                            return (<Col sm={4}>
                                    <Card key={product.id} style={{ color: 'black' }}>
                                    <Card.Img variant="top" src={product.imgSrc} />
                                        <Card.Body>
                                        <Card.Title className={"h6"}>{product.brand} {product.name}</Card.Title>
                                        <Card.Text className={product.discount > 0 ? "text-danger" : ''}>
                                            {product.discount}
                                        </Card.Text>
                                        <Button variant="success" style={{ 'font-size': '0.75em'}}>Добавить в корзину</Button>
                                        </Card.Body>
                                    </Card>
                                    </Col>)})}
                    </Row>
                </Container>
            </div>
        </div>
      </div>
    );
  }
}

