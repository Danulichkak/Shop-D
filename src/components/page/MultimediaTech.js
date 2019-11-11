import React, { Component } from 'react'

export default class MultimediaTech extends Component {
  render() {
    return (
      <div className='row'>
        <div className='col-md-12'>
            <h4> Орієнтовна комплектація та вартість мультимедійного обладнання.
            </h4> 
            <div className='multiPrice'>
              <ol>
                  <li>Мультимедійна дошка (NewLine, INTECH, INTBOARD) з ліцензійним програмним забезпеченням та начальними посібниками. Від 23000 до 27000 грн. </li>
                  <li>Ноутбук (Asus, Lenovo, Dell, HP) з ліцензійним програмним забезпеченням.Налаштування безкоштовно! Від 10000 до 14000 грн. </li>
                  <li>Проектор (Optoma, BenQ, Acer, Epson). Від 9000 до 12000 грн.</li>
                  <li>Кріплення для проектотра (кронштейн в комплекті). Від 650 до 940грн.</li>
                  <li>Кабель HDMI підсилений 10-15м. Від 480 до 700грн.</li>
                  <li>Кабель USB 6м. Від 130 до 190 грн.</li>
                  <li>Кабель живлення Та короби. Від 380 до 570 грн.</li>
             </ol>
           </div>
        <h3>Доставка, налаштування та навчання безкоштовно!!!
        </h3>
      
        <h4 className='AllMultimediaPrice'>Разом  від 44320 до 49870 грн.
        </h4>
        <div>
            <i></i>
        </div>
      
      </div>
      </div>
    )
  }
}