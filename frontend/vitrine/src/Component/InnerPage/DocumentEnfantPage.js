import { fetchDocumentEnfant } from "../../actions/documentEnfant";
import { connect } from "react-redux";
import React, { useEffect } from "react";
import DocumentEnfant from './DocumentEnfant'


function DocumentEnfantPage({ documentEnfants, fetchDocumentEnfant }) {
  useEffect(() => {
    fetchDocumentEnfant();
    // console.log("liste", objectifs);
  }, []);

  return (
      
    <section id="faq" class="faq section-bg">
    <div class="container">
      <div class="section-title">
        <h2>Droits de l'enfants</h2>
      </div>

      <div class="row  d-flex align-items-stretch">
        {documentEnfants &&
          documentEnfants.map((documentEnf) => {
            return (
              <DocumentEnfant 
              key={documentEnf.idDocument} 
              document={documentEnf} />
           
          )
            
          })}
      </div>
    </div>
  </section>
     
  );
}

const mapStateToProps = (state) => {
  return {
    documentEnfants: state.documentEnfantData.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDocumentEnfant: () => dispatch(fetchDocumentEnfant()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DocumentEnfantPage);
