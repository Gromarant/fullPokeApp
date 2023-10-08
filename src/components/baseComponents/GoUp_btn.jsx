// import { useState } from 'react'

function GoUp_btn() {
  // const [visible, setVisible] = useState(false);

  const scrollToTop = () =>{ 
    window.scrollTo({ 
      top: 77,  
      behavior: 'smooth'
    });
  }


  return (
    <img className='goUp__btn' role='button' src='../../../public/Pokeball_btn.png' alt='Button to go up'  onClick={scrollToTop}/>
  )
}

export default GoUp_btn