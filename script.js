const todoinput = document.getElementById('todo-input')
const addbtn = document.getElementById('add-btn')
const todoitemscontain = document.getElementById('todoitems')
const clearbutton = document.getElementById('clear-btn')
const errorMsg = document.getElementById("error-msg");
function toggleClearButton() {
  if (todoitemscontain.children.length > 0) {
    clearbutton.style.display = "block";
  } else {
    clearbutton.style.display = "none";
  }
}


function adddbtn(){
    const value = todoinput.value;
    console.log('Entered value',value);
    let errorTimer;
    if (value === "") {
    errorMsg.innerText = "Empty task";
    errorMsg.style.display = "block";
    clearTimeout(errorTimer);

    errorTimer = setTimeout(() => {
        errorMsg.style.display = "none";}, 1000);

    return;
  }
    const textspan = document.createElement('span');
    textspan.innerText= value;
    const li = document.createElement('li');
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox"
    checkBox.addEventListener("change", function(){
    textspan.classList.toggle('complete')})
    const delbutton = document.createElement('button');
    delbutton.innerText='X';
    delbutton.addEventListener('click',function(){
        li.remove();
    })
    li.appendChild(checkBox)
    li.appendChild(textspan)
    li.appendChild(delbutton)
    toggleClearButton()
    todoitemscontain.appendChild(li)
    todoinput.value=''
}
addbtn.addEventListener('click',adddbtn)
clearbutton.addEventListener('click',function(){
        todoitemscontain.remove();
    })
todoinput.addEventListener('keydown',(e)=>{
    if(e.key=="Enter"){
        adddbtn()
    }
})