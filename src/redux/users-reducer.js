const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        {id: 1, followed: false, fullName: 'Dmitriy', status: 'I am a boss', location: {city: 'Minsk', county: 'Belarus'}},
        {id: 2, followed: true, fullName: 'Sasha', status: 'I am a boss too', location: {city: 'Moscow', county: 'Russia'}},
        {id: 3, followed: false, fullName: 'Evgeniy', status: 'I am a boss tree', location: {city: 'Kiev', county: 'Ukraine'}},
    ],
    newPostText: 'it-kamasutra.com'
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS: {
            return {...state, users: [...sttate.users, ...actions.users]}
        }


        default:
            return state;
    }
}


export const followAC = () => ({type: FOLLOW, userId})
export const unfollowAC = () => ({type: UNFOLLOW, userId})
export const setUsersAC = () => ({type: SET_USERS, users})

export default usersReducer;