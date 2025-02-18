import { useMutation } from '@tanstack/vue-query'
import { login } from '@/api/auth/login'
import { useRouter } from 'vue-router'
import axios from '@/plugins/axios'

export const useLoginMutation = () => {
    const router = useRouter()

    return useMutation({
        mutationFn: async (loginData: { email: string; password: string }) => {
            try {
                const response = await login(loginData)
                return response
            } catch (error: any) {
                if (axios.isAxiosError(error)) {
                    const responseData = error.response?.data

                    if (error.response?.status === 422 || error.response?.status === 401) {
                        throw new Error(
                            responseData?.message ||
                                responseData?.errors?.email?.[0] ||
                                'Credenciais inválidas',
                        )
                    }
                }
                throw error
            }
        },
        onSuccess: () => {
            router.push('/dashboard')
        },
        onError: (error: Error) => {
            return error.message
        },
    })
}
