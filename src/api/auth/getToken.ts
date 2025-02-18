export const getToken = () => {
    const csrfToken = document.cookie
        .split('; ')
        .find((row) => row.startsWith('XSRF-TOKEN='))
        ?.split('=')[1]

    if (!csrfToken) {
        throw new Error('Token não encontrado')
    }

    return decodeURIComponent(csrfToken)
}
