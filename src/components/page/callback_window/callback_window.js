import React, {Component} from 'react';
import './callback_window.css';


class CallbackForm extends Component{

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
  
    handleSubmit = (event) => {
        alert ('Скоро з вами зв’яжеться оператор');
        console.log (JSON.stringify(this.state));
        event.preventDefault();
    }

    render(){
        return (
            <div className ='formUser'>
                <form onSubmit = {this.handleSubmit}>
                    <label>Ваше Ім’я:</label>
                    <input 
                        type="text"
                        name ="firstName" 
                        placeholder="Ім’я" 
                        value={this.state.firstName}
                        onChange={this.handlechangeall} /> <br/>
                    <label>Телефон:</label>
                    <input 
                        type="numder" 
                        placeholder="+38 (    )"
                        name ="phone"
                        value={this.state.phone}
                        onChange={this.handlechangeall}/><br/>
                    <input className='formTable' type="submit" value="Зателефонувати мені"/><br/>
                    <span>Підтверджуючи замовлення ви погоджуєтеся з <a href = "" >політикою конфіденційності</a></span>
                
                </form>
            </div>
        );
        
    }
};

export default CallbackForm
