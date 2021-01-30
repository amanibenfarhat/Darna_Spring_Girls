import react, { useEffect } from "react";

import { fetchContact } from "../../actions/Contact.action";

import { connect } from "react-redux";

function Footer({ contacts, fetchContact }) {
  useEffect(() => {
    fetchContact();
  });
  return (
    <footer id="footer">
      <div class="footer-top">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6 footer-info">
              <h3>Darna</h3>
              {contacts &&
                contacts.map((contact) => {
                  return (
                    <div>
                      <p>{contact.adresse}</p>
                      <br></br>
                      <p>
                        {" "}
                        <strong>Phone:</strong> {contact.tél}
                      </p>
                      <br></br>
                      <p>
                        {" "}
                        <strong>Email:</strong> {contact.email}
                      </p>
                      <div class="social-links mt-3">
                        <a href={contact.lien_Twitter} class="twitter">
                          <i class="bx bxl-twitter"></i>
                        </a>
                        <a href={contact.lien_FB} class="facebook">
                          <i class="bx bxl-facebook"></i>
                        </a>
                        <a href={contact.lien_Insta} class="instagram">
                          <i class="bx bxl-instagram"></i>
                        </a>
                        <a href={contact.lien_Youtube}>
                          <i class="bx bxl-youtube"></i>
                        </a>
                        <a href={contact.lien_Tumb}>
                          <i class="bx bxl-tumblr"></i>
                        </a>
                      </div>
                    </div>
                  );
                })}
            </div>

            <div class="col-lg-2 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i class="bx bx-chevron-right"></i> <a href="#">Home</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i> <a href="#">A props</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i> <a href="#">Services</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>{" "}
                  <a href="#">Terms of service</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>{" "}
                  <a href="#">Privacy policy</a>
                </li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 footer-links">
              <h4>notre Services</h4>
              <ul>
                <li>
                  <i class="bx bx-chevron-right"></i> <a href="#">Blog</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i> <a href="#">Action</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i> <a href="#"></a>Donation
                </li>
              </ul>
            </div>

            <div class="col-lg-4 col-md-6 footer-newsletter">
              <h4>Our Newsletter</h4>
              <p>
                Tamen quem nulla quae legam multos aute sint culpa legam noster
                magna
              </p>
              <form action="" method="post">
                <input type="email" name="email" />
                <input type="submit" value="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  console.debug(state);

  return {
    contacts: state.ContactData.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchContact: () => dispatch(fetchContact()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
