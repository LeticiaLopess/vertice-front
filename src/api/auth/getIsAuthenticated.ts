import axios from 'axios'

export const getIsAuthenticated = async () => {
    try {
        const response = await axios.get('/isAuthenticated', { withCredentials: true })
        return response
    } catch (error) {
        console.error('Erro ao verificar autenticação:', error)
        return { data: { authenticated: false } }
    }
}
