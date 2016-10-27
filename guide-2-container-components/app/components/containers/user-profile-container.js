import React from "react";
import UserProfile from "../views/user-profile";
import * as userApi from "../../api/user-api";

class UserProfileContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: null,
            imageUrl: null,
            twitter: null,
            worksOn: null,
            repos: []
        }
    }

    componentDidMount() {
        let userId = this.props.params.userId;
        userApi.getProfile(userId).then(profile => {
            this.setState({
                name: profile.name,
                imageUrl: profile.imageUrl,
                twitter: profile.twitter,
                worksOn: profile.worksOn,
                repos: profile.repos
            });
        });
    }

    render() {
        return (
            <UserProfile {...this.state} />
        );
    }
}

export default UserProfileContainer;
