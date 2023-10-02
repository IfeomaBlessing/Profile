import React from 'react'
// import image from '../Assets/aboutImg.jpg'
import './Aboutpage.css'
import Heroimg from '../Assets/pix.png'
import html from '../Assets/H-icon.png'
import css from '../Assets/css.png'
import JS from '../Assets/j-icon.png'
import react from '../Assets/R-icon.png'
import github from '../Assets/g-icon.png'


const Aboutpage = () => {
  return (
 
    <div className='about section flex-row' id='About'>
           <h1 style={{marginBottom:"2rem"}}>About Me</h1>   
       <div className='about-container flex-row'>

       
       <div className='left-about'>
        <img alt='my pix' src={Heroimg}/>
        <div className="glow"></div>
       </div>



       <div className='right-about'>
       <div>
           <p> A graduate of the prestigious olabisi olabanjo university with a degree in microbiology, certifications in software development, customer service and relationship management, supervision skills and desktop publishing with more . I
                        am result oriented and looking forward to working on interesting projects and also advance my career.
                    
           </p>
           <a href='IFEOMA OBODOZIE TECH.docx' download > <button>Download CV <i className="fa-solid fa-cloud-arrow-down"></i>
           </button></a>
           </div>

           <div className='h-down'>
      <h4>Tech Stack</h4>
      
      <div className='skills'>
        <img src={html} alt ='HTML icon'/>
        <img src={css} alt ='CSS icon'/>
        <img src={JS} alt ='JS icon'/>
        <img src={react} alt ='REACT icon'/>
        <img src={github} alt ='Github icon'/>
      </div>
      </div> 

       </div>
      
       </div>

       <div className='handles flex'>
       <a href="https://api.whatsapp.com/send?phone=+2347033827430" target='_blank'>
        <i class="fa-brands fa-whatsapp"></i>
       </a>

       <a href="https://www.linkedin.com/in/ifeoma-obodozie-1233241aa" target='_blank'>
        <i class="fa-brands fa-linkedin"></i>
        </a>

       <a href="https://www.twitter.com/Oma_Ifeoma" target='_blank'>
        <i className="fa-brands fa-twitter"></i>
        </a>

        <a href="https://github.com/IfeomaBlessing/" target='_blank'>
        <i class="fa-brands fa-github"></i>
        </a>
       </div>
    </div>
  )
}

export default Aboutpage;