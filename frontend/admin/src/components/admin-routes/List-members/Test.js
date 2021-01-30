import React from 'react'
import {useSelector} from 'react-redux'
import { fetchMembers } from '../../../actions/member.actions'


function Test () {
    const memberData = useSelector(state => state.memberData.memberData)
    return (
        <div>
            <p>{memberData}</p>
        </div>
    )
}

export default Test;