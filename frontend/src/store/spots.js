import { csrfFetch } from "./csrf";

const LOAD = 'spots/LOAD';
const ADD_POST = 'spots/ADD_POST';
const UPDATE_POST = 'spots/UPDATE_POST';
const DELETE_POST = 'spots/DELETE_POST';

const loadSpots = (spots) => {
    return {
        type: LOAD,
        payload: spots
    }
}

const addASpot = (spot) => {
    return {
        type: ADD_POST,
        payload: spot
    }
}

const update = (spot) => {
    return {
        type: UPDATE_POST,
        payload: spot
    }
}

const remove = (id) => {
    return {
        type: DELETE_POST,
        payload: id
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

export const createSpot = (data) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/new`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });

    if (response.ok) {
        const spot = await response.json();
        dispatch(addASpot(spot));
        return spot;
    }
};

export const updateSpot = (data) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${data.id}/edit`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });

    if (response.ok) {
        const spot = await response.json();
        dispatch(update(spot));
        return spot;
    }
}

export const deleteSpot = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${id}/delete`, {
        method: 'DELETE'
    });

    if (response.ok) {
        const spot = await response.json();
        dispatch(remove(spot.id))
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
        case ADD_POST:
            return { ...state, [action.payload.id]: action.payload };
        case UPDATE_POST:
            return { ...state, [action.payload.id]: action.payload };
        case DELETE_POST:
            const newState = { ...state }
            delete newState[action.payload.id]
            return newState;
        default:
            return state;
    }
}

export default spotsReducer;
