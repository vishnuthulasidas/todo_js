let count=0
let finish=0
function add(){
    document.getElementById("newtodo").style.display="block";
    document.getElementById("new").value=""
    document.getElementById("new").focus()

}
function newadd(){
    let txtbox=document.getElementById("new");
    let x=document.createElement("div");
    x.className="todo"
    let y=document.createElement("input");
    y.type="checkbox";
    y.id=`chk${++count}`;
    y.setAttribute('onclick',`chkclick(${count})`);
    let z=document.createElement("label");
    z.setAttribute('for',`chk${count}`);
    z.id=`lbl${count}`;
    z.innerText=txtbox.value;
    x.appendChild(y)
    x.appendChild(z)
    document.getElementById("main").appendChild(x)
    document.getElementById("total").innerText=count;
    document.getElementById("remaining").innerText=count-finish;
    document.getElementById("newtodo").style.display="";
}
function newclose(){
    document.getElementById("new").value="";
    document.getElementById("newtodo").style.display="";
}

function chkclick(x){
    document.getElementById(`chk${x}`).disabled="true"
    document.getElementById(`lbl${x}`).style.textDecoration="line-through"
    finish++;
    document.getElementById("completed").innerText=finish;
    document.getElementById("remaining").innerText=count-finish;
}
function clearall(){
    document.getElementById("main").replaceChildren()
    document.getElementById("total").innerText=0;
    document.getElementById("completed").innerText=0;
    document.getElementById("remaining").innerText=0;
}