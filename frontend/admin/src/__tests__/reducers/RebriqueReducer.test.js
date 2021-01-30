import rubriqueData from '../../reducers/RubriqueReducer';
import * as types from '../../actions/types'

describe('Objectifs reducer', () => {
  
    it('should return the initial state', () => {
    expect(rubriqueData(undefined, {})).toEqual({"data": [], "error": null, "isLoading": false})
  })


  it('should handle error ', () => {
    expect( rubriqueData([], { error: types.FETCH_PRESENTATION_ERROR, isLoading: false }) ).toEqual(
      
    
      []
    )

})


it('fetch_rubrique_succ   ', () => {
    expect( rubriqueData([], { error: types.FETCH_PRESENTATION_SUCCESS, isLoading: false }) ).toEqual( [ ]
    )

})


it('fetch_rubrique_error  ', () => {
    expect( rubriqueData([], { error: types.FETCH_PRESENTATION_ERROR, isLoading: false }) ).toEqual( [ ]
    )

})

})


  


