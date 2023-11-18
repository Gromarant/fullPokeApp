import PropTypes from 'prop-types';

function Scroll_btn({action, visibility=false}) {

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
    <div role='button' className={visibility === false ? 'hidden' : 'scroll__btn'} action={action} onClick={scroll}>
      <img src='../../src/assets/images/scroll-up-default.webp' alt='Button to go-up'/>
    </div>
  )
}


Scroll_btn.propTypes = {
  action: PropTypes.string,
  visibility: PropTypes.bool,
}

export default Scroll_btn