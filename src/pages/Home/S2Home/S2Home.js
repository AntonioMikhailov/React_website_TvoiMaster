import React, { useRef, useState } from 'react'
import { useEffect } from 'react'
import icon from '../../../data/icons'
import img from '../../../data/images'
export default function S2Home() {
  const titleOne = useRef()
  const titleTwo = useRef() 
  const titleThree = useRef()  
  const textOne = useRef()
  const textTwo = useRef() 
  const textThree = useRef() 
const h2Item = [
{ icon: icon.home_sec_2_1, title: 'Всегда на связи', text: 'Мы принимаем заказы и телефонные звонки 24/7, чтобы вы могли решить любую     проблему, в любое время.'},
{icon: icon.home_sec_2_2, title: 'Лучшие специалисты', text: 'Все члены нашей команды - мастера высокого класса, Средний опыт работы    мастеров - 5 лет!'},
]
const accordItem = [
{ titleRef: titleOne, title: 'наша миссия', textRef: textOne, text: <><span>Работа для людей</span> <br/> Твой Мастер - компания, предоставляющая
широкий спектр услуг по техническому
обслуживанию и многие другие услуги, необходимые для того, чтобы сделать вашу жизнь комфортной и
счастливой. Наши высококлассные специалисты устранят любую неисправность и установят любое
оборудование в вашем доме.</> },
{ titleRef: titleTwo, title: 'наши цели', textRef: textTwo, text: <><span>Достичь успеха</span> <br/> Основная цель - предоставить нашим клиентам максимально полный перечень услуг. Мы стремимся расширять нашу команду экспертов, так как появляется все больше и больше сфер
обслуживания, с которыми мы хотим работать. Мы предлагаем широкий спектр услуг и хотим удовлетворить все потребности наших клиентов. </> },
{ titleRef: titleThree, title: 'наши планы', textRef: textThree, text: <><span> Движение вперед</span> <br/>Наши планы в текущем годы – увеличить срок
гарантийных работ, увеличить
перечень услуг, поднять уровень обслуживания на еще более высокий уровень. Наша компания ценит мнение
клиентов и стремится предоставлять новые услуги. Мы уверены в каждом из наших сотрудников и дорожим их
профессионализмом.</> },
]
const [isActiveAccord, setActiveAccord] = useState(null)
 
useEffect(()=> {
  const title  = document.querySelectorAll('.h2-title__row');
  title[0].nextElementSibling.style.maxHeight =  title[0].nextElementSibling.scrollHeight + 'px';
  title[0].lastElementChild.classList.add('h2-icon__minus') 
    title.forEach(item  => {
     item.addEventListener('click', () => {
       title.forEach(item => {
          item.nextElementSibling.style.maxHeight = 0 + 'px';
          item.classList.remove('accord-active')
         item.lastElementChild.classList.remove('h2-icon__minus') 
        });
       item.lastElementChild.classList.toggle('h2-icon__minus') 
        item.classList.add('accord-active')
       if (item.classList.contains('accord-active')) {
          item.nextElementSibling.style.maxHeight = item.nextElementSibling.scrollHeight + 'px';
        }
        else {
          item.nextElementSibling.style.maxHeight = 0 + 'px';
        }
      });
    });
});
return (
<section className="home-2">
<div className="container">
<h2 className="h2__title">делаем надежный ремонт с&nbsp;гарантией 2&nbsp;года</h2>
<div className="h2__row">
  <div className="h2-left">
    <h4 className="h2-l__text">Твой Мастер - компания, предоставляющая широкий спектр услуг по техническому
      обслуживанию и многие другие услуги, необходимые для того, чтобы сделать вашу жизнь комфортной и
      счастливой. Наши высококлассные специалисты устранят любую неисправность и установят любое оборудование в
      вашем доме. </h4>
      {
        h2Item.map((item, i)=> { 
          return ( 
          <div key={i} className="h2-itemRow">
          <div className="h2-itemLeft"><img src={item.icon} alt="#"/></div>
          <div className="h2-itemRight">
            <div className="h2-item__title">{item.title}</div>
            <h4 className="h2-item__text">{item.text}</h4>
          </div>
        </div>
          )})  
      }
  </div>
  <div className="h2-right">
  {
        accordItem.map((item, i)=> { 
         return ( 
        <React.Fragment key={i}>
           <div
           className="h2-title__row">
          <h3 className="h2-title__title">{item.title}</h3>
          {}
          <div className={isActiveAccord === i ? "h2-title__icon h2-icon__minus" : "h2-title__icon"}></div>
        </div>
        <div
        className={'h2-text__row'}>
          <h4 className="h2-text__text">{item.text}</h4>
        </div>
     </React.Fragment>
          )})  
      }
  </div>
</div>
</div>
</section>
)
}
