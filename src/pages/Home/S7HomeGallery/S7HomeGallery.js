import React, { useState } from 'react'
import { AddOffsetPadding } from '../../../components/OffsetPadding/OffsetPadding'
import Slider from '../../../components/Slider/Slider'
import img from '../../../data/images'
export default function S7HomeGallery() {
  const tabContent = [
  {  images: [ img.home_sec_7_1_1, img.home_sec_7_1_2, img.home_sec_7_1_3,  img.home_sec_7_1_4, img.home_sec_7_2_1, img.home_sec_7_2_3, img.home_sec_7_2_4,  img.home_sec_7_3_1, img.home_sec_7_3_2, img.home_sec_7_3_3,  img.home_sec_7_3_4, img.home_sec_7_4_1, img.home_sec_7_4_2 ]},
  {  images: [img.home_sec_7_1_1, img.home_sec_7_1_2, img.home_sec_7_1_3,  img.home_sec_7_1_4  ]},
    {  images: [img.home_sec_7_2_1, img.home_sec_7_2_2, img.home_sec_7_2_3,  img.home_sec_7_2_4  ]},
  {  images: [img.home_sec_7_3_1, img.home_sec_7_3_2, img.home_sec_7_3_3,  img.home_sec_7_3_4  ]},
  {  images: [img.home_sec_7_4_1, img.home_sec_7_4_2, img.home_sec_7_3_1,  ]},
  ]
  const tabTtitle = [ 'ВСЕ', 'ЭЛЕКТРИКА', 'САНТЕХНИКА', 'СБОРКА МЕБЕЛИ', 'РЕМОНТ'  ]
  const [ isActiveTab, setActiveTab ] = useState(0)
  const [isActiveGallery, setActiveGallery] = useState(false)
  return (
<>
<section className="home-7">
<div className="container">
<h2 className="h7-title">наша фотогалерея</h2>
<div className="h7-sectionName__row">
  <div className="gallery-title__row">
{
      tabTtitle.map((item, i)=> { 
        return ( 
        <div key={i}
        onClick={()=> setActiveTab(i)}
        className={isActiveTab === i ? "h7-sectionName_title sectionName__active" : ' h7-sectionName_title' }>{item}</div>
        )})  
    }
  </div>
</div>
<div className="imageRow_wrapper">
{}
{
tabContent.map((_, i)=> { 
      return ( 
      <div
      onClick={()=> {setActiveGallery(true); AddOffsetPadding()}}
      key={i} className={isActiveTab === i ?  'h7-imageRow  h7-imageRow__active' : 'h7-imageRow  ' } >
        {
          tabContent[i].images.map((item, i)=> { 
            return ( 
            <div key={i} className="gallery-imageAll"><img src={item} alt="фото"/></div>
            )})  
        }
      </div>
      )}) 
  } 
  </div> 
  </div>
     <Slider
     setActiveGallery={setActiveGallery}
     isActiveGallery={isActiveGallery}
     sliderImage={tabContent[isActiveTab].images}
     />
</section>
   </>
  )
}
