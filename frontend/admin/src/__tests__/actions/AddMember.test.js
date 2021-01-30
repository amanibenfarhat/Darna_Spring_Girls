import React from "react"
import { render,act,cleanup} from "@testing-library/react"
import CreateMember from "../../components/admin-routes/List-members/CreateMember"
import user from "@testing-library/user-event"
import { Provider } from 'react-redux'
import store from '../../store'
//import * as actions from '../../Actions/authAction'

describe("test register user", () => {
    afterEach(cleanup)

  test.skip("The Register component must work without crashing", () => {
    const { debug } = render(<Provider store={store}><CreateMember/></Provider>);
    debug()
  });
  test.skip("Testing Register Form : username,nom,prenom,email,fonction,datenaissance ,password ,button signupbtn", () => {
    const { debug, getByLabelText,getByTestId} = render(
      <Provider store={store}><CreateMember/></Provider>
    );
    const username = getByLabelText(/username/i);
    debug(username)
    expect(username).toBeTruthy();
    expect(username).toHaveAttribute("type", "text");

    const nom = getByLabelText(/nomuser/i);
    debug(nom)
    expect(nom).toBeTruthy();
    expect(nom).toHaveAttribute("type", "text");

    const prenom = getByLabelText(/prenom/i);
    debug(prenom)
    expect(prenom).toBeTruthy();
    expect(prenom).toHaveAttribute("type", "text");

    const email = getByLabelText(/email/i);
    debug(email)
    expect(email).toBeTruthy();
    expect(email).toHaveAttribute("type", "email");

    const fonction = getByLabelText(/fonction/i);
    debug(fonction)
    expect(fonction).toBeTruthy();
    expect(fonction).toHaveAttribute("type", "text");

    const dateNaissance = getByLabelText(/dateNaissance/i);
    debug(dateNaissance)
    expect(dateNaissance).toBeTruthy();
    expect(dateNaissance).toHaveAttribute("type", "text");

    const password = getByLabelText(/password/i);
    debug(password)
    expect(password).toBeTruthy();
    expect(password).toHaveAttribute("type", "password");
    expect(getByTestId("signupbtn")).toBeTruthy()
  });
  test.skip("Testing change input and Button", async () => {
    const promise=Promise.resolve()
    //const mockRegister = jest.fn(()=>promise);
    const mockRegister = jest.fn();

    const { debug, getByLabelText,getByTestId } = render(<Provider store={store}><CreateMember/></Provider>)
    
    const username = getByLabelText(/username/i)
    const Userusername="Mohamed BN"
    user.type(username, Userusername)
    expect(username).toHaveValue(Userusername)
    debug(username) 

    const nom = getByLabelText(/nomuser/i)
    const nomcontent="Mohamed"
    user.type(nom, nomcontent)
    expect(nom).toHaveValue(nomcontent)
    //debug(nom)
    
    const prenom = getByLabelText(/prenom/i)
    const prenomcontent="ben salah"
    user.type(prenom, prenomcontent)
    expect(prenom).toHaveValue(prenomcontent)
    //debug(prenom)

    const email = getByLabelText(/email/i)
    const emailcontent="mohamed@gmail.com"
    user.type(email, emailcontent)
    expect(email).toHaveValue(emailcontent)
    //debug(email)

    const fonction = getByLabelText(/fonction/i)
    const fonctioncontent="étudiant"
    user.type(fonction, fonctioncontent)
    expect(fonction).toHaveValue(fonctioncontent)
   // debug(fonction)

    const dateNaissance = getByLabelText(/dateNaissance/i)
    const dateNaissancecontent="21-06-1996"
    user.type(dateNaissance, dateNaissancecontent)
    expect(dateNaissance).toHaveValue(dateNaissancecontent)
    //debug(dateNaissance)

    const password = getByLabelText(/password/i)
    const Userpassword="123456"
    user.type(password, Userpassword)
    expect(password).toHaveValue(Userpassword)
    //debug(password) 

    const signupbtn = getByTestId("signupbtn")
    user.click(signupbtn)
    await act(() => promise)

    expect(mockRegister).toHaveBeenCalled()
    expect(mockRegister).toHaveBeenCalledTimes(1) 
  })
});
