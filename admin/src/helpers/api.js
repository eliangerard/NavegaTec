export const api = async (url, method, body) => {
    try {
        const token = localStorage.getItem('token');
        const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/${url}`, {
            method,
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(body)
        });
        if(response.status === 401) {
            localStorage.removeItem('token');
            localStorage.removeItem('refresh');
            window.location.reload();
        }

        return await response.json();

    } catch (error) {
        console.error(error);
    }
}
