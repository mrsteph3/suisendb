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

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

export const getOpeningId = (animeName) => fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${animeName}%20opening%20theme&key=${API_KEY}`).then(checkStatus);
export const getEndingId = (animeName) => fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${animeName}%20ending%20theme&key=${API_KEY}`).then(checkStatus);