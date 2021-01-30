export default function Project(props) {
  return (
    <div>
      <div class="col-lg-4 col-md-6 portfolio-item filter-web">
      {
        (props.project.status_projet === 'futur' ? (
        <div class="portfolio-wrap">
          <img src={props.project.path_image} class="img-fluid" alt="" />
          <div class="portfolio-info">
            <p>{props.project.description_projet}</p>
            <div class="portfolio-links">
              <a
                href={props.project.path_image}
                data-gall="portfolioGallery"
                class="venobox"
                title="App 1"
              >
                <i class="icofont-eye"></i>
              </a>
            </div>
          </div>
        </div>
         ) : (
         <div></div>
        ))
      }
      </div>

      <div class="col-lg-4 col-md-6 portfolio-item filter-card">
      {
        (props.project.status_projet === 'encours' ? (
            <div class="portfolio-wrap">
              <img src={props.project.path_image} class="img-fluid" alt=""/>
              <div class="portfolio-info">
              
                <p>{props.project.description_projet}</p>
                <div class="portfolio-links">
                  <a href={props.project.path_image} data-gall="portfolioGallery" class="venobox" title="Card 2"><i class="icofont-eye"></i></a>
                </div>
              </div>
            </div>
            ) : (
              <div></div>
             ))
           }
          </div>
    </div>
  );
}


/*

      <div class="col-lg-4 col-md-6 portfolio-item filter-web">
        {
          (props.project.status_projet === "encours" ? (
            <div class="portfolio-wrap">
              <img src={props.project.path_image} class="img-fluid" alt="" />
              <div class="portfolio-info">
                <p>{props.project.description_projet}</p>
                <div class="portfolio-links">
                  <a
                    href={props.project.path_image}
                    data-gall="portfolioGallery"
                    class="venobox"
                    title="Web 3"
                  >
                    <i class="icofont-eye"></i>
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <h3> Pas de project encours</h3>
          ))
        }
      </div>
      */