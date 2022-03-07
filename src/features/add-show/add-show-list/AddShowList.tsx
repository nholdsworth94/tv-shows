import { iteratorSymbol } from "immer/dist/internal";
import { TVMazeShow } from "../../../models/tv-maze/show";
import AddShowCard from "../add-show-card/AddShowCard";
import './add-show-list.css';

export interface PropsAddShowList {
    items: TVMazeShow[];
}

const AddShowList = (props: PropsAddShowList) => {

    return (
        <div className="list-container">
            {props.items.map((x: TVMazeShow) => <AddShowCard item={x} key={x.id} />)}
        </div>
    );
}

export default AddShowList;