document.getElementById('formTask').addEventListener('submit', saveTask);

function saveTask(e) {
  let title = document.getElementById('title').value;
  let description = document.getElementById('description').value;
  let cantite = document.getElementById('cantite').value;
  let product = document.getElementById('product').value;
  let price = document.getElementById('price').value;
  let importe = document.getElementById('importe').value;
  let total = document.getElementById('total').value;
  
  console.log( title, description, cantite, product, price, importe, total );

  let task = {
    title,
    description,
    cantite,
    product,
    price,
    importe,
    total
  };

  if(localStorage.getItem('tasks') === null) {
    let tasks = [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  } else {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  getTasks();
  document.getElementById('formTask').reset();
  e.preventDefault();
}

function deleteTask(title) {
  console.log(title)
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  for(let i = 0; i < tasks.length; i++) {
    if(tasks[i].title == title) {
      tasks.splice(i, 1);
    }
  }
  
  localStorage.setItem('tasks', JSON.stringify(tasks));
  getTasks();
}

function getTasks() {
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  let tasksView = document.getElementById('tasks');
  tasksView.innerHTML = '';
  for(let i = 0; i < tasks.length; i++) {
    let title = tasks[i].title;
    let description = tasks[i].description;
    let cantite = tasks[i].cantite;
    let product = tasks[i].product;
    let price = tasks[i].price;
    let importe = tasks[i].importe;
    let total = tasks[i].total;

    tasksView.innerHTML += `<div class="card mb-3">
        <div class="card-body">
          <p>${title} - ${description} - ${cantite} - ${product} - ${price}- ${importe} - ${total}
          <a href="#" onclick="deleteTask('${title}')" class="btn btn-danger ml-5">Eliminar</a>
          </p>
        </div>
      </div>`;
  }
}

getTasks();
