import React from "react";
import { User } from "../../../models/user.model";
import Header from "../header/Header";

class Application extends React.Component<{ user: User }> {

    render() {
        return (
            <Header user={this.props.user} />
        )
    }
}

export default Application;