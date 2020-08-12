export const actionTypes = {
    SET_CONTENT_LANGUAJE: 'SET_CONTENT_LANGUAJE',
    SET_NOTIFICATION: 'SET_NOTIFICATION',
    DELETE_NOTIFICATION: 'DELETE_NOTIFICATION',
}

export const setContentLanguaje = payload => (
    {
        type: actionTypes.SET_CONTENT_LANGUAJE,
        payload,
    }
)

export const setNotification = payload => (
    {
        type: actionTypes.SET_NOTIFICATION,
        payload,
    }
)

export const deleteNotification = payload => (
    {
        type: actionTypes.DELETE_NOTIFICATION,
        payload,
    }
)