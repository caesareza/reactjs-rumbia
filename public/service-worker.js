// const CACHE_NAME = 'valhala-cache-v1';

// This code executes in its own worker or thread
self.addEventListener('install', (event) => {
    console.log('Service worker install', event)
})
self.addEventListener('fetch', (event) => {
    console.log('Service worker fetched', event.request.url)
})
self.addEventListener('activate', (event) => {
    console.log('Service worker activated', event)
})

self.addEventListener('push', (event) => {
    const data = event.data?.json() ?? {}
    const title = data.title || 'Rumbia Tech - Agustus  2024'
    const message = data.message || 'Error 500, message can be fetched'
    const icon = '/app-icon-192x192.png'

    const options = {
        body: message,
        icon,
        badge: icon,
        data: {
            url: data.url || '/',
        },
    }

    event.waitUntil(self.registration.showNotification(title, options))

    console.log('notification', event.data.json().title)
})
