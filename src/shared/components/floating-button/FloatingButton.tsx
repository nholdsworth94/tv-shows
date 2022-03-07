import React from "react";
import { Link } from "react-router-dom";
import './floating-button.css';

export enum FloatingButtonType {
    LINK, CALLBACK
}

class FloatingButton extends React.Component<{
    top: number,
    icon: React.ReactNode,
    label: string,
    type: FloatingButtonType,
    click?: any,
    link?: string
}> {

    render() {

        switch (this.props.type) {
            case FloatingButtonType.LINK:

                return (
                    <Link to={this.props.link!}>
                        <span className="floating-button" style={{ top: this.props.top }} >
                            <span className="icon">
                                {this.props.icon}
                            </span>

                            <span className="label">
                                {this.props.label}
                            </span>
                        </span>
                    </Link>
                );

                break;
            case FloatingButtonType.CALLBACK:

                return (
                    <span className="floating-button" style={{ top: this.props.top }} onClick={this.props.click} >
                        <span className="icon">
                            {this.props.icon}
                        </span>

                        <span className="label">
                            {this.props.label}
                        </span>
                    </span>
                );

            default:
                return (<span></span>)
        }
    }
}

export default FloatingButton;