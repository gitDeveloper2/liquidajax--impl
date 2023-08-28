import * as state from "./State.js" 
// interface to implement the methods
// we have also the replace html

export function createTableAutoFromState(parentid, tableid){
// remove element if exists
let element=document.getElementById(tableid);
if(element !=null){
    element.remove()
}



    let table=document.createElement("table");
   table.classList.add("table")
   table.setAttribute("id",tableid)
   state.getState().then((response)=>{
    for(let obj of response.users ){
        table.appendChild( row(obj))
        parent=document.getElementById(parentid);
        parent.appendChild(table)
      }
   })
   
  
   
   }
export function td (data){
    let td=document.createElement("td");
    td.innerHTML=data;
    return td;
}

export function tr (){
    let row=document.createElement("tr");
    row.appendChild(td("col1"))
    row.appendChild(td("col1"))
    row.appendChild(td("col1"))
return row;
}

export function row (obj){
    let row=document.createElement("tr");
    for (let col in obj){
    row.appendChild(td(""+obj[col]+""))
    }
return row;
}

