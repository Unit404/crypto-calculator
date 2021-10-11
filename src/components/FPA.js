import { useState, useRef } from "react";
import { FPAcalc } from "../algorithms";
const update = (set) => (val) => {
        set(val.target.value);
}

const FPAinput = () => {
    const [base, setBase] = useState(null);
    const [exp, setExp] = useState(null);
    const [mod, setMod] = useState(null);
    const [result, setResult] = useState(null);
    return (
        <div>
            <h1> Fast Powering Algorithm </h1>
            <form onSubmit={()=> setResult(FPAcalc(base,exp,mod).result)}>
                <input type="number" value={base} onChange={update(setBase)}/>
                <input type="number" value={exp} onChange={update(setExp)}/>
                <input type="number submit" value={mod} onChange={update(setMod)} onSubmit={()=> setResult(FPAcalc(base,exp,mod).result)}/>
            </form>
            <h1>{result}</h1>
        </div>
    )
}
const FPA = () => {
    const [inputs, setInputs]=useState(new Array(1).fill(0))
    return (
        <FPAinput/>
    )
}

export default FPA
