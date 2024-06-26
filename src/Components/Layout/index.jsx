
import ItemContainer from '../ItemContainer'
import './index.css'

const dummy = [
    {name:"golance",date:"01/01/2024", amount:"180", type:"income"},
    {name:"domain",date:"01/01/2024", amount:"-5", type:"outcome"},
    {name:"food",date:"01/01/2024", amount:"-50", type:"outcome"},
    {name:"maketando",date:"01/01/2024", amount:"60", type:"income"},
    {name:"maketando",date:"01/01/2024", amount:"60", type:"income"},
    {name:"maketando",date:"01/01/2024", amount:"60", type:"income"},
    {name:"maketando",date:"01/01/2024", amount:"-60", type:"outcome"}
]

export default function Layout(){

    return(
        <div
            className="layout" >

            <div
                className="item-container" >

                 <ItemContainer
                 items={dummy} />   

            </div>

             
            <div
                className="counter-container" >
                


            </div>
        </div>
    )

}