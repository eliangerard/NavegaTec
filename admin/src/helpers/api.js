export const api = async (url, method = "GET", body) => {
    try {
        const token = localStorage.getItem('token') || localStorage.getItem('refresh');
        if (!token || token == "undefined") {
            localStorage.removeItem('token');
            localStorage.removeItem('refresh');
            return window.location.reload();
        }
        const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/${url}`, {
            method,
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(body)
        });
        if (response.status === 401) {
            localStorage.removeItem('token');
            api('auth/refresh').then(data => {
                localStorage.setItem('token', data.access_token);
                localStorage.setItem('refresh', data.refresh_token);
            });
        }

        return await response.json();

    } catch (error) {
        console.error(error);
    }
}
