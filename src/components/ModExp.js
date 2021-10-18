import { useState, useRef, useEffect } from "react";
import { FPAcalc, EEA } from "../algorithms.js";

const ModExp = () => {
    const [base, setBase] = useState("none");
    const [exp, setExp] = useState("none");
    const [mod, setMod] = useState("none");
    const [result, setResult] = useState("none");
    const baseRef = useRef("base");
    const expRef = useRef("exp");
    const modRef = useRef("mod");
    const update = (set) => (val) => {
        if(val.target.value===""){
            set("none");
        } else{
            set(parseInt(val.target.value));
        }
    }
    useEffect(()=>{
        if(base !== "none" && exp !== "none" && mod !== "none")
            
            if(exp<0){
                let inv = EEA(base, mod).inv;
                setResult(FPAcalc(inv, exp*-1, mod).result);
            } else{

                setResult(FPAcalc(base,exp,mod).result);
            }
        else
            setResult("none");
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
            <h1>{(base!=="none" ? base : "base")}<sup>{(exp!=="none" ? exp : "exp")}
            </sup> mod {(mod>=0 && mod!=="none" ? mod : "N")+" = "+(result!=="none" ? result : "a")}</h1>
        </div>
    )
}

export default ModExp
