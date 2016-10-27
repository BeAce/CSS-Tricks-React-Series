import React from "react";
import _ from "lodash";
import UserList from "../views/user-list";
import * as userApi from "../../api/user-api";

class UserListContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
        this.deleteUser = this.deleteUser.bind(this);
    }

    componentDidMount() {
        userApi.getUsers().then(users => {
            this.setState({users: users})
        })
    }

    deleteUser(userId) {
        userApi.deleteUser(userId).then(() => {
            const newUsers = _.filter(this.state.users, user => user.id != userId);
            this.setState({users: newUsers})
        });
    }

    render() {
        return (
            <UserList users={this.state.users} deleteUser={this.deleteUser}/>
        );
    }

}
export default UserListContainer;
