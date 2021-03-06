import { csrfFetch } from "./csrf";

const SET_USER = 'session/setUser';
const REMOVE_USER = 'session/removeUser';


export const setUser = (user) => {
    return {
        type: SET_USER,
        payload: user
    }
}


export const removeUser = () => {
    return {
        type: REMOVE_USER
    }
}


export const login = (user) => async (dispatch) => {
    const { credential, password } = user;
    const res = await csrfFetch('/api/session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ credential, password })
    });

    if (res.ok) {
        const data = await res.json();
        dispatch(setUser(data.user));
        return res;
    }
}



export const restoreUser = () => async (dispatch) => {
    const res = await csrfFetch('/api/session');

    if (res.ok) {
        const data = await res.json();
        dispatch(setUser(data.user));
        return res;
    }
}

export const signup = (user) => async (dispatch) => {
    const { username, email, password } = user;
    const res = await csrfFetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({
            username,
            email,
            password
        })
    });

    if (res.ok) {
        const data = await res.json();
        dispatch(setUser(data.user));
        return res;
    }
};

export const logout = () => async (dispatch) => {
    const res = await csrfFetch('/api/session', {
        method: 'DELETE'
    });

    dispatch(removeUser());
    return res;
};


const intialState = { user: null };

const sessionReducer = (state = intialState, action) => {
    let newState;
    switch (action.type) {
        case SET_USER:
            newState = { ...state };
            newState.user = action.payload;
            return newState;
        case REMOVE_USER:
            newState = { ...state };
            newState.user = null;
            return newState;
        default:
            return state;
    }
};

export default sessionReducer;
