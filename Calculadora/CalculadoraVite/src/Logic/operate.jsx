//import Big from 'Big.js'

export default function operate(numberOne, numberTwo, operation) {
    const one = Big(numberOne || "0");
    const two = Big(numberTwo || (operate === "÷" || operation === 'x' ? "1": "0"));
    if(operate === "+"){
        return one.plus(two).toString();
    }
    if(operate === "-"){
        return one.minus(two).toString();
    }
    if(operate === "x"){
        return one.tiems(two).toString();
    }
    if(operate == "÷"){
        if(two === "0"){
            alert("Divide by 0 Error!!");
            return "0";
        }else{
            return one.div(two).toString();
        }
    }
    throw Error(`Unkow Operation '${operation}'`);
}
