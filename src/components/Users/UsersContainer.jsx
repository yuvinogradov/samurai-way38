import React from 'react';
import {connect} from "react-redux";
import {follow, getUsers, setCurrentPage, toggleFollowingProgress, unfollow} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class UsersContainerComponent extends React.Component {


    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)

        // this.props.toggleIsFetching(true)
        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
        //     .then(data => {
        //         this.props.toggleIsFetching(false)
        //         this.props.setUsers(data.items)
        //         this.props.setTotalUsersCount(data.totalCount)
        //     });
    }

    onPageChanged = (pageNumber) => {
        //Димыч: мы договорились, что будем писать методы как стрелочные функции,
        // чтобы сохранить контекст вызова
        this.props.getUsers(pageNumber, this.props.pageSize)

        // this.props.setCurrentPage(pageNumber)
        // this.props.toggleIsFetching(true)
        //
        // usersAPI.getUsers(pageNumber, this.props.pageSize)
        //     .then(data => {
        //         this.props.toggleIsFetching(false)
        //         this.props.setUsers(data.items)
        //     });

    }


    render() {   //определяем метод рендер

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}


            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

let withRedirect = withAuthRedirect(UsersContainerComponent)
// let mapDispatchToProps = (dispatch) => { // не используем mapDispatchToProps в connect, вместо этого создаем,
//                                          // более коротким кодом, обхект прямо в коннекте.
//     return {
//         follow: (userId) => {
//             dispatch(follow(userId));
//         },
//         unfollow: (userId) => {
//             dispatch(unfollow(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsers(users))
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPage(pageNumber))
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setUsersTotalCount(totalCount))
//
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetching(isFetching))
//         },
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(UsersContainerComponent);

/// Вариант до перехода на compose:
// export default connect(mapStateToProps, {
//     follow, unfollow,
//     setCurrentPage,
//     toggleFollowingProgress, getUsers
// })(withRedirect);

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers})
)(UsersContainerComponent)
