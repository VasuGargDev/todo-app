let inputField = document.getElementById('inputField');
let addToDoButton = document.getElementById("addToDo");
let todoContainer = document.getElementById("todoContainer");


addToDoButton.addEventListener('click', function(){

    const todoItem = document.createElement('div');
    todoItem.classList.add('todo-Item')

    todoContainer.appendChild(todoItem);

    //create paragraph(p) element and add id = paragraph-styling
    const paragraph = document.createElement('p')
    paragraph.id = 'paragraph-styling';
    paragraph.innerText=inputField.value;
    todoItem.appendChild(paragraph);

    //click task to mark done
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })

    
    //edit button and add id= edit-button
    const editButton = document.createElement('button');
    editButton.id='edit-button';

    const editImage = document.createElement('img');
    editImage.src = 'edit.svg';
    editButton.appendChild(editImage);
    todoItem.appendChild(editButton);
    //click event callback method for edit button..........................pending



    //delete button and add id= delete-button
    const deleteButton = document.createElement('button');
    deleteButton.id='delete-button';

    const deleteImage = document.createElement('img');
    deleteImage.src = 'delete.svg';
    deleteButton.appendChild(deleteImage);
    todoItem.appendChild(deleteButton);
    //click event call back method for delete button
    deleteButton.addEventListener('click', function(){
        const parent = deleteButton.parentElement;
        parent.parentElement.removeChild(parent);
    })




    inputField.value=""

    // paragraph.addEventListener('click', function(){
    //     paragraph.style.textDecoration = "line-through";
    // })
    
    // paragraph.addEventListener('dblclick', function(){
    //     todoContainer.removeChild(paragraph);
    // })

})