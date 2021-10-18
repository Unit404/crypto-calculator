import { useRef, useState, useEffect } from "react"
import { EEA } from "../algorithms";
const update = (set) => (val) => {
    if(val.target.value===""){
        set(-1);
    } else{
        set(parseInt(val.target.value));
    }
}
const Inv = () => {
    const [a, setA]=useState(-1);
    const [mod, setMod]=useState(-1);
    const [result, setResult]=useState(-1);
    const aRef=useRef("a");
    const modRef=useRef("mod")
    useEffect(() => {
        setResult(EEA(a,mod).inv);
    }, [a, mod])
    return (
        <div>
            <h1>Modular Multiplicative Inverse</h1>
            <form>
                <label for={aRef}>a </label>
                <input type="number" ref={aRef} onChange={update(setA)}/> <br/>
                <label for={modRef}>N </label>
                <input type="number" ref={modRef} onChange={update(setMod)}/>
            </form>

            <h1>{a>=0 ? a : "a"}<sup>-1</sup> mod {mod>0 ? mod : "N"} = {result>0 ? result : "b"}</h1>
        </div>
    )
}

export default Inv
