import React, { Component } from 'react';
import './App.css';
import moment from 'moment';
import {Route, NavLink} from 'react-router-dom';
import Admin from './components/Admin';
import Gerne from './components/Gerne';
import Stationery from './components/Stationery';
import ClimaticTech from './components/ClimaticTech';
import MultimediaTech from './components/MultimediaTech';
import Services from './components/Services';
import Contacts from './components/Contacts';




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
            <h1> Комп'ютерна, офісна та побутова техніка. Музичне обладнення. Канцтовари. Відеоспостиреження. Кліматична техніка.</h1>
            <h2> Ремонт та обслуговування комп'ютерної, офісної та побутової техніки. Фото та відео послуги. Ремонт мобільних телефонів.</h2>
          </div>
          <div className="App-header_right">
            <div className="data">
              <h3>Сьогодні</h3>
              <p>{date.format('DD.MM.YYYY')}</p>
          </div>
            <div className="contacts">
              <h3> Контактні дані</h3>
              <p><i className="fas fa-mobile-alt"></i><i className="fab fa-viber"></i> +38 050 558 77 83 Богдан </p>
              <p><i className="fas fa-mobile-alt"></i> +38 066 357 78 33 Валерій</p>
              <p><i className="fas fa-mobile-alt"></i><i className="fab fa-viber"></i> +38 066 290 04 13 Павло</p>
              <p><i className="fas fa-mobile-alt"></i><i className="fab fa-viber"></i> +38 066 799 28 10 Сергій</p>
              <p><i className="far fa-envelope"></i>e-mail: bal.okhtyrka@gmail.com</p>
            </div>

          </div>
            <nav className="nav">
              <ul className="top_menu">
              <li><NavLink className="noBr" to="/" exact>Головна</NavLink> </li>
              <li><NavLink className="noBr" to="/admin" activeClassName={'wfm-active'}>Admin</NavLink> </li>
              <li><NavLink className="noBr" to="/gerne">Gerne</NavLink></li>
              <li><NavLink className="noBr" to="/stationery">Канцтовари</NavLink></li>
              <li><NavLink className="noBr" to="/climaticTech">Кліматична техніка</NavLink></li>
              <li><NavLink className="noBr" to="/multimediaTech">Мультимедійна техніка</NavLink></li>
              <li><NavLink className="noBr" to="/services">Послуги</NavLink></li>
              <li><NavLink className="noBr" to="/contacts">Контакти</NavLink></li>
              <li><a className="noBr" href="">Кошик<i className="fas fa-shopping-basket"></i></a></li>
            </ul>
            </nav>
          
        </header>
      
            <Route path="/" exact render ={ () => <h1 className="home">Головна</h1>}/>
            <Route path ="/admin" component ={Admin}/>
            <Route path ="/gerne" component ={Gerne}/>
            <Route path ="/stationery" component ={Stationery}/>
            <Route path ="/climaticTech" component ={ClimaticTech}/>
            <Route path ="/multimediaTech" component ={MultimediaTech}/>
            <Route path ="/services" component ={Services}/>
            <Route path ="/contacts" component ={Contacts}/>  
       
       <footer>
         <hr/>
       <ul className="top_menu footer">
              <li><NavLink className="noBr" to="/" exact>Головна</NavLink> </li>
              <li><NavLink className="noBr" to="/admin" activeClassName={'wfm-active'}>Admin</NavLink> </li>
              <li><NavLink className="noBr" to="/gerne">Gerne</NavLink></li>
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
 
