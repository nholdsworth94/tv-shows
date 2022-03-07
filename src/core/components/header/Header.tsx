import React, { useEffect, useState } from "react";
import { User } from "../../../models/user.model";
import './header.css';
import { FaTv } from 'react-icons/fa';
import { Link, Navigate, useNavigate } from "react-router-dom";

export interface IHeader {
    user: User
};

const Header = ({ user }: IHeader) => {

    const navigate = useNavigate();
    const [nav, setNav] = useState(true);

    let navPath = '/';

    useEffect(() => {
        navigate(navPath);
    }, [nav]);

    const navigateHome = () => {
        navPath = '/';
        setNav(!nav);
    }

    return (
        <div className="container">

            <div className="left">
                <div className="cont">
                    <Link to="/">
                        <FaTv className="fa" onClick={() => { }} />
                    </Link>
                </div>
            </div>

            <div className="right">
                <div className="cont">
                    <span className="name">
                        <div className="first">
                            {user?.firstName}
                        </div>
                        <div className="last">
                            {user?.lastName}
                        </div>
                    </span>
                    <img src={user?.imageUrl} />
                </div>
            </div>
        </div>
    )
}

export default Header;