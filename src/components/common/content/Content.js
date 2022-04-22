import s from "./Content.module.css";
import {Route, Routes} from "react-router-dom";
import Orders from "../../orders/Orders";
import PersonalAccount from "../../personal_account/PersonalAccount";
import Item from "./Item";

const text = [
    "Заказ на сборку ПК",
    "Заказ на ремонт ванной",
    "Заказ на разработку презентации"
]

const mass = ["1", "2", "3"]

function Content(props) {
    return (
        <div className={s.content}>
            <p>{props.greeting}</p>
            {
                mass.map((el) => {return <Item id={el}/>})
            }
            <Routes>
                <Route path="/orders" element={<Orders/>}/>
                <Route path="/personalAccount" element={<PersonalAccount/>}/>
            </Routes>
            <Routes>
                <Route path={"/item/1"} element={<Orders text={text[0]}/>}/>
                <Route path={"/item/2"} element={<Orders text={text[1]}/>}/>
                <Route path={"/item/3"} element={<Orders text={text[2]}/>}/>
            </Routes>
        </div>
    )
}

export default Content;