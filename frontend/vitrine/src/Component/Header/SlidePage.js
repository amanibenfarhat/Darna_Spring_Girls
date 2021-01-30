import react , { useEffect} from "react";
import Slide from "./Slide";

import {connect } from 'react-redux'

import { fetchSlide } from '../../actions/Slide.action'

/* {slides,fetchSlide} */
function SlidePage() {

   /*  
  useEffect(() => {
    fetchSlide()
    // console.log("liste", objectifs);
  }, [])
  
*/

  return (
    <section id="hero">
       <div id="heroCarousel" class="carousel slide carousel-fade" data-ride="carousel">
           <ol class="carousel-indicators" id="hero-carousel-indicators"></ol>

           <div class="carousel-inner" role="listbox">

<div class="carousel-item active"  style={{ backgroundImage: `url('https://tunisie.co/uploads/images/content/elseed-231220-01.jpg')` }}>
  <div class="carousel-container">
    <div class="carousel-content container">
      <h2 class="animate__animated animate__fadeInDown">BienVenue à  <span> Darna </span></h2>
      <p class="animate__animated animate__fadeInUp">Darna Plus Qu'un Foyer</p>
      <a href="#about" class="btn-get-started animate__animated animate__fadeInUp scrollto">voir Plus</a>
    </div>
  </div>
</div>

<div class="carousel-item"  style={{ backgroundImage: `url('https://www.espacemanager.com/sites/default/files/field/image/sanoffe.jpg')` }}>
  <div class="carousel-container">
    <div class="carousel-content container">
      <h2 class="animate__animated animate__fadeInDown">Darna</h2>
      <p class="animate__animated animate__fadeInUp">Plus Qu'un Foyer</p>
      <a href="#about" class="btn-get-started animate__animated animate__fadeInUp scrollto">voir Plus</a>
    </div>
  </div>
</div>
<div class="carousel-item"  style={{ backgroundImage: `url('https://www.ilboursa.com/handlers/image_news_get.ashx?id=093635B4-BF33-4E34-A24A-D1631D246DAE')` }}>
  <div class="carousel-container">
    <div class="carousel-content container">
      <h2 class="animate__animated animate__fadeInDown">Darna</h2>
      <p class="animate__animated animate__fadeInUp">Plus Qu'un Foyer</p>
      <a href="#about" class="btn-get-started animate__animated animate__fadeInUp scrollto">voir Plus</a>
    </div>
  </div>
</div>


           
           </div>


           <a class="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon icofont-rounded-left" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#heroCarousel" role="button" data-slide="next">
          <span class="carousel-control-next-icon icofont-rounded-right" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
        </div>
    </section>
  );

}

/*
    {
                                  
                               
                                  slides && slides.map( (slide) => {
                                   
                                    return(
                                      <Slide 
                                        key={slide.idSlide} 
                                        slide={slide} />
                                    )
                                                    
                                  
                                 }) 
                                 
                                } */


const mapStateToProps = state => {
  return {
    slides: state.slideData.data
    
  }
  

};

const mapDispatchToProps = dispatch => {
  return {
    fetchSlide : () => dispatch(fetchSlide())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SlidePage);




//   style={{ backgroundImage: `url('assets/img/slide/slide-3.jpg')` }}

/*
 <div class="carousel-item active" style={{ backgroundImage: `url('assets/img/slide/slide-1.jpg')` }}>
            <div class="carousel-container">
              <div class="carousel-content container">
                <h2 class="animate__animated animate__fadeInDown">Welcome to <span>Mamba</span></h2>
                <p class="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                <a href="#about" class="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
              </div>
            </div>
          </div>
          */