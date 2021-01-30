import react from "react";

export default function Objectif(props) {
  return (
    <div class="col-lg-4 col-md-6 content-item" data-aos="fade-up">
      <span>0{props.objectif.idObjectif} </span>

      <p> {props.objectif.description_objectif}</p>
    </div>
  );
}
