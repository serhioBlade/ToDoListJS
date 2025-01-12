function createDiv (className) {  
    let container = document.createElement('div')
    container.classList.add(className)
    return container
}

function createInput(type,className,placeholder){
    let inputTask =  document.createElement('input') 
    inputTask.type = type
    inputTask.classList.add(className)
    inputTask.placeholder = placeholder
    return inputTask
}

function createBtn(className = "", text){
    let button =  document.createElement('button')
    button.classList.add(className) 
    button.textContent = text
    return button
}


function createitem(){
    let listItem = document.createElement('li')
    listItem.classList.add('listitem')
    return listItem
}


let mainDiv = createDiv("container")
let taskDiv = createDiv("taskContainer")
let createTask = createBtn('btn',"Создать задачу")
let info = createInput("text","task","Задача")
let list = document.createElement('ul')
list.classList.add('list')

function printItem(text){
    let li = createitem()
    let optins = createDiv('optionCont')
    let itemTitle = document.createElement('h2')
    itemTitle.textContent = `${text}`
    let endTask = createBtn('btn', 'Выполонить')
    endTask.classList.add('end')
    let editTask = createBtn('btn', 'Изменить')
    let removeTask = createBtn('btn', 'Удалить')

    endTask.onclick = function(){
        li.classList.add('endTask')
        endTask.remove()
        editTask.remove()
        removeTask.classList.add('endTaskBtn')
    }

    editTask.onclick = function(){
        itemTitle.textContent = `${prompt("Какя задача теперь ?")}`
    }

    removeTask.onclick = function(){
        li.remove()
    }

    li.append(itemTitle)
    li.append(optins)
    optins.append(endTask)
    optins.append(editTask)
    optins.append(removeTask)
    return li
}

createTask.onclick = function (){
    if (info.value === "") {
        alert('Ты ничего не ввёл')
    }
    else{
        let listItem = printItem(`${info.value}`)
    info.value =""
    list.append(listItem)
    }
    
}

document.body.append(mainDiv)
mainDiv.append(taskDiv)
taskDiv.append(info)
taskDiv.append(createTask)
mainDiv.append(list)

