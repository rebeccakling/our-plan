import { createAction } from 'redux-actions'

export const CHANGE_TITLE = "CHANGE_TITLE"
const _changeTitle = createAction(CHANGE_TITLE)

const changeTitle = payload => dispatch => {
    dispatch(_changeTitle(payload))
}

export const actionCreators = {
    changeTitle,
}