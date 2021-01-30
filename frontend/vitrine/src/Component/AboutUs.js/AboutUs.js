import react, { useEffect } from "react";

import { fetchAbout } from "../../actions/AboutUs.action";

import { connect } from "react-redux";

function AboutUs({ about, fetchAbout }) {
  useEffect(() => {
    fetchAbout();
  }, []);

  return (
    <section id="about" class="about">
      <div class="container">
        <div class="row no-gutters">
          <div class="col-lg-6 video-box">
            <img src="assets/img/darna3.jpg" class="img-fluid" alt="" />
            <a
              href="https://www.youtube.com/watch?v=jDDaplaOz7Q"
              class="venobox play-btn mb-4"
              data-vbtype="video"
              data-autoplay="true"
            ></a>
          </div>

          <div class="col-lg-6 d-flex flex-column justify-content-center about-content">
            <div class="section-title">
              <h2>Présentation</h2>

              {about &&
                about.map((abouts) => {
                  return (
                    <p class="font-italic">{abouts.description_presentation}</p>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    about: state.AboutData.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAbout: () => dispatch(fetchAbout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AboutUs);
