
export default function ProjectDetailPage(props){
    return(
    
        <main id="main">
      
          <section class="breadcrumbs">
            <div class="container">
      
              <div class="d-flex justify-content-between align-items-center">
                <h2>Nos Projets </h2>
                <ol>
                  <li><a href="index.html">Accueil</a></li>
                  <li><a href="portfolio.html">Nos Projets </a></li>
                  <li>Details du projet</li>
                </ol>
              </div>
      
            </div>
          </section>
          <section class="portfolio-details">
            <div class="container">
      
              <div class="portfolio-details-container">
      
                
                  
                  <img src={props.project.path_image} class="img-fluid" alt=""/>
               
      
                <div class="portfolio-info">
                  <h3>Project information</h3>
                  <ul>
                    <li><strong>Category</strong>: Web design</li>
                    <li><strong>Client</strong>: ASU Company</li>
                    <li><strong>Project date</strong>: 01 March, 2020</li>
                    <li><strong>Project URL</strong>: <a href="#">www.example.com</a></li>
                  </ul>
                </div>
      
              </div>
      
              <div class="portfolio-description">
                <h2>This is an example of portfolio detail</h2>
                <p>
                  {props.project.description_projet}
                </p>
              </div>
            </div>
          </section>
        
      
        </main>
      
      
    )
}