import React, { Component } from 'react'

export default class ClimaticTech extends Component {
  render() {
    return (
      <div className='row'>
        <div className='col-md-12'>
          <div className="ClimaticTech">
            <h4>
              Орієнтовна комплектація та вартість кліматичного обладнання
          </h4>
            <h5>
              Кондиціонери (HISENSE, ELECTROLUX, ZANUSSI, SAMURAI, IDEA, MIDEA, Cooper&Hunter, OLMO, NEOCLIMA, SENSEI, HITACHI, TOSHIBA, BALLU) з встановленням та доставкою, з потужністю від 07 до 36!!!
          </h5>
            <div className='table_services'>
              <table className='services' border='1' >
                <tbody>
                  <tr>
                    <th>Площа кімнати</th>
                    <th>Необхідна потужність</th>
                    <th>Маркування традиційне</th>
                    <th>Маркування, що вкаує на площу</th>
                  </tr>
                  <tr>
                    <td>5-20 м.кв.</td>
                    <td>2 кВт</td>
                    <td>07</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <td>21-25 м.кв.</td>
                    <td>2,5 кВт</td>
                    <td>09 (10 у Toshiba)</td>
                    <td>25</td>
                  </tr>
                  <tr>
                    <td>26-35 м.кв.</td>
                    <td>3,5 кВт</td>
                    <td>12 (13 у Toshiba)</td>
                    <td>35</td>
                  </tr>
                  <tr>
                    <td>36-50 м.кв.</td>
                    <td>5 кВт</td>
                    <td>18</td>
                    <td>50</td>
                  </tr>
                  <tr>
                    <td>51-70 м.кв.</td>
                    <td>7 кВт</td>
                    <td>24</td>
                    <td>60-80</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='multiPrice'>
              <p>07 - Від 7990грн з встановленням та пуском</p>
              <p>09 - Від 8500грн з встановленням та пуском</p>
              <p>12 - Від 9990грн з встановленням та пуском</p>
              <p>18 - Від 14990грн з встановленням та пуском</p>
              <p>24 - Від 19990грн з встановленням та пуском</p>
            </div>
            <h5>
              Також можливо встановити інверторний кондиціонер з можливістю опалення взимку Cooper&Hunter, базові моделі працюють при температурі (-15/20), можливі більш продуктивні варіанти
        </h5>
            <div className='table_services'>
              <table className='services'>
                <tbody>
                  <tr>
                    <td className='border1'>CH-S07</td>
                    <td>15500 грн з встановлнням та пуском</td>
                  </tr>
                  <tr>
                    <td className='border1'>CH-S09</td>
                    <td>17500 грн з встановлнням та пуском</td>
                  </tr>
                  <tr>
                    <td className='border1'>CH-S12</td>
                    <td>18500 грн з встановлнням та пуском</td>
                  </tr>
                  <tr>
                    <td className='border1'>CH-S18</td>
                    <td>27000 грн з встановлнням та пуском</td>
                  </tr>
                  <tr>
                    <td className='border1'>CH-S24</td>
                    <td>31000 грн з встановлнням та пуском</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}