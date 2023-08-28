// state class
// we need to give it access to http data to get the data and store it and also to update the elements ...update ajax
export const hello="hey";
export  let State={
    recreatorFxns:[{}]

};

export function addFxn(fxnname, fxn){
    getState()[""+fxnname+""]=fxn;
}
export function removeFxn(fxnname){
    delete getState()[""+fxnname+""]
}
export function getState(){
// it should take a recreator fxn and the fxn should require no paramter but state slice and recreate from that
// each slice must have its own recreators

    return new Promise((resolve)=>{
        console.log(State)
        resolve(State)
    })
    
}

export function setState(state){
    return new Promise((resolve)=>{
        State=state;
    })
    
}

export function update(fxnname){
    for(let elem of State.recreatorFxns){
        for(let prop in elem){
            if(elem[prop]==fxnname){
                console.log(elem)
                elem.fxn(elem.param[0],elem.param[1])

            }
        }
    }

}

export function addStateObject(name,value,fxnname,cb,params){
    console.log(params)
    return new Promise((resolve)=>{
        State[""+name+""]=value;
        if( fxnname!=null &&!checkIfFxnExists(fxnname)){
        State.recreatorFxns=[{
            fxnName:fxnname,
            fxn:cb,
            param:params
        }]}
        resolve(State)
    })
    
}
export function removeStateObject(name){
    return new Promise((resolve,reject)=>{
        if(checkIfPropExists(name)){

            delete State[""+name+""]
            return resolve("removed")
           }else{
            //    throw Error("Key does not exist")
               return reject("Key does not exist")
           }
    })
  
}
export  function alterStateObject(name,value){

    return new Promise((resolve,reject)=>{
        console.log("prev state")
        console.log(getState())
       if(checkIfPropExists(name)){
        let previousStateValue=  getState()[""+name+""]
        if(previousStateValue instanceof Array){
            console.log("an array")
            State[""+name+""]= [...previousStateValue,value] ;
            console.log("altered state")
            console.log(getState())
            return resolve("Altered")
    
        }else{
            State[""+name+""]=  value;
            console.log("altered state")
            console.log( getState())
            return resolve("Altered")
        }
    
       
    }else{
        
        reject("Key does not exist")
    }
    })
   
}

export function checkIfPropExists(search){
    let props=Object.keys(State)
    for(let prop of props){
        if(prop==search) return true
    } return false;
}
export function checkIfFxnExists(search){
   
    
    for(let elem of State.recreatorFxns){
        
        for(let prop in elem){
            // console.log(elem[prop])
            if(elem[prop]==search) {
                console.log(prop)
                return true}
        
    }}
    return false;
    
}



