import { fetchDocumentEtudes } from "../../actions/documentEtude.action";
import { connect } from "react-redux";
import React, { useEffect } from "react";
import DocumentEtude from './DocumentEtude'

function DocumentEtudePage({ documentEtudes, fetchDocumentEtudes }) {
  useEffect(() => {
    fetchDocumentEtudes();
    // console.log("liste", objectifs);
  }, []);

  return (
      
    <section id="faq" class="faq section-bg">
    <div class="container">
      <div class="section-title">
        <h2>Droits de l'enfants</h2>
      </div>

      <div class="row  d-flex align-items-stretch">
        {documentEtudes &&
          documentEtudes.map((documentEtude) => {
            return (
                <DocumentEtude 
                key={documentEtude.idDocument} 
                documentEtudes={documentEtude} />
          )
            
          })}
      </div>
    </div>
  </section>
     
  );
}

const mapStateToProps = (state) => {
  return {
    documentEtudes: state.documentEtudeData.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDocumentEtudes: () => dispatch(fetchDocumentEtudes()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DocumentEtudePage);
