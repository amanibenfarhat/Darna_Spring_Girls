import { connect } from "react-redux";
import React, { useEffect } from "react";


import { fetchDocument } from "../../actions/document.action";

import PDFViewer from "pdf-viewer-reactjs";
import DocumentDarna from "./DocumentDarna";

function DocumentAssociationPage({ documents, fetchDocument }) {
  useEffect(() => {
    fetchDocument();
    // console.log("liste", objectifs);
  }, []);

  return (
       <section id="faq" class="faq section-bg">
          <div class="container">
            <div class="section-title">
              <h2>Association Darna</h2>
            </div>

            <div class="row  d-flex align-items-stretch">
              {documents &&
                documents.map((document) => {
                  return (
                    <DocumentDarna 
                    key={document.idDocument} 
                    document={document} />
                )
                  
                })}
            </div>
          </div>
        </section>
     
  );
}

const mapStateToProps = (state) => {
  return {
    documents: state.documentData.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDocument: () => dispatch(fetchDocument()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DocumentAssociationPage);

/*
   alert(<PDFViewer 
                                        document={{ url: 'https://arxiv.org/pdf/quant-ph/0410100.pdf',}}>

                                        </PDFViewer>)

                                        */
