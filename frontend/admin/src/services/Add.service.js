import axios from "axios";

const API_URL = "http://localhost:9094/api/";

class AddService {
  

  addProjet(type_publication,description_publication) {
    return axios.post(API_URL + "publication", {
        type_publication,
        description_publication,
      
        });
  }

  addPresentation(description_presentation) {
    return axios.post(API_URL + "presentation", {
        description_presentation
      
        });
  }

  addObjectif(description_objectif) {
    return axios.post(API_URL + "objectif", {
      description_objectif
      
        });
  }

  addSponsor(formData) {
  //  console.log("added")
  //  debugger
    return axios.post("http://localhost:9094/api/sponsor", formData);
  }

  addHelp(comment_aider,pk_aider, volontariat) {
    return axios.post("http://localhost:9094/Aider/saveAider", {
      comment_aider,
      pk_aider,
      volontariat
      
        });
  }

  addAction(formData) {
    return axios.post("http://localhost:9094/api/saveaction", formData);
  }

  addLien(formData) {
    return axios.post("http://localhost:9094/api/LienDoc", formData);
  }

}

export default new AddService();
