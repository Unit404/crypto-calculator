import { useState, useRef, useEffect } from "react";
import { FPAcalc } from "../algorithms.js";

const FPA = () => {
    const [base, setBase] = useState(null);
    const [exp, setExp] = useState(null);
    const [mod, setMod] = useState(null);
    const [result, setResult] = useState(null);
    const baseRef = useRef("base");
    const expRef = useRef("exp");
    const modRef = useRef("mod");
    const update = (set) => (val) => {
        if(val.target.value===""){
            set(null);
        } else{
            set(parseInt(val.target.value));
        }
    }
    useEffect(()=>{
        if(base !== null && exp !== null && mod !== null)
            setResult(FPAcalc(base,exp,mod).result);
        else
            setResult(null);
    }, [base, exp, mod])
    return (
        <div>
            <h1> modular exponentiation </h1>
            <form>
                <label for={baseRef}>Base </label>
                <input type="number" ref={baseRef} onChange={update(setBase)}/> <br/>
                <label for={expRef}>Exp </label>
                <input type="number" onChange={update(setExp)}/><br/>
                <label for={modRef}>N </label>
                <input type="number" onChange={update(setMod)}/>
            </form>
            <h1>{(base ? base : "base")}<sup>{(exp ? exp : "exp")}
            </sup> mod {(mod ? mod : "N")+" = "+(result ? result : "a")}</h1>
        </div>
    )
}

export default FPA
