import { useState, useRef, useEffect } from "react";
import { EEA } from "./algorithms";
const update = (set) => (val) => {
    if(val.target.value===""){
        set(-1);
    } else{
        set(parseInt(val.target.value));
    }
}
const GCD = () => {
    const [a, setA] = useState(-1);
    const [b, setB] = useState(-1);
    const [result, setResult]=useState(-1);
    const aRef=useRef("a");
    const bRef=useRef("b");

    useEffect(() => {
        setResult(EEA(a,b).gcd);
    }, [a, b])
    return (
        <div>
            <h1>Greatest Common Denominator</h1>
            <form>
                <label for={aRef}>a </label>
                <input type="number" ref={aRef} onChange={update(setA)}/> <br/>
                <label for={bRef}>b </label>
                <input type="number" ref={bRef} onChange={update(setB)}/>
            </form>

            <h1>gcd({a>0 ? a : "a"}, {b>0 ? b : "b"}) = {result>0 ? result : "d"}</h1>
        </div>
    )
}

export default GCD
