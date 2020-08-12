import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'
import getContentByLang from './utils/info'
import reducer from './reducers'
import App from './routes/App'
import './assets/styles/App.scss'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const Lang = 'es'
const initialState = { contentLanguaje: { Lang: Lang, content: getContentByLang(Lang) }, Notifys: [] }
const store = createStore(reducer, initialState, composeEnhancers())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('app'))