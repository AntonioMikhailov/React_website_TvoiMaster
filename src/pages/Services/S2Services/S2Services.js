import React from 'react'
import ButtonH2 from '../../../components/ButtonH2/ButtonH2'
import dataS2Services from './dataS2Services'
export default function S2Services() {
return (
<section className="service-2">
<div className="container">
<h2 className="s2-title">выберите услугу</h2>
<div className="s2-row">
  {
    dataS2Services.map((item, i)=> { 
     return ( 
      <div key={i} className="s2-item">
      <div className="s2-item__row">
        <div className="s2-item__icon"><img src={item.icon} alt="icon"/></div>
        <h3 className="s2-item__title">{item.title}</h3>
      </div>
      <div className="s2-item__text">{item.text}</div>
      <div className="s2-item__buttonRow">
        <div className="s2-item__buttonLeft">{item.buttonLeft}</div>
        <ButtonH2
      link={'/services/service-single'}
      text={'заказать'}
      stylesContainer={'s2-button__container'}
      stylesButton={'s2__buttonOne'}
       />
        {
}
      </div>
    </div>
      )})  
  }
</div>
</div>
</section>
)
}
