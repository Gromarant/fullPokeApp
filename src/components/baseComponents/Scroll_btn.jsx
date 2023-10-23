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
    <div role='button' className='scroll__btn' action={action} onClick={scroll}>
      <img className={visibility === false ? 'hidden' : ''} src='..\..\src\assets\images__Scroll_btn\scroll-up-default.png' alt='Button to go-up'/>
    </div>
  )
}


Scroll_btn.propTypes = {
  action: PropTypes.string,
  visibility: PropTypes.bool,
}

export default Scroll_btn