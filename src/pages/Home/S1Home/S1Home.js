import React from 'react'
import ButtonH1 from '../../../components/ButtonH1/ButtonH1'
import img from '../../../data/images'
import icon from '../../../data/icons'
export default function S1Home() {
  const bottomItem = [
    { img: icon.home_sec_1_1, title: 'гарантия качества', text: 'Мы всегда стремимся выполнять свою работу быстро и на высшем уровне,  понимая, что люди ценят свое время и деньги.'},
    { img: icon.home_sec_1_2, title: '15 лет опыта', text: 'Мы здесь, чтобы решить все ваши проблемы, чтобы в вашем доме все работало исправно!'},
    { img: icon.home_sec_1_3, title: 'лучшие цены', text: 'Мы предлагаем огромное количество услуг и работ, нашими специалистами по лучшим ценам в городе'},
  ]
  return (
    <section className="home-1">
    <div className="h1__row">
      <div className="h1__imageBackground"><img src={img.home_sec_1} alt="#"/></div>
      <div className="h1__textRow">
        <h1 className="h1__title">Мы с радостью исправим все, что сломалось! </h1>
        <h3 className="h1__subtitle">наши мастера готовы выехать к вам в любое время</h3>
        {}
        <ButtonH1
        link_1={'/services'}
        link_2={'/about'}
        />
      </div>
    </div>
    {}
    <div className="h1-bottom">
      <div className="container">
        <div className="h1-bottom__row">
          {
            bottomItem.map((item, i)=> { 
             return ( 
              <div key={i} className="h1-bot__column">
              <div className="h1-bot__item">
                <div className="h1-botItem__icon"><img src={item.img} alt="icon"/></div>
                <h3 className="h1-botItem__title">{item.title}</h3>
                <h4 className="h1-botItem__text">{item.text}</h4>
              </div>
            </div>
              )})  
          }
          {
}
        </div>
      </div>
    </div>
  </section>
  )
}
