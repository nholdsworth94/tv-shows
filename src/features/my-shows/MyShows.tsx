import React, { useCallback, useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import headers from "../../constants/default-headers";
import { MyShow } from "../../models/my-show";
import FloatingButton, { FloatingButtonType } from "../../shared/components/floating-button/FloatingButton";
import MyShowsHeader from "./my-shows-header/MyShowsHeader";
import MyShowsList from "./my-shows-list/MyShowsList";

const MyShows = () => {

    const [shows, setShows] = useState<MyShow[]>([]);

    useEffect(() => {
        // fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/shows/`, {
        //     headers: headers
        // })
        //     .then(x => x.json())
        //     .then((x: MyShow[]) => setShows(x));
    }, [shows]);

    return (
        <div className="page full">
            <MyShowsHeader />
            <MyShowsList items={shows} />
            <FloatingButton top={125} type={FloatingButtonType.LINK} link="/shows/add" icon={<FaPlus />} label="Add Show" />
        </div>
    )
}

export default MyShows;