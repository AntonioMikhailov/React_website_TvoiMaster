import React, { useRef } from 'react'
import { useEffect } from 'react'
import icon from '../../../data/icons'

export default function S6HomeCounter() {
  const dig1= useRef()
const dig2= useRef()
const dig3= useRef()
const dig4= useRef()
const countRow = useRef()

  const counterItem = [
    
    { icon: icon.home_sec_6_1,  num: '0', ref: dig1, text: <>вызовов <br/> в месяц</>},
    {icon: icon.home_sec_6_2, num: '0', ref: dig2, text: <>довольных <br/> жильцов</>},
    { icon: icon.home_sec_6_3,  num: '0', ref: dig3, text: <>специалиста  <br/> в штате</>},
    {icon: icon.home_sec_6_4, num: '0', ref: dig4, text: <>лет успешной <br/> работы</>},
  ]

  useEffect(()=> {

    const counterRow = countRow.current;
  const digits_1 = dig1.current;
  const digits_2 = dig2.current;
  const digits_3 = dig3.current;
  const digits_4 = dig4.current;

    window.addEventListener('scroll', function stop() {
      let time = 2000;
      let counterRowOffset = counterRow.getBoundingClientRect().top;
      if (counterRowOffset < window.innerHeight - 150) {
    
        let startCounter = (stepNum, maxDigitNum, selectorID) => {
          let counterID;
          let count = 0;
          let step = stepNum;
          let maxDigit = maxDigitNum;
          let t = time / (maxDigit / step);
          counterID = setInterval(() => {
            count = count + step;
            selectorID.innerHTML = count;
            if (count >= maxDigit) {
              clearInterval(counterID);
            }
            window.removeEventListener('scroll', stop);
          }, t);
        };
     
        startCounter(10, 480, digits_1);
        startCounter(100, 5480, digits_2);
        startCounter(2, 42, digits_3);
        startCounter(1, 14, digits_4);
      }
    })
  
})//

  return (
    <section className="home-6">
    <div className="container">
      <div ref={countRow} className="counter-row">
        {
          counterItem.map((item, i)=> { 
           return ( 
            <div key={i} className="counter-item">
          <div className="counter-item__left"><img src={item.icon} alt="#"/></div>

          <div className="counter-item__right">
            <div ref={item.ref} className="counter-digit__1">{item.num}</div>
            <div className="counter-text">{item.text}</div>
          </div>
        </div>
            )})  
        }
 
      </div>
    </div>
  </section>
  )
}
