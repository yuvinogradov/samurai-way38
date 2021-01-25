const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    //isFetching: true,
}

const authReducer = (state = initialState, action) => {
    debugger
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }

        default:
            return state;
    }
}


export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}})



export default authReducer;