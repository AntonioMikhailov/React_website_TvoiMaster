import React from 'react'
import img from '../../data/images'
import SliderSlick from "react-slick";
import icon from '../../data/icons';
export default function SliderComment() {
const commentItem = [
  { img: img.home_sec_8_1, title: <>Дарья Беляева <br/> <span>художник</span></>, text: ' Большое спасибо мастерам Твой Мастер! Эти парни работали очень деликатными и быстро. Не было волнения вообще - ни задержки, ни недостатки! Я определенно буду использовать свои услуги снова.' },
  { img: img.home_sec_8_2, title: <> Антон Фомин<br/> <span>менеджер</span></>, text: ' Твой Мастер действительно является командой экспертов! Их представитель обслуживания клиентов помог выбрать правильный сервис, и команда пришла очень быстро! Они молодцы, и я полностью доволен их работой!' },
  { img: img.home_sec_8_3, title: <>Виктория Бельская<br/> <span>менеджер</span></>, text: ' Я очень рада, что я наконец нашла компанию, которая решит все мои домашние проблемы. Они следовали за всеми моими инструкциями, и в то же время их работа шла очень быстро! Очень хороший и дружелюбный персонал и хорошая работа.' },
  { img: img.home_sec_8_1, title: <>Дарья Беляева <br/> <span>художник</span></>, text: ' Большое спасибо мастерам Твой Мастер! Эти парни работали очень деликатными и быстро. Не было волнения вообще - ни задержки, ни недостатки! Я определенно буду использовать свои услуги снова.' },
  { img: img.home_sec_8_2, title: <> Антон Фомин<br/> <span>менеджер</span></>, text: ' Твой Мастер действительно является командой экспертов! Их представитель обслуживания клиентов помог выбрать правильный сервис, и команда пришла очень быстро! Они молодцы, и я полностью доволен их работой!' },
  { img: img.home_sec_8_3, title: <>Виктория Бельская<br/> <span>менеджер</span></>, text: ' Я очень рада, что я наконец нашла компанию, которая решит все мои домашние проблемы. Они следовали за всеми моими инструкциями, и в то же время их работа шла очень быстро! Очень хороший и дружелюбный персонал и хорошая работа.' },
  ]
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    autoplaySpeed: 10000, // задержка между скролами
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows: false,
    autoplay: false,
   pauseOnHover: true,
   responsive: [ // для мобилки 768
   {
     breakpoint: 850,
     settings: {
       slidesToShow: 1,
       slidesToScroll: 1,
     }
   },
  ]
  };
  return (
    <section className="home-8">
    <div className="container h8-container">
    <h2 className="h8-title">Что говорят о нас клиенты</h2>
    <div className="h8-comment__wrapper">
    <div className="h8-comment__row">
    <SliderSlick {...settings} >
      {
        commentItem.map((item, i)=> { 
         return ( 
       <div key={i}  className="h8-comment__column">
          <div className="h8-comment__item">
            <div className="h8-commentItem__row">
              <div className="h8-commentItem__image"><img src={item.img} alt="фото"/></div>
              <div className="h8-commentItem__title">{item.title}</div>
              <div className="h8-commentItem__Quote"><img src={icon.home_quote} alt="icon"/></div>
            </div>
            <h4 className="h8-commentItem__text">{item.text}</h4>
          </div>
        </div>
          )})  
      }
     </SliderSlick>
    </div>
    </div>
    </div>
    </section>
  )
}
