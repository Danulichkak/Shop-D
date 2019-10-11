import React, { Component } from 'react';
import './App.css';
import './Components.css';
import moment from 'moment';
import {Route, NavLink} from 'react-router-dom';
import CustomButton from './components/CustomButton';
import Home from './components/Home';
import Stationery from './components/Stationery';
import ClimaticTech from './components/ClimaticTech';
import MultimediaTech from './components/MultimediaTech';
import Services from './components/Services';
import Contacts from './components/Contacts';

import productsData from './data/products.json';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment(),
      navSelected: 'about',
    };
  }

  render() {
    const {date, } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-header_letf">
            <img src="./944_1.jpg" className="App-logo" alt="logo" />
          </div>
          <div className="App-header_center">
            <h2> Комп'ютерна, офісна та побутова техніка. Музичне обладнання. Канцтовари. Відеоспостереження. Кліматична техніка.</h2>
            <h3> Ремонт та обслуговування комп'ютерної, офісної та побутової техніки. Фото та відео послуги. Ремонт мобільних телефонів.</h3>
          </div>
          <div className="App-header_right">
            <div className="data">
              <h4>Сьогодні</h4>
              <p>{date.format('DD.MM.YYYY')}</p>
          </div>
            <div className="contacts">
              <h4> Контактні дані</h4>
              <p><i className="fas fa-mobile-alt"></i><i className="fab fa-viber"></i> +38 050 558 77 83 Богдан </p>
              <p><i className="fas fa-mobile-alt"></i> +38 066 357 78 33 Валерій</p>
              <p><i className="fas fa-mobile-alt"></i><i className="fab fa-viber"></i> +38 066 290 04 13 Павло</p>
              <p><i className="fas fa-mobile-alt"></i><i className="fab fa-viber"></i> +38 066 799 28 10 Сергій</p>
              <p><i className="far fa-envelope"></i><a className="user__mail-address" href="mailto: bal.okhtyrka@gmail.com">e-mail: bal.okhtyrka@gmail.com</a></p>
            </div>

          </div>
            <nav className="nav-menu">
              <ul className="top_menu">
               <li><NavLink className="noBr" to="/" exact> <i class="fas fa-home"></i> Головна</NavLink> </li>
               <li><NavLink className="noBr" to="/stationery">Канцтовари</NavLink></li>
               <li><NavLink className="noBr" to="/climaticTech">Кліматична техніка</NavLink></li>
               <li><NavLink className="noBr" to="/multimediaTech">Мультимедійна техніка</NavLink></li>
               <li><NavLink className="noBr" to="/services">Послуги</NavLink></li>
               <li><NavLink className="noBr" to="/contacts">Контакти</NavLink></li>
               <li><NavLink className="noBr" to="showBtn">Кошик<i className="fas fa-shopping-basket"> </i></NavLink></li>
              </ul>
            </nav>
          
        </header>
        <div className="content">
            <Route path="/" exact component ={Home}/>
            <Route path ="/stationery" component ={Stationery} productsData={productsData}/>
            <Route path ="/climaticTech" component ={ClimaticTech}/>
            <Route path ="/multimediaTech" component ={MultimediaTech}/>
            <Route path ="/services" component ={Services}/>
            <Route path ="/contacts" component ={Contacts}/>
            <Route path="showBtn" component={CustomButton} label={"Save"}/>
                
       </div>

       <div className="call">
           <NavLink className="noBr" to="/contacts"><i className="fas fa-phone"></i> </NavLink>
       </div>
       <footer>
                
            <ul className="footer">
              <li><NavLink className="noBr" to="/" exact>Головна</NavLink> </li>
              <li><NavLink className="noBr" to="/stationery">Канцтовари</NavLink></li>
              <li><NavLink className="noBr" to="/climaticTech">Кліматична техніка</NavLink></li>
              <li><NavLink className="noBr" to="/multimediaTech">Мультимедійна техніка</NavLink></li>
              <li><NavLink className="noBr" to="/services">Послуги</NavLink></li>
              <li><NavLink className="noBr" to="/contacts">Контакти</NavLink></li>
            </ul>
       </footer>
      
      </div>
    );
  }
}

export default App;
 
