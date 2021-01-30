import React from "react";

export default function Product(props) {
  return (
   

    
         <div class="col-lg-4 col-md-6 portfolio-item filter-app">
          <div class="portfolio-wrap">
            <img src={props.product.path} class="img-fluid" alt="" />
            <div class="portfolio-info">
              <h4>App 1</h4>
              <p>App</p>
              <div class="portfolio-links">
                <a href={props.product.path} data-gall="portfolioGallery" class="venobox" title="App 1"><i class="icofont-eye"></i></a>
                <a href="portfolio-details.html" title="More Details"><i class="icofont-external-link"></i></a>
              </div>
            </div>
          </div>
        </div>
   
   
  );
}
