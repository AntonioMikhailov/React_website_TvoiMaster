import React from 'react'
import ButtonH2 from '../../../components/ButtonH2/ButtonH2'
import icon from '../../../data/icons'

export default function S3HomeWhat() {

const h3Column = [
{icon: icon.home_sec_3_1, title: 'сантехника', text: <>Сантехника требует определенных профессиональных навыков и&nbsp;рабочей силы.
Мы&nbsp;можем предложить вам решение проблемы, так как знаем об&nbsp;этом все.</>},
{icon: icon.home_sec_3_2, title: 'электрика', text: <>На&nbsp;рынке монтажно-строительных работ, наше предприятие занимает лидирующую
позицию, выполняя взятые на&nbsp;себя обязательства точно в&nbsp;заданные сроки.</>},
{icon: icon.home_sec_3_3, title: 'сборка мебели', text: <>Наша фирма предоставляет широкий ассортимент услуг, включающий в&nbsp;себя
перевозку, сборкой и&nbsp;разбор мебели на&nbsp;дому в&nbsp;Москве и&nbsp;области.</>},
]
return (
<section className="home-3">
<div className="container">
<h2 className="h3-title">что мы делаем?</h2>
<div className="h3-row">
  {
    h3Column.map((item, i)=> { 
     return ( 
      <div key={i} className="h3-column">
      <div className="h3-item__row">
      <div className="h3-item__icon"><img src={item.icon} alt="icon"/></div>
      <h3 className="h3-item__title">{item.title}</h3>
      <h4 className="h3-item__text">{item.text}</h4>
     
      <ButtonH2
      link={'about'}
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
