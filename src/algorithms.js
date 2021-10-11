export function FPAcalc(g,A,N){
    if(g<=0 || A < 0 || N <= 1){
        return {
            a: [],
            b: [],
            result: null
        }
    }
    let a = g;
    let b = 1;
    let as=[];
    let bits =[];
    while (A > 0){
        if(A%2===1){
            b=b*a%N;
        }
        a=a**2 % N;
        A=Math.floor(A/2);
    }
    return {
        a: as,
        bits: bits,
        result: b
    };
}

export function inv(a,p){
    return FPAcalc(a,p-2,p);
}

function getFactors(x){
    let factors = [];
    for(let i = 1; i<x;i++){
        if(x % i === 0){
            factors.push(i);
        }
    }
    return factors;
}

export function order(a,p){
    let factors=getFactors(p-1);
    factors.forEach(f => {
        let fpa = FPAcalc(a,f,p)
        let mod = fpa.result;
        if(mod===1){
            return {
                order: f,
                primitive: false,
                fpa: fpa
            }
        }
    })
    return {
        order: p-1,
        primitive: true,
        fpa: null
    }
}

export function tinyGiant(g,h,p){
    let N = order(g,p).order;
    let n=Math.floor(Math.sqrt(N))+1;
    let l1=[];
    let l2=[];
    let x=-1;
    for(let i = 0; i < n; i++){
        l1.push(FPAcalc(g,i,p).result);
    }
    for(let i = 0; i < n; i++){
        let k = FPAcalc(g,i*n,p);
        let q=inv(k,p);
        l2.append(h*q % p);
    }
    for(let i = 0; i < l1.length; i++){
        let idx = l2.findIndex(l1[i]);
        if(idx!==-1){
            x = i+idx*n;
        }
    }
    return x;
}