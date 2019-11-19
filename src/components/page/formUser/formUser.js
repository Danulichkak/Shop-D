import React, {Component} from 'react';
import './formUser.css';
import { tsConstructSignatureDeclaration } from '@babel/types';

class Form extends Component{

    state = {
        firstName:"",
        lastName: "",
        email: "",
        phone: "",
        message: ""
    };

    handlechangeall = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        
        });
    };
    // handleFirstName = (event)=> {
    //     this.setState  ({firstName: event.target.value});
    // }
    // handleLastName = (event)=> {
    //     this.setState  ({lastName: event.target.value});
    // }
    // handleEmail = (event)=> {
    //     this.setState  ({email: event.target.value});
    // }
    // handleNumber = (event)=> {
    //     this.setState  ({number: event.target.value});
    // }
    // handleMessage = (event)=> {
    //     this.setState  ({message: event.target.value});
    // }
    handleSubmit = (event) => {
        alert ('Замовлення відправлено на обробку');
        console.log (JSON.stringify(this.state));
        event.preventDefault();
    }
        

    render(){
        return (
            <div className ='formUser'>
                <form onSubmit = {this.handleSubmit}>
                    <h4 className='form_title'>Вкажіть дані для замовлення</h4>
                    
                    <label>Ваше Ім’я:</label>
                    <input 
                        type="text"
                        name ="firstName" 
                        placeholder="Ім’я" 
                        value={this.state.firstName}
                        onChange={this.handlechangeall} /> <br/>

                    <label>Ваше Прізвище:</label>
                    <input 
                        type="text" placeholder="Прізвище"
                        name ="lastName" 
                        value={this.state.lastName}
                        onChange={this.handlechangeall}/><br/>

                    <label>Ел. адреса:</label>
                    <input 
                        type="email" 
                        placeholder="Email"
                        name ="email"
                        value={this.state.email}
                        onChange={this.handlechangeall}/><br/>

                    <label>Телефон:</label>
                    <input 
                        type="numder" 
                        placeholder="+38 (    )"
                        name ="phone"
                        value={this.state.phone}
                        onChange={this.handlechangeall}/><br/>

                    <label className="textarea">Коментар до замовлення:</label>
                    <textarea 
                        placeholder="Введіть коментар"
                        name ="lastName"
                        value={this.state.message}
                        name ="message"
                        onChange={this.handlechangeall}/><br/>
                
                    <input className='formTable' type="submit" value="Оформити замовлення"/><br/>
                    <span>Підтверджуючи замовлення ви погоджуєтеся з <a href = "" >політикою конфіденційності</a></span>
                
                </form>
            </div>
        );
        
    }
};

export default Form

