import React, { Component } from 'react'

export default class Contacts extends Component {
  render() {
    return (
      <div className='row'>
        <div className='col-md-12'><h3> Контактні дані</h3></div>
        <div className="contacts">
              <p><i className="fas fa-mobile-alt"></i><i className="fab fa-viber"></i> +38 050 558 77 83 Богдан </p>
              <p><i className="fas fa-mobile-alt"></i> +38 066 357 78 33 Валерій</p>
              <p><i className="fas fa-mobile-alt"></i><i className="fab fa-viber"></i> +38 066 290 04 13 Павло</p>
              <p><i className="fas fa-mobile-alt"></i><i className="fab fa-viber"></i> +38 066 799 28 10 Сергій</p>
              <p><i className="far fa-envelope"></i>e-mail: bal.okhtyrka@gmail.com</p>
              <p><i className="fas fa-map-marker-alt"></i>Адреса: м.Охтирка вул.Паркова, 1</p>
              <p><i className="fas fa-map-marked-alt"></i><a href="https://goo.gl/maps/jAirJmrPNaYYW1NSA" target="_blank">Переглянути на карті</a></p>
            </div>
      </div>
    )
  }
}