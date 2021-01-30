export default function Slide(props){
    return(
        <div class="carousel-item active" style={{ backgroundImage: `url({props.slide.document})` }}>
        <div class="carousel-container">
          <div class="carousel-content container">
            <h2 class="animate__animated animate__fadeInDown">Bienvenue à <span>Darna</span></h2>
            <p class="animate__animated animate__fadeInUp">Darna Plus qu'un foyer</p>
            <a href="#about" class="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
          </div>
        </div>
      </div>
    )
}