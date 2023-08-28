import * as state from "./State.js" 
import * as t from "./TableGen.js" 
let users=[{name:"alex",age:21,town:"kuwait"},{name:"dunya",age:23,town:"dunya"}]

state.addStateObject("users", users,"users", t.createTableAutoFromState,["body","table"]).then((response)=>{
})

state.getState().then((response)=>{
    t.createTableAutoFromState("body","table")

})

setTimeout(() => {
    callasyncFunction("kim")
    
}, 1000);



setTimeout(() => {
    state.addStateObject("users", [{name:"jacskon",age:21,town:"kuwait"}])
.then((response)=>{
})
    state.update("users")
}, 3000);




async function callasyncFunction(user){
    await state.removeStateObject('users')
   
await state.addStateObject("users",[{name:user,age:21,town:"kuwait"}])

// recrete table
state.update("users")

}