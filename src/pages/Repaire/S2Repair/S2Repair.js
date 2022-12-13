import React from 'react'
import ButtonH2 from '../../../components/ButtonH2/ButtonH2'
import dataS2Repair from './dataS2Repair'
export default function S2Repair() {
return (
<section className="repair-2">
<div className="container">
<h2 className="r2-title">Виды ремонта квартир и&nbsp;стоимость </h2>
<div className="r2-row">
{
    dataS2Repair.map((item, i)=> { 
     return ( 
      <div key={i} className="r2-column">
      <div className="r2-item">
        <div className="r2-item__icon"><img src={item.icon} alt="icon"/></div>
        <div className="r2-item__title">{item.title}</div>
        <h4 className="r2-item__text">{item.text}</h4>
        <ul>
          {
            dataS2Repair[i].listIcon.map((item, i)=> { 
             return ( 
              <li key={i} className="r2-item__list">{item}
              </li>
              )})  
          }
        </ul>
        <div className="r2-item__line"></div>
        <div className="r2-item__buttonRow">
          <div className="r2-item__buttonLeft">{item.buttonLeft}</div>
          <ButtonH2
      link={'/services/service-single'}
      text={'заказать'}
      stylesContainer={'r2-button__container'}
      stylesButton={'r2__buttonOne'}
       />
        </div>
      </div>
    </div>
      )})  
  }
  {
}
</div>
</div>
</section>
)
}
