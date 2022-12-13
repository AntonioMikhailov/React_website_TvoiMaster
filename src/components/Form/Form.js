import React, { useRef, useState } from 'react'
import ButtonH2 from '../ButtonH2/ButtonH2';

export default function Form({ stylesInput, stylesTextArea,  buttonText, buttonSendText}) {
  const form = useRef()
  const [ buttonValue, setButttonValue] = useState(buttonText);
 

 
  const [values, setValues] = useState(  
    {
      name: '',
      phone: '',
      email: '',
      textarea: '',
     }
  )
 

  function handleName(e) {
     setValues({...values, name: e.target.value })
   }
   function handlePhone(e) { 
    setValues({...values, phone: e.target.value })
   }
   function handleEmail(e) { 
    setValues({...values, email: e.target.value })
   }
  
  function handleTextarea(e) {
    setValues({...values, textarea: e.target.value })
   }

function sendForm(e) {
  e.preventDefault()
 const formData = new FormData(form.current);
   
if(values.textarea && values.phone &&  values.email && values.name ) {

    fetch("http://antoniom.beget.tech/goldgym/phpmailer/mail.php", 
    
    {
  
        method: 'POST',
        body: formData,
      
      });
      setButttonValue(buttonSendText)
       setTimeout(() => {
      
      setValues({...values,
        name: '',  
        phone: '',
        email: '',
        textarea: '',
      })
    
      setButttonValue(buttonText)
    }, 3500);

} else {
  setButttonValue('заполните все поля')
}
}


 
  return (
    <form
     ref={form}
     onSubmit={sendForm}
     action="mail.php"
     method="POST" data-form>

     <input
      value={values.name}
      onChange={handleName} type="text" name='user_name' placeholder="Имя" className={stylesInput}/>
       <input
      value={values.phone}
      onChange={handlePhone} type="text" name='user_name' placeholder="Телефон" className={stylesInput}/>

      <input 
       value={values.email}
      onChange={handleEmail} type="email" name='user_email' placeholder="E-mail" className={stylesInput}/>

     <textarea
      onChange={handleTextarea}
      value={values.textarea}
      name="user_subject" className={stylesTextArea} placeholder='Текст заявки'></textarea>
        {}
       <button className="button-container a1-button__container">
                <div className="button-row">
                  <div className="a1__buttonOne btnOne">{buttonValue}</div>
                  <div className="a1__buttonTwo btnTwo">{buttonValue}</div>
                </div>
              </button>
     
     {}

     </form>
  )
}
