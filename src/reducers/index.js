import { actionTypes } from '../actions'
import getContentByLang from '../utils/info'

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.SET_CONTENT_LANGUAJE:
            return {
                ...state,
                contentLanguaje: { Lang: action.payload, content: getContentByLang(action.payload) }
            }
        case actionTypes.SET_NOTIFICATION:
            return {
                ...state,
                Notifys: [...state.Notifys, action.payload]
            }
        case actionTypes.DELETE_NOTIFICATION:
            return {
                ...state,
                Notifys: [...state.Notifys.filter(item => item.id !== action.payload)]
            }
        default:
            return state
    }
}

export default reducer