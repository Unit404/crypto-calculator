import { useState, useEffect, useRef } from "react"
import { MillerRabinTest } from "../algorithms";

const MillerRabin = () => {
    const [base,setBase] = useState(57);
    const [mod, setMod] = useState(13531);
    const [calcs, setCalcs] = useState({calculations: [], result: null});
    const baseRef = useRef("base");
    const modRef = useRef("mod");
    const update = (set) => (val) => {
        if(val.target.value===""){
            set(null);
        } else{
            set(parseInt(val.target.value));
        }
    }
    useEffect(()=>{
        if(base !== null && mod !== null)
            setCalcs(MillerRabinTest(mod, base));
        else
            setCalcs({calculations: null, result: null});
    }, [base, mod])
    return (
        <div>
            <h1> MillerRabin </h1>
            <form>
                <label>Base </label>
                <input type="number"  onChange={update(setBase)}/> <br/>
                <label>N </label>
                <input type="number" onChange={update(setMod)}/>
            </form>
            {calcs.calculations.map((e, i)=><p key={i}>step {i}: {e}</p>)}
            {(<p>result = {calcs.result ? "Composite" : "test failed"}</p>)}
        </div>
    )
}

export default MillerRabin
