document.getElementById('formTask').addEventListener('submit', saveTask);

function saveTask(e) {
  let date = document.getElementById('date').value;
  let client = document.getElementById('client').value;
  let description = document.getElementById('description').value;
  let cantite = document.getElementById('cantite').value;
  let product = document.getElementById('product').value;
  let price = document.getElementById('price').value;
  let importe = document.getElementById('importe').value;
  let subtotal = document.getElementById('subtotal').value;
  let total = document.getElementById('total').value;
  
  console.log( date, client, description, cantite, product, price, importe, subtotal, total );

  let task = {
    date,
    client,
    description,
    cantite,
    product,
    price,
    importe,
    subtotal,
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

function deleteTask(date) {
  console.log(date)
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  for(let i = 0; i < tasks.length; i++) {
    if(tasks[i].date == date) {
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
    let date = tasks[i].date;
    let client = tasks[i].client;
    let description = tasks[i].description;
    let cantite = tasks[i].cantite;
    let product = tasks[i].product;
    let price = tasks[i].price;
    let importe = tasks[i].importe;
    let subtotal = tasks[i].subtotal;
    let total = tasks[i].total;

    tasksView.innerHTML += `<div class="card mb-3">
        <div class="card-body">
          <p>${date} - ${client} - ${description} - ${cantite} - ${product} - ${price}- ${importe} - ${subtotal} - ${total}
          <a href="#" onclick="deleteTask('${date}')" class="btn btn-danger ml-5">Eliminar</a>
          </p>
        </div>
      </div>`;
  }
}

getTasks();
