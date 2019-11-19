import React, { Component } from 'react';
import './App.css';
import './Components.css';
import moment from 'moment';
import {Route, NavLink} from 'react-router-dom';
import ShopHeaderCart from './components/page/shopHeaderCart/shop-header-cart';
import ShoppingCartTable from './components/page/shoppingCartTable/ShoppingCartTable';
import Home from './components/page/Home';
import Stationery from './components/page/Stationery';
import ClimaticTech from './components/page/ClimaticTech';
import MultimediaTech from './components/page/MultimediaTech';
import Services from './components/page/Services';
import Contacts from './components/page/Contacts';



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
      <main role = "main" className="container">
      <div className="App">
        <header className="App-header">
          <div className="App-header_letf">
            <img src="./944_1.jpg" className="App-logo" alt="logo" />
          </div>
          <div className="App-header_center">
            <h4> Комп'ютерна, офісна та побутова техніка. Музичне обладнання. Канцтовари. Відеоспостереження. Кліматична техніка.</h4>
            <h5> Ремонт та обслуговування комп'ютерної, офісної та побутової техніки. Фото та відео послуги. Ремонт мобільних телефонів.</h5>
          </div>
          <div className="App-header_right">
            <div className="data">
              <h5>Сьогодні</h5>
              <p>{date.format('DD.MM.YYYY')}</p>
          </div>
            <div className="contacts">
              <h5> Контактні дані</h5>
              <p><i className="fas fa-mobile-alt"></i><i className="fab fa-viber"></i> +38 050 558 77 83 Богдан </p>
              <p><i className="fas fa-mobile-alt"></i> +38 066 357 78 33 Валерій</p>
              <p><i className="fas fa-mobile-alt"></i><i className="fab fa-viber"></i> +38 066 290 04 13 Павло</p>
              <p><i className="fas fa-mobile-alt"></i><i className="fab fa-viber"></i> +38 066 799 28 10 Сергій</p>
              <p><i className="far fa-envelope"></i><a className="user__mail-address" href="mailto: bal.okhtyrka@gmail.com">e-mail: bal.okhtyrka@gmail.com</a></p>
            </div>
            {/* <ShopHeaderCart Items={5} total={210}/> */}
          </div>
            <nav className="nav-menu">
              <ul className="top_menu">
               <li><NavLink className="noBr" to="/" exact> <i className="fas fa-home"></i> Головна</NavLink> </li>
               <li><NavLink className="noBr" to="/stationery">Канцтовари</NavLink></li>
               <li><NavLink className="noBr" to="/climaticTech">Кліматична техніка</NavLink></li>
               <li><NavLink className="noBr" to="/multimediaTech">Мультимедійна техніка</NavLink></li>
               <li><NavLink className="noBr" to="/services">Послуги</NavLink></li>
               <li><NavLink className="noBr" to="/contacts">Контакти</NavLink></li>
               <li><NavLink className="noBr" to="/shoppingCartTable">Кошик<i className="fas fa-shopping-basket"> </i> </NavLink></li>
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
            <Route path="/shoppingCartTable" component={ShoppingCartTable} />
                
      </div>
      <buttom type="button" class="callback-bt callback_email">
          <div className=" text-call callback_email">
          <i className="fas fa-phone"></i> 
            <div>
                <div id="okno">
                  
                </div>
                <a ><span>Зворотній дзв’інок</span></a>
            </div>
            
          </div>
      </buttom>

      <buttom type="button" class="email-bt callback_email">
        <div class="text-call callback_email">
          <i class="fa fa-envelope" aria-hidden="true"></i>
          <NavLink className="noBr" to="/contacts"><span >Зворотній зв’язок</span></NavLink>
        </div>
      </buttom>

      <footer>
                
            <ul className="footer">
              <li><NavLink className="noBr" to="/" exact>Головна</NavLink> </li>
              <li><NavLink className="noBr" to="/stationery">Канцтовари</NavLink></li>
              <li><NavLink className="noBr" to="/climaticTech">Кліматична техніка</NavLink></li>
              <li><NavLink className="noBr" to="/multimediaTech">Мультимедійна техніка</NavLink></li>
              <li><NavLink className="noBr" to="/services">Послуги</NavLink></li>
              <li><NavLink className="noBr" to="/contacts">Контакти</NavLink></li>
            </ul>
            <div> &copy; 2019 Усі права захищені </div>
       </footer>
      
      </div>
      </main>
    );
  }
}

export default App;
 
