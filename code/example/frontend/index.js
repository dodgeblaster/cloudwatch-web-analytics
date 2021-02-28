import React from 'react'
import ReactDOM from 'react-dom'
import App from './path/to/app'
import reportWebVitals from './reportWebVitals'
import analytics from './lib/analytics'

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)

reportWebVitals(analytics)
