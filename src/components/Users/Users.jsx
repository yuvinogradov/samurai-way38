import React from 'react';
import styles from './users.module.css';

let Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'data:image/jpeg;base64,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',
                followed: false,
                fullName: 'Dmitriy',
                status: 'I am a boss',
                location: {city: 'Minsk', county: 'Belarus'}
            },
            {
                id: 2,
                photoUrl: 'data:image/jpeg;base64,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',
                followed: true,
                fullName: 'Sasha',
                status: 'I am a boss too',
                location: {city: 'Moscow', county: 'Russia'}
            },
            {
                id: 3,
                photoUrl: 'data:image/jpeg;base64,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',
                followed: false,
                fullName: 'Evgeniy',
                status: 'I am a boss tree',
                location: {city: 'Kiev', county: 'Ukraine'}
            },
        ])
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div><div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.county}</div><div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}
export default Users;