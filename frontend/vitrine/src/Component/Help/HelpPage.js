import React , {useEffect} from 'react';
import { fetchHelp } from '../../actions/Help.action';
import {connect } from 'react-redux'


function HelpPage({helps, fetchHelp}) {

  useEffect(() => {
    fetchHelp()
   
  })
  
 return (
   
  <section id="aider" class="services">
  <div class="container">

    <div class="section-title">
      <h2>Nous Aider</h2>
    </div>
  
    {
                                  
                                  helps && helps.map( (help) => {
                                      return(
                                       
                                        <div class="row">
                                        <div class="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
                                          <div class="icon"><i class="icofont-question"></i></div>
                                          <h4 class="title"><a href="#">Pourquoi nous aider ?</a></h4>
                                          <p class="description">{help.pk_aider} </p>
                                        </div>
                                        <div class="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
                                          <div class="icon"><i class="icofont-bulb-alt"></i></div>
                                          <h4 class="title"><a href="">Comment nous aider</a></h4>
                                          <p class="description">{help.comment_aider}</p>
                                        </div>
                                        <div class="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
                                          <div class="icon"><i class="icofont-heart-alt"></i></div>
                                          <h4 class="title"><a href="">Volontariat</a></h4>
                                          <p class="description">{help.volontariat}</p>
                                        </div>
                                       
                                        </div>
                                      )
                                    
                                      }) } 

  

  </div>
</section>
  
    );
}



const mapStateToProps = state => {
  return {
    helps : state.helpData.data
    
  }
  // console.log("state", state);

};

const mapDispatchToProps = dispatch => {
  return {
    fetchHelp : () => dispatch(fetchHelp())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HelpPage);
