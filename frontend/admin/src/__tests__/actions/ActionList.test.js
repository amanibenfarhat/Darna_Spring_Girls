import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../../actions/rubriques.actions'
import * as types from '../../actions/types'
import fetchMock from 'fetch-mock'
import expect from 'expect' 

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore()
  })

  it('creates FETCH_ACTION_SUCCESS when fetching Actions has been done', () => {
    fetchMock.getOnce('/rubriques_actions', {
      body: { rubriqueData: [
        {
          datedebut_action: "2020-12-28T00:00:00.000+00:00",
          datedebut_inscrit: "2020-12-28T00:00:00.000+00:00",
          datefin_action: "2020-12-28T00:00:00.000+00:00",
          datefin_inscrit: "2020-12-28T00:00:00.000+00:00",
          description_action: "Bourse aux vêtements",
          etat_action: false,
          id_Action: 2,
          lieu_action: "Gammarth↵",
          nbmembre_action: 20,
          nom_action: "Bourse aux vêtements",
          path_photo: "Photo_aaaa_1609510442200.png"
        },
        {
          datedebut_action: "2020-02-23T00:00:00.000+00:00",
          datedebut_inscrit: "2020-02-23T00:00:00.000+00:00",
          datefin_action: "2020-02-23T00:00:00.000+00:00",
          datefin_inscrit: "2020-02-23T00:00:00.000+00:00",
          description_action: "Dépôt-vente multi-sports",
          etat_action: false,
          id_Action: 3,
          lieu_action: "Tunis",
          nbmembre_action: 20,
          nom_action: "Dépôt-vente multi-sports",
          path_photo: "Photo_zzzz_1609512462303.png"
        }
      ] 
     },
      headers: { 'content-type': 'application/json' }
    })

    const expectedActions = [
      { type: types.FETCH_ACTION_LOADING },
      { type: types.FETCH_ACTION_SUCCESS, 
        body: { 
          rubriqueData: [
            {
              datedebut_action: "2020-12-28T00:00:00.000+00:00",
              datedebut_inscrit: "2020-12-28T00:00:00.000+00:00",
              datefin_action: "2020-12-28T00:00:00.000+00:00",
              datefin_inscrit: "2020-12-28T00:00:00.000+00:00",
              description_action: "Bourse aux vêtements",
              etat_action: false,
              id_Action: 2,
              lieu_action: "Gammarth↵",
              nbmembre_action: 20,
              nom_action: "Bourse aux vêtements",
              path_photo: "Photo_aaaa_1609510442200.png"
            },
            {
              datedebut_action: "2020-02-23T00:00:00.000+00:00",
              datedebut_inscrit: "2020-02-23T00:00:00.000+00:00",
              datefin_action: "2020-02-23T00:00:00.000+00:00",
              datefin_inscrit: "2020-02-23T00:00:00.000+00:00",
              description_action: "Dépôt-vente multi-sports",
              etat_action: false,
              id_Action: 3,
              lieu_action: "Tunis",
              nbmembre_action: 20,
              nom_action: "Dépôt-vente multi-sports",
              path_photo: "Photo_zzzz_1609512462303.png"
            }
          ] 
        } 
      }
    ]
    const store = mockStore({ rubriqueData: [
      {
        datedebut_action: "2020-12-28T00:00:00.000+00:00",
        datedebut_inscrit: "2020-12-28T00:00:00.000+00:00",
        datefin_action: "2020-12-28T00:00:00.000+00:00",
        datefin_inscrit: "2020-12-28T00:00:00.000+00:00",
        description_action: "Bourse aux vêtements",
        etat_action: false,
        id_Action: 2,
        lieu_action: "Gammarth↵",
        nbmembre_action: 20,
        nom_action: "Bourse aux vêtements",
        path_photo: "Photo_aaaa_1609510442200.png"
      },
      {
        datedebut_action: "2020-02-23T00:00:00.000+00:00",
        datedebut_inscrit: "2020-02-23T00:00:00.000+00:00",
        datefin_action: "2020-02-23T00:00:00.000+00:00",
        datefin_inscrit: "2020-02-23T00:00:00.000+00:00",
        description_action: "Dépôt-vente multi-sports",
        etat_action: false,
        id_Action: 3,
        lieu_action: "Tunis",
        nbmembre_action: 20,
        nom_action: "Dépôt-vente multi-sports",
        path_photo: "Photo_zzzz_1609512462303.png"
      }
    ] })

    return store.dispatch(actions.fetchActions()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})