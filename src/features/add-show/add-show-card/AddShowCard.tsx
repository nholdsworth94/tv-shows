import { ReactNode } from "react";
import headers from "../../../constants/default-headers";
import { TVMazeShow } from "../../../models/tv-maze/show";
import './add-show-card.css';

export interface PropsAddShowCard {
    item: TVMazeShow;
}

const AddShowCard = (props: PropsAddShowCard) => {

    const show = props.item;

    const image = (): ReactNode => {
        if (show.image) {
            return <img src={props.item.image?.medium} /*alt={imgNotFound}*/ />
        } else {
            return <div className="no-image">
                <span>
                    <span>No Image Found</span>
                </span>
            </div>
        }
    }

    const running: boolean = false;

    const addShow = () => {

        if (!running) {

            fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/shows/`, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify({
                    showId: show.id
                })
            })
                .then((x) => {
                    console.log(x);
                });
        }
    }

    return (
        <div className="card-container" onClick={addShow}>
            <div className="image-cont">
                {image()}
            </div>
            <div className="details-cont">
                <div className="name">{props.item.name}</div>

                {/* <span className="left">
                    <FaPlus className="fa" />
                </span>

                <span className="right"></span> */}
            </div>

            {show.rating ? <div className="rating"></div> : null}
        </div>
    );
}

export default AddShowCard;