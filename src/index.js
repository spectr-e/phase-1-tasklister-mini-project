document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    showToDo(e.target.new_task_description.value)
  })
});
function showToDo(task){
  let pTasks = document.createElement('p')
  let pDelBtn = document.createElement('button')
  pDelBtn.textContent = 'x'
  pDelBtn.style.marginLeft = '12px'
  pDelBtn.addEventListener('click', () => {
    pTasks.remove()
  })
  pTasks.textContent = task
  pTasks.appendChild(pDelBtn)
  document.querySelector('#tasks').appendChild(pTasks)
}