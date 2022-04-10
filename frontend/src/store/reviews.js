import { csrfFetch } from "./csrf";

const POST_REVIEW = 'reviews/POST_REVIEW';
const UPDATE_REVIEW = 'reviews/UPDATE_REVIEW';
const DELETE_REVIEW = 'reviews/DELETE_REVIEW';

const addAReview = (review) => {
    return {
        type: POST_REVIEW,
        payload: review
    }
}

const editReview = (review) => {
    return {
        type: UPDATE_REVIEW,
        payload: review
    }
}

const removeReview = (id) => {
    return {
        type: DELETE_REVIEW,
        payload: id
    }
}

export const createReview = (data) => async (dispatch) => {
    const response = await csrfFetch(`/api/reviews/new`, {
        method: 'POST',
        body: JSON.stringify(data)
    });

    if (response.ok) {
        const review = await response.json();
        dispatch(addAReview(review));
        return response;
    }
}

export const updateReview = (data) => async (dispatch) => {
    const response = await csrfFetch(`/api/reviews/${data.id}/edit`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });

    if (response.ok) {
        const review = await response.json();
        dispatch(editReview(review));
        return review;
    }
}

export const deleteReview = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/reviews/${id}/delete`, {
        method: 'DELETE'
    });

    if (response.ok) {
        const review = await response.json();
        dispatch(removeReview(review.id))
    }
}


const reviewsReducer = (state = {}, action) => {
    switch (action.type) {
        case POST_REVIEW: {
            const newState = { ...state }
            newState[action.payload.id] = action.payload
            return newState;
        }
        case UPDATE_REVIEW: {
            const newState = { ...state }
            newState[action.payload.id] = action.payload
            return newState;
        }
        case DELETE_REVIEW: {
            const newState = { ...state }
            delete newState[action.payload]
            return newState
        }
        default:
            return state;
    }
}

export default reviewsReducer;
