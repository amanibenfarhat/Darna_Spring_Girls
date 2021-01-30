
import React ,{useEffect  } from "react";

import {connect } from 'react-redux'


import { fetchProducts } from '../../actions/Product.action'
import Product from "./Product";

function ProductPage({products, fetchProducts}) {

  useEffect(() => {
    fetchProducts()
   
  }, [])


  return (
    <section id="product" class="portfolio section-bg">
    <div class="container" data-aos="fade-up" data-aos-delay="100">

      <div class="section-title">
        <h2>Nos Produit Dérivés </h2>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      </div>


      <div class="row portfolio-container">

       

      {
                                  
                                  products && products.map( (product) => {
                                   
                                    return(
                                      <Product 
                                        key={product.id} 
                                        product={product} />
                                    )
                                                    
                                 }) 
                                } 


        

       



      </div>

    </div>
  </section>
  );
}


const mapStateToProps = state => {
  return {
    products : state.produitGalleryData.data
    
  }
  

};

const mapDispatchToProps = dispatch => {
  return {
      fetchProducts : () => dispatch(fetchProducts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
