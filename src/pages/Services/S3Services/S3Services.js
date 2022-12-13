import React from 'react'
import ButtonH2 from '../../../components/ButtonH2/ButtonH2'
 
import img from '../../../data/images'

export default function S3Services() {
  return (
<section className="service-3">
      <div className="container">
        <div className="s3-row">
          <div className="s3-left">
            <h2 className="s3-left__title">Нашли дешевле? <br/>Вернем разницу!</h2>
            <h4 className="s3-left__text">Стоимость наших услуг заметно выгоднее, так как все максимально автоматизировано и
              просто.</h4>

              
            <div className="button-container s3-button__container">
              <div className="button-row">
                <div className="s3__buttonOne btnOne">звоните нам: (495) 123 456 78</div>
                <div className="s3__buttonTwo btnTwo">звоните нам: (495) 123 456 78</div>
              </div>
            </div>
          </div>
          <div className="s3-right"><img src={img.services_sec_3} alt="#"/></div>
        </div>
      </div>
   

    </section>
  )
}
