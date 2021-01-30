import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../../actions/rubriques.actions'
import * as types from '../../actions/types'
import fetchMock from 'fetch-mock'
import expect from 'expect' // You can use any testing library

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore()
  })

  it('creates FETCH_PRESENTATION_SUCCESS when fetching Presentation has been done', () => {
    fetchMock.getOnce('/presentation', {
      body: { description_presentation: ['description'] },
      headers: { 'content-type': 'application/json' }
    })

    const expectedActions = [
      { type: types.FETCH_PRESENTATION_LOADING },
      { type: types.FETCH_PRESENTATION_SUCCESS, body: { description_presentation: ['description'] } }
    ]
    const store = mockStore({ description_presentation: [] })

    return store.dispatch(actions.fetchPresentation()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})