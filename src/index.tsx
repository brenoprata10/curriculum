import React from 'react'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {fab} from '@fortawesome/free-brands-svg-icons'
import {createRoot} from 'react-dom/client'

const root = createRoot(document.getElementById('root')!)

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

// Adding brands to fontawesome
library.add(fab, fas)
