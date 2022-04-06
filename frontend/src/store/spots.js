import { csrfFetch } from "./csrf";

const LOAD = 'spots/LOAD';

const loadSpots = (spots) => {
    return {
        type: LOAD,
        payload: spots
    }
}


export const getSpots = () => async (dispatch) => {
    const response = await csrfFetch(`/api/spots`);

    if (response.ok) {
        const spots = await response.json();
        dispatch(loadSpots(spots));
        return response;
    }
}



const spotsReducer = (state = {}, action) => {
    switch (action.type) {
        case LOAD:
            const getAllPost = {};
            action.payload.forEach((spots) => {
                getAllPost[spots.id] = spots;
            });
            return { ...getAllPost, ...state };
        default:
            return state;
    }
}

export default spotsReducer;
