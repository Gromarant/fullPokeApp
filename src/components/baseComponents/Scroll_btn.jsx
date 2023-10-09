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
    <img className='scroll__btn' role='button' src='../../../public/images__Scroll_btn/scroll-up-default.png' action={action} onClick={scroll}/>
  )
}


Scroll_btn.propTypes = {
  action: PropTypes.string,
}

export default Scroll_btn