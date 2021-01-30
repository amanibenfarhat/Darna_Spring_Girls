import React, { useEffect } from "react";

import { connect } from "react-redux";

import { fetchObjectifs } from "../../actions/Objectif.actions";
import Objectif from "./Objectif";

function ObjectifPage({ objectifs, fetchObjectifs }) {
  useEffect(() => {
    fetchObjectifs();
    // console.log("liste", objectifs);
  }, []);

  return (
    <section class="about-lists">
      <div class="container">
        <div class="row no-gutters">
          {objectifs &&
            objectifs.map((objectif) => {
              return <Objectif key={objectif.idObjectif} objectif={objectif} />;
            })}
        </div>
      </div>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    objectifs: state.rubriqueData.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchObjectifs: () => dispatch(fetchObjectifs()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ObjectifPage);
