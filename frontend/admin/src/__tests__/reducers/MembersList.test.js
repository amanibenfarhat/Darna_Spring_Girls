import React from 'react'
import {render} from '@testing-library/react'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../../actions/member.actions'
import * as types from '../../actions/types'
import fetchMock from 'fetch-mock'
import expect from 'expect' 

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore()
  })

  it('creates FETCH_MEMBERS_SUCCESS when fetching members has been done', () => {
    fetchMock.getOnce('/members', {
      members: ['return array of members'] ,
      headers: { 'content-type': 'application/json' }
    })

    const expectedActions = [
      { type: types.FETCH_MEMBER_LOADING },
      { type: types.FETCH_MEMBER_SUCCESS,  members: ['return array of members'] }
    ]
    const store = mockStore({ members: [] })
    const data = store.dispatch(actions.fetechMembersSuccess(['return array of members']))
    
    expect(store.getActions()[0].payload).toEqual(expectedActions[1].members)

    
  })
})
