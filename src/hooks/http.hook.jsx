// import { useState, useCallback } from "react";

// export const useHttp = () => {
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);

//     const request = useCallback(async (url, method = 'GET', body = null, headers = {'Content-Type': 'application/json'}) => {

//         setLoading(true);

//         try {
//             const response = await fetch(url, {method, body, headers});

//             if (!response.ok) {
//                 throw new Error(`Could not fetch ${url}, status: ${response.status}`);
//             }

//             const data = await response.json();

//             setLoading(false);
//             return data;
//         } catch(e) {
//             setLoading(false);
//             setError(e.message);
//             throw e;
//         }
//     }, []);

//     const clearError = useCallback(() => setError(null), []);

//     return {loading, request, error, clearError}
// }


import { useState, useCallback } from "react";

export const useHttp = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const request = useCallback(async (url, method = "GET", body = null, headers = { "Content-Type": "application/json" }) => {
        setLoading(true);
        setError(null); // Resetează eroarea înainte de un nou request

        try {
            const response = await fetch(url, { method, body, headers });

            // Verifică dacă răspunsul nu este ok
            if (!response.ok) {
                let errorMessage = `Could not fetch ${url}, status: ${response.status}`;
                if (response.status === 404) {
                    errorMessage = "Resource not found (404)";
                } else if (response.status === 500) {
                    errorMessage = "Internal server error (500)";
                }
                throw new Error(errorMessage);
            }

            const data = await response.json();
            return data;
        } catch (e) {
            setError(e.message); // Setează eroarea pentru a fi utilizată în UI
            throw e; // Propagă eroarea către componenta apelantă
        } finally {
            setLoading(false); // Oprește starea de încărcare
        }
    }, []);

    const clearError = useCallback(() => {
        setError(null); // Permite resetarea manuală a erorilor
    }, []);

    return { loading, request, error, clearError };
};