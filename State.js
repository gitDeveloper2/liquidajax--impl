// state class
// we need to give it access to http data to get the data and store it and also to update the elements ...update ajax
export const hello="hey";
export  let State={

};

export function getState(){
    return State;
}

export function setState(state){
    State=state;
}

export function addStateObject(name,value){
    State[""+name+""]=value;
}
export function removeStateObject(name,value){
    if(checkIfPropExists(name)){


    }else{
        throw Error("Key does not exist")
    }
}
export async function alterStateObject(name,value){
    console.log("prev state")
    console.log(getState())
   if(checkIfPropExists(name)){
    let previousStateValue= await getState()[""+name+""]
    if(previousStateValue instanceof Array){
        State[""+name+""]= [...previousStateValue,value] ;
        console.log("altered state")
        console.log(getState())

    }else{
        State[""+name+""]= await value;
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


