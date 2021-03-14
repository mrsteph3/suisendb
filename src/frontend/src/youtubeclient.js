import fetch from 'unfetch';

const checkStatus = response => {
    if (response.ok) {
        return response;
    } else {
        let error = new Error(response.statusText);
        error.response = response;
        response.json().then(e => {
            error.error = e;
        });
        return Promise.reject(error);
    }
}

export const getOpeningId = (animeName) => fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${animeName}%20opening%20theme&key=AIzaSyBWZP2y_fCdUmr0JKxz79m_aIZ8pfSUkd4`).then(checkStatus);
export const getEndingId = (animeName) => fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${animeName}%20ending%20theme&key=AIzaSyBWZP2y_fCdUmr0JKxz79m_aIZ8pfSUkd4`).then(checkStatus);