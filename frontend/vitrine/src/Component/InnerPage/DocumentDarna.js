import react from "react";

export default function DocumentDarna(props) {
  return (
    <div class="col-lg-6 faq-item" data-aos="fade-up">
      <h5>{props.document.path_doc}</h5>
      <p></p>
    </div>
  );
}
