import axios from 'axios'
import { logout } from './logout'

export const setToken = async () => {
    await axios.get('/sanctum/csrf-cookie', { withCredentials: true })

    const csrfToken = document.cookie
        .split(';')
        .find((cookie) => cookie.trim().startsWith('XSRF-TOKEN='))
        ?.split('=')[1]

    if (!csrfToken) {
        logout()
        throw new Error('Token CSRF não encontrado nos cookies.')
    }

    return decodeURIComponent(csrfToken)
}
