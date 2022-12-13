import React, { useState } from 'react'
import img from '../../../data/images'
import SliderSlick from "react-slick";
import icon from '../../../data/icons';
export default function S1RepSingle() {
  const imgRepairSingle = [ img.repair_sec_1gallery_1, img.repair_sec_1gallery_2,img.repair_sec_1gallery_3,img.repair_sec_1gallery_4, img.repair_sec_1gallery_5,]
  const [isAutoPlay, setAutoPlay] = useState(true)
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    autoplay: isAutoPlay,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    pauseOnHover: false,
  };
  return (
    <section className="repair-single-1">
    <div className="container">
      <h1 className="rs1-title">Косметический ремонт </h1>
      <h4 className="rs1-text">Косметический ремонт в квартире — подходит, если хотите быстро и без особых затрат обновить
        интерьер в квартире. Если не планируете переносить перегородки, менять водопроводные и канализационные трубы,
        двери, окна - то вам нужен косметический ремонт. Не будет заливки новой бетонной стяжки или штробления стен
        под проводку. Замене подлежат обои, напольное покрытие, отделка потолка.
        <p> Часто собственники квартир полагают, что их опыта достаточно для работы с кистью или мастерком. Но желание
          сэкономить на найме профессионалов оборачивается многомесячной эпопеей с плачевным результатом. Время идет,
          результат не виден, первоначальная смета растет, настроение портится. К тому же никто не гарантирует, что
          стены будут ровными, а результат долговечным.</p>
      </h4>
      {}
      <div className="rs-1__galleryRow">
        <div className="carousel-main">
          <div className="slider-row">
            <SliderSlick {...settings}>
    {
      imgRepairSingle.map((item, i)=> { 
       return ( 
        <div key={i} className="slider-image"><img src={item} alt="фото"/></div>
        )})  
    }
            </SliderSlick>
            {
}
          </div>
        </div>
        <div className="gallery-buttons-row">  
          <div onClick={()=> setAutoPlay(false)}  className="buttons-row__pause"><img src={icon.repair_pause_gallery_button} alt="icon"/></div>
        </div>  
      </div>
      <h4 className="rs1-text">
        Часто собственники квартир полагают, что их опыта достаточно для работы с кистью или мастерком. Но желание
        сэкономить на найме профессионалов оборачивается многомесячной эпопеей с плачевным результатом. Время идет,
        результат не виден, первоначальная смета растет, настроение портится. К тому же никто не гарантирует, что
        стены будут ровными, а результат долговечным. <p>
          Сотрудники компании «ПрофМастер» профессионально демонтируют старую отделку, двери, окна, разберут полы и
          снимут плитку. Затем они зашпаклюют, оштукатурят, выровняют все поверхности, сделают новую, надежную стяжку
          пола, выполнят сантехнические, электротехнические и прочие работы. Мы работаем со всеми видами финишной
          отделки, от обоев и классической керамической плитки до декоративной штукатурки, лепнины и паркета из
          массива. После ремонта мы в обязательном порядке вывозим строительный мусор и обеспечиваем на объекте
          чистоту.</p>
      </h4>
    </div>
  </section>
  )
}
