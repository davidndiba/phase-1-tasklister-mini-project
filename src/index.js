const form =document.querySelector('form');
const input = document.getElementById('new-task-description');
const submit = form[1];
const tasks = document.getElementById('tasks')

document.addEventListener("DOMContentLoaded", () => {
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    handleSubmission();
    form.reset()
  })

})


function handleSubmission(){  

  let li = document.createElement('li');
  let btn = document.createElement('button');

  
  btn.addEventListener('click',handleDelete)

  
  li.textContent = input.value;
  btn.textContent = ' x';
  btn.style.padding= '10px';
  btn.style.margin= '20px';
  btn.style.fontSize= '20px';

  tasks.appendChild(li);
  li.appendChild(btn);
 }

 function handleDelete(e){
  return e.target.parentNode.remove()
}