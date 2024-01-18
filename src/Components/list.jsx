import React from "react";
import styles from "../style.module.css"
const List = (props) => {
    return (
        <div className={styles.person}>
            <img src={props.data.image} className={styles.personimg} />
            <h4>{props.data.name}</h4>
            <p>{props.data.age} years</p>

        </div>
    )
}
export default List