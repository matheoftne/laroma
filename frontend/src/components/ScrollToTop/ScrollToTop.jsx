
import React, {useState} from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Button } from './StyleScrollToTop'; 
  
const ScrollToTop = () =>{ 
  
  const [visible, setVisible] = useState(false) 
  
  const toggleVisible = () => { 
    const scrolled = document.documentElement.scrollTop; 
    if (scrolled > 300){ 
      setVisible(true) 
    }  
    else if (scrolled <= 300){ 
      setVisible(false) 
    } 
  }; 
  
  const scrollToTop = () =>{ 
    window.scrollTo({ 
      top: 0,  
      behavior: 'smooth'
      /* you can also use 'auto' behaviour 
         in place of 'smooth' */
    }); 
  }; 
  
  window.addEventListener('scroll', toggleVisible); 
  
  return ( 
    <Button> 
        <FontAwesomeIcon icon={faChevronUp} onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}} />
    </Button> 
  ); 
} 
  
export default ScrollToTop; 