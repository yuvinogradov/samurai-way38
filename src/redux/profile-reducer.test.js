import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

// 1. test data
let action = addPostActionCreator('it-kamasutra.com')
let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'It\'s my second post', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 4},
    ]
}

it('count of posts should be incremented', () => {
    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(5)
})

it('message of new post should be correct', () => {
    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts[4].message).toBe('it-kamasutra.com')
})

it('messages count should be decremented after message delete', () => {
    // 1. test data
    let action = deletePost(1);
    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(3)
})

it('messages count shouldn\'t be decremented after message with incorrect ID try to delete', () => {
    // 1. test data
    let action = deletePost(1000);
    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(4)
})