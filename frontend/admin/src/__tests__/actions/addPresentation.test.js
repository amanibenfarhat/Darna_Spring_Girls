import * as actions from '../../actions/rubriques.actions'
import * as types from '../../actions/types'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { createStore } from 'redux'
import * as serviceapi from '../../services/Add.service';

jest.unmock('../../services/Add.service');
;
serviceapi.addPresentation = jest.fn(
  () => new Promise((resolve, reject) => resolve()),
);
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const store = createStore(mockStore)

describe('async actions', () => {
  beforeEach(() => { // Runs before each test in the suite
    //store.clearActions();
  });
  it.skip('creates ADD Presentation when add has been done',()=>{
    const expectedActions = [
      { type: types.ADD_PRESENTATION_SUCCESS }
    ]

    return store.dispatch(actions.addPresentation).then(() => {
      // return of async actions
      // expect(store.getActions()).toEqual(expectedActions)
    })
  })
 
})

describe('actions', () => {
  it('should create an action to add a presentation', () => {
    const description_presentation = 'description bla bla'
    const expectedAction = {
      type: types.ADD_PRESENTATION_SUCCESS,
      description_presentation
    }
    // expect(actions.addPresentation(description_presentation)).toEqual(expectedAction)
  })
})