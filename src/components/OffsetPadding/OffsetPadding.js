 
export function RemoveOffsetPadding() {
   setTimeout(() => {
    document.body.style.marginRight = 0 + 'px';
    document.body.classList.remove('lock');
   }, 500);
}

export function AddOffsetPadding(dataButtonS7 = true) { 
 let marginOffset =  window.innerWidth - document.body.clientWidth;
  if(dataButtonS7===false) { // получили false - значит не делаем компенсацию
  document.body.style.marginRight = 0 + 'px';
   } else {
   document.body.style.marginRight = marginOffset + 'px';
     document.body.classList.add('lock');
   }
   }

