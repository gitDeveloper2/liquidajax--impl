// state class
// we need to give it access to http data to get the data and store it and also to update the elements ...update ajax
export const hello="hey";
export  let State={
    fxns:[]

};

export function addFxn(fxnname, fxn){
    getState()[""+fxnname+""]=fxn;
}
export function removeFxn(fxnname){
    delete getState()[""+fxnname+""]
}
export function getState(){
    return State;
}

export function setState(state){
    State=state;
}

export function addStateObject(name,value){
    State[""+name+""]=value;
}
export function removeStateObject(name){
    if(checkIfPropExists(name)){

     delete State[""+name+""]
    }else{
        throw Error("Key does not exist")
    }
}
export  function alterStateObject(name,value){
    console.log("prev state")
    console.log(getState())
   if(checkIfPropExists(name)){
    let previousStateValue=  getState()[""+name+""]
    if(previousStateValue instanceof Array){
        console.log("an array")
        State[""+name+""]= [...previousStateValue,value] ;
        console.log("altered state")
        console.log(getState())

    }else{
        State[""+name+""]=  value;
        console.log("altered state")
        console.log( getState())
    }

   
}else{
    throw Error("Key does not exist")
}
}

export function checkIfPropExists(search){
    let props=Object.keys(State)
    for(let prop of props){
        if(prop==search) return true
    } return false;
}


