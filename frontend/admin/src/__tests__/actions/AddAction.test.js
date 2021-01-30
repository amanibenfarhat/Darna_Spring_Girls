import React from "react"
import { render,act,cleanup} from "@testing-library/react"
import action from "@testing-library/user-event"
import { Provider } from 'react-redux'
import store from '../../store'
import CreateAction from "../../components/admin-routes/List-rubriques/actions/CreateAction"

describe("test Add Action", () => {
    afterEach(cleanup)

    describe("The CreateAction component must work without crashing", () => {
    const { debug } = render(<Provider store={store}><CreateAction/></Provider>);
    debug()
  });
  describe("Testing CreateAction Form :  name, lieu, dateD, dateF, dateDI, dateFI, nbreM, desciption,button addbtn", () => {
    const { debug, getByLabelText,getByTestId} = render(
      <Provider store={store}><CreateAction/></Provider>
    );
    const name = getByLabelText(/name/i);
    debug(name)
    expect(name).toBeTruthy();
    expect(name).toHaveAttribute("type", "text");

    const lieu = getByLabelText(/lieu/i);
    debug(lieu)
    expect(lieu).toBeTruthy();
    expect(lieu).toHaveAttribute("type", "text");

    const dateD = getByLabelText(/dateD/i);
    debug(dateD)
    expect(dateD).toBeTruthy();
    expect(dateD).toHaveAttribute("type", "text");

    const dateF = getByLabelText(/dateF/i);
    debug(dateF)
    expect(dateF).toBeTruthy();
    expect(dateF).toHaveAttribute("type", "text");

    const dateDI = getByLabelText(/dateDI/i);
    debug(dateDI)
    expect(dateDI).toBeTruthy();
    expect(dateDI).toHaveAttribute("type", "text");

    const dateFI = getByLabelText(/dateFI/i);
    debug(dateFI)
    expect(dateFI).toBeTruthy();
    expect(dateFI).toHaveAttribute("type", "text");

    const nbreM = getByLabelText(/nbreM/i);
    debug(nbreM)
    expect(nbreM).toBeTruthy();
    expect(nbreM).toHaveAttribute("type", "text");

    const desciption = getByLabelText(/desciption/i);
    debug(desciption)
    expect(desciption).toBeTruthy();
    expect(desciption).toHaveAttribute("type", "text");

    expect(getByTestId("addbtn")).toBeTruthy()
  });
  describe("Testing change input and Button", async () => {
    const promise=Promise.resolve()
    //const mockRegister = jest.fn(()=>promise);
    const mockAdd = jest.fn();

    const { debug, getByLabelText,getByTestId } = render(<Provider store={store}><CreateAction/></Provider>)
    
    const name = getByLabelText(/name/i)
    const ActionName="Action 1"
    action.type(name, ActionName)
    expect(name).toHaveValue(ActionName)
    debug(name) 

    const lieu = getByLabelText(/lieu/i)
    const lieuContent="Tunis"
    action.type(lieu, lieuContent)
    expect(lieu).toHaveValue(lieuContent)
    
    const dateD = getByLabelText(/dateD/i)
    const dateDContent="2020-12-02"
    action.type(dateD, dateDContent)
    expect(dateD).toHaveValue(dateDContent)

    const dateF = getByLabelText(/dateF/i)
    const dateFContent="2020-12-30"
    action.type(dateF, dateFContent)
    expect(dateF).toHaveValue(dateDContent)

    const dateDI = getByLabelText(/dateDI/i)
    const dateDIContent="2020-12-02"
    action.type(dateDI, dateDIContent)
    expect(dateDI).toHaveValue(dateDIContent)

    const dateFI = getByLabelText(/dateFI/i)
    const dateFIContent="2020-12-15"
    action.type(dateFI, dateFContent)
    expect(dateFI).toHaveValue(dateFIContent)

    const description = getByLabelText(/description/i)
    const descriptionContent="action description"
    action.type(description, descriptionContent)
    expect(description).toHaveValue(descriptionContent)

    const addbtn = getByTestId("addbtn")
    action.click(addbtn)
    await act(() => promise)

    expect(mockAdd).toHaveBeenCalled()
    expect(mockAdd).toHaveBeenCalledTimes(1) 
  })
});
