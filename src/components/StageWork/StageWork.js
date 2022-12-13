import React from 'react'
import icon from '../../data/icons'
import ButtonH2 from '../ButtonH2/ButtonH2'
 

export default function StageWork() {

const itemColumn = [
{ icon: icon.about_seс_3_1,  title: 'прием заявки', text: <>Позвоните нам, либо оставьте заявку на сайте.
Расскажите нам, какие работы нужно провести. Мы подберем для Вас лучшего специалиста под ваши задачи
и&nbsp;мастер приедет в удобное для Вас время</>},
{ icon: icon.about_seс_3_2,  title: 'приезд мастера', text: <>Чрез 1 час на Ваш вызов приедет Мастер , оценит весь объем работ. Озвучит Вам
точную стоимость и&nbsp;сразу приступит к работе. Весь инструмент будет с собой.</>},
{ icon: icon.about_seс_3_3,  title: 'сдача работы', text: <>После выполнения заказа,
Вы проверяете работу и по факту выполненных работ оплачиваете сумму любым удобным для Вас способом.
Мастер выдает чек с&nbsp;гарантией на работу</>},
]
return (
<section className="about-3">
<div className="container">
<h2 className="a3-title">Этапы нашей работы</h2>
<div className="a3-row">
{
  itemColumn.map((item, i)=> { 
   return ( 
    <div key={i} className="a3-column">
    <div className="a3-item__row">
      <div className="a3-item__icon"><img src={item.icon} alt="icon"/></div>
      <h3 className="a3-item__title a3-firstTitle">{item.title}</h3>
      <h4 className="a3-item__text">{item.text}</h4>

      <ButtonH2
      link={'/about'}
      text={'узнать больше'}
       />
    
    </div>
  </div>  
    
    )})  
}
 
</div>
</div>
</section>
)
}
