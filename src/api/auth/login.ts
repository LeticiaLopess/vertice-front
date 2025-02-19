import axios from 'axios'
import { setToken } from './setToken'

export const login = async (loginData: { email: string; password: string }) => {
    try {
        const csrfToken = await setToken()
        const response = await axios.post('/login', loginData, {
            headers: {
                'X-XSRF-TOKEN': csrfToken,
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
            },
            withCredentials: true,
        })

        return response.data
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const responseData = error.response?.data
            const statusCode = error.response?.status

            const translations: Record<string, string> = {
                'These credentials do not match our records.':
                    'Credenciais inválidas, verifique seu email e senha.',
                'The email field must be a valid email address.':
                    'O campo de e-mail deve ser um endereço válido.',
                'The password field is required.': 'O campo de senha é obrigatório.',
                'The email field is required.': 'O campo de e-mail é obrigatório.',
            }

            if (statusCode === 422) {
                const errorMessage =
                    responseData?.message ||
                    responseData?.errors?.email?.[0] ||
                    'Erro ao processar.'

                const translatedMessage = translations[errorMessage] || errorMessage

                throw new Error(translatedMessage)
            }

            throw new Error(responseData?.message || 'Erro ao realizar login')
        }
        throw error
    }
}
