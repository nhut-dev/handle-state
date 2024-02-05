import React from "react";
import FbItem from "./FbItem";
import { data } from "../facebookData/data/Data";

const FbList = (props) => {
    return (
        <div>
            <div>
                {data.map((item, index) =>  (
                    <FbItem
                        avatar={item.avatar}
                        title={item.title}
                        doc={item.doc}>
                    </FbItem>
                ))}
            </div>
        </div>
    )
}

export default FbList;
