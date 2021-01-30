import react, { useEffect } from "react";

import { fetchContact } from "../../actions/Contact.action";

import { connect } from "react-redux";

function SocialContact({ contacts, fetchContact }) {
  
  useEffect(() => {
    fetchContact();
  });

  return (
    <section id="topbar" class="d-none d-lg-block">
      {contacts &&
        contacts.map((contact) => {
          return (
            <div class="container clearfix">
              <div class="contact-info float-left">
                <i class="icofont-envelope"></i>
                <a href="mailto:contact@example.com">{contact.adresse}</a>
                <i class="icofont-phone"></i> {contact.tél}
              </div>
              <div class="social-links float-right">
                <a href={contact.lien_Twitter} class="twitter">
                  <i class="icofont-twitter"></i>
                </a>
                <a href={contact.lien_FB} class="facebook">
                  <i class="icofont-facebook"></i>
                </a>
                <a href={contact.lien_Insta} class="instagram">
                  <i class="icofont-instagram"></i>
                </a>
                <a href={contact.lien_Youtube} class="skype">
                  <i class="icofont-youtube"></i>
                </a>
                <a href={contact.lien_Tumb} class="linkedin">
                  <i class="icofont-tumblr"></i>
                </a>
              </div>
            </div>
          );
        })}
    </section>
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

export default connect(mapStateToProps, mapDispatchToProps)(SocialContact);
