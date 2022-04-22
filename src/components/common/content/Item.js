import {NavLink} from "react-router-dom";

function Item(props) {
    return (
        <NavLink to={"/item/" + props.id}><p>Item {props.id}</p></NavLink>
    )
}

export default Item;