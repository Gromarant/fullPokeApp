import PropTypes from 'prop-types';

function Scroll_btn({action}) {

  const scroll = () =>{ 
    if (action === 'scroll-up') {
      window.scrollTo({ 
        top: 77,  
        behavior: 'smooth'
      });
    }
    else if (action === 'scroll-down') {
      window.scrollTo({ 
        top: document.documentElement.scrollHeight,  
        behavior: 'smooth'
      });
    }
  }


  return (
    <img className='goUp__btn' role='button' src='../../../public/images__GoUp_btn/Pokeball_btn.png' action={action} onClick={scroll}/>
  )
}


Scroll_btn.propTypes = {
  // alt: PropTypes.string,
  action: PropTypes.string,
}

export default Scroll_btn