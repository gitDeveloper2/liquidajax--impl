// interface to implement the methods
// we have also the replace html




export function createTableAuto(id,list){
    let table=document.createElement("table");
   table.classList.add("table")
    for(let obj of list){
      table.appendChild( row(obj))
    }
   parent=document.getElementById(id);
   parent.appendChild(table)
   
   }

export function createTable(id){
 let table=document.createElement("table");

   table.appendChild( tr())

parent=document.getElementById(id);
parent.appendChild(table)

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
