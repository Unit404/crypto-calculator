import { useState } from "react"
import FPA from './ModExp';
import Inv from './Inv';
import GCD from './GCD';
const calcMaker = (s) => {
    if(s==="ModExp"){
        return <FPA/>;
    } else if (s==="Inv"){
        return <Inv/>;
    } else if (s==="GCD"){
        return <GCD/>;
    }
}
const Menu = ({calculators,add}) => {
    return (
        <div>
            {calculators.map((v,i) => {
                <h1 key={i} onClick={add(calcMaker(v))}>v</h1>
            })}
        </div>
    )
}

export default Menu
