import { useDispatch } from "react-redux";

const API_URL = 'https://mocki.io/v1/849787a8-3151-44e9-9679-f7012c57d5ee';
const GET_MOVIES = 'GET_MOVIES';


export const getMoviesApi = () => {
    try {
        return async dispatch => {
            const result = await fetch(API_URL, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const json = await result.json();
            if (json) {
                dispatch({
                    type : GET_MOVIES,
                    payload : json
                });
            } else {
                console.log('Unable to fetch');
            }
        }

    } catch (error) {
        console.log(error)
    }
}