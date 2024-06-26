/* eslint-disable react/prop-types */

import './index.css'
import {XCircleIcon} from '@heroicons/react/24/solid'

export default function Item({item}){

    const { name, date, amount, type } = item

    console.log(name, date, amount, type);

    let background

    if(type === "outcome"){
        background = "#E1617B"
    } else {
        background = "#04AA6D"
    }

    return(
        <div 
        className='item-item'
        style={{
            backgroundColor: background,
            color:'white'
        }} >

            <div
                className='item-namedate-container'>
                <span 
                    className='item-name' >
                        {name}
                </span>
            
            
                <span 
                    className='item-date' >
                        {date}
                </span>
            </div>
        
        
            <span 
                className='item-amount' >
                    ${amount}
            </span>
        
            <XCircleIcon
            className='item-x-icon' />
        
        </div>
    )
}
















