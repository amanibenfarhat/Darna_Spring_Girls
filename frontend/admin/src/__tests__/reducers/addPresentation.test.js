import reducer from '../../reducers/RubriqueReducer'
import * as types from '../../actions/types'

describe('presentation reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([
      {
        data : [],
        error : null,
        isLoading: false
      }
    ])
  })

  it('should handle ADD_PRESENTATION', () => {
    expect(
      reducer([], {
        type: types.ADD_MEMBER_SUCCESS,
        data: ['Run the tests']
      })
    ).toEqual([
      {
        data : ['Run the tests'],
        error : null,
        isLoading: false
      }
    ])

    expect(
      reducer(
        [
          {
            data : [],
            error : null,
            isLoading: false
          }
        ],
        {
          type: types.ADD_PRESENTATION_SUCCESS,
          data: ['Run the tests']
        }
      )
    ).toEqual([
      {
        data: ['Run the tests'],
        error : null,
        isLoading: false
      },
      {
        data : [],
        error : null,
        isLoading: false
      }
    ])
  })
})