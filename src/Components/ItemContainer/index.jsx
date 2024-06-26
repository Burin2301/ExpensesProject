/* eslint-disable react/prop-types */

import Item from "../Item";

export default function ItemContainer({items}){
    
    return(
        <div>
        {
            items.map((item, key)=>(
                <Item
                item={item}
                key={key} />
            ))
        }
        </div>
    )
}