import './index.less'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './components/App.jsx'
import { store } from './reducers'
import { Provider } from 'react-redux'

const container = document.getElementById("root")
const root = createRoot(container)
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
)