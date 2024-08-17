import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import { BrowserRouter } from 'react-router-dom'

import './index.css'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StrictMode>
)

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('/service-worker.js')
            .then((registration) => {
                console.log(
                    'ServiceWorker registration successful with scope: ',
                    registration.scope
                )
            })
            .catch((error) => {
                console.log('ServiceWorker registration failed: ', error)
            })
    })
}

if ('Notification' in window) {
    // Check current permission
    if (Notification.permission === 'default') {
        // Request permission if not granted yet
        Notification.requestPermission()
            .then((permission) => {
                if (permission === 'granted') {
                    console.log('Notification permission granted.')
                } else {
                    console.error('Notification permission denied.')
                }
            })
            .catch((error) => {
                console.error(
                    'Error requesting notification permission:',
                    error
                )
            })
    } else {
        console.log('Notification permission already granted or denied.')
    }
}
