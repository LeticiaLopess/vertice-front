import axios from 'axios'
import { getToken } from './getToken'

export const logout = async () => {
    try {
        const csrfToken = getToken() || ''

        await axios.post(
            '/logout',
            {},
            {
                headers: {
                    'X-XSRF-TOKEN': csrfToken,
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    'X-Requested-With': 'XMLHttpRequest',
                },
                withCredentials: true,
            },
        )

        document.cookie = 'XSRF-TOKEN=; max-age=0; path=/;'
        document.cookie = 'laravel_session=; max-age=0; path=/;'
        localStorage.clear()
        sessionStorage.clear()

        window.location.href = '/'
    } catch (error) {
        console.error('Erro ao realizar logout:', error)
        throw error
    }
}
