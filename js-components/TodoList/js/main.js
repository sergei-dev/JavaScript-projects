'use strict';

document.addEventListener('DOMContentLoaded', function () {

    const todoWrap = document.querySelector('.todo__list-wrap');
    const todoForm = document.querySelector('.todo__create-wrap');
    const todoInput = document.querySelector('.js-todo-input');
    const todoAdd = document.querySelector('.js-add-task');
    let saveValue;
    let todoItem;
    let todos = [];
    let todoItems = [];
    // variables

    todoForm.addEventListener('submit', (event) => {
        event.preventDefault();
    })

    const inputFocus = () => {
        todoInput.focus();
    }

    const inputError  = () => {
        let elError = document.createElement('span');
        elError.classList.add('todo__error');
        elError.innerHTML = 'Введите текст задачи';
        return elError;
    }

    const hideError = () => {
        let textError = document.querySelector('.todo__error');
        if ( textError ) {
            textError.remove();
        }   
    }

    const inputClear = () => {
        todoInput.value = '';
    }

    const todoDelete = (el, wrap) => {
        let elWrapChild = el.parentElement;
        let elWrap = elWrapChild.parentElement;
        let btnWrapId = elWrap.id;
        elWrap.remove();

        todos = todos.filter((item, index, array) => {
            return index != btnWrapId;
        });
        let todo = document.querySelectorAll('.todo__item');
        // console.log(todos);
    }

    const todoDone = (el, wrap) => {
        let elWrap = el.closest('.todo__item');
        elWrap.classList.add('todo__item--done');
    }


    const todoCreate = (todoArray, allItems = false) => {
        todoArray.forEach((el, index) => {
            // create todo item
            console.log(el.value);
            todoItem = document.createElement('div');
            todoItem.setAttribute('key', el.index);
            todoItem.classList.add('todo__item');

            const todoText = document.createElement('div');
            todoText.classList.add('todo__text');
            todoText.innerHTML = el.value;

            const todoDate = document.createElement('div');
            todoDate.classList.add('todo__date');
            todoDate.innerHTML = el.date;

            const todoBtnWrap = document.createElement('div');
            todoBtnWrap.classList.add('todo__btn-wrap');

            const delBtn = document.createElement('button');
            delBtn.classList.add('todo__del', 'js-todo-del');

            const doneBtn = document.createElement('button');
            doneBtn.classList.add('fa', 'todo__done', 'js-todo-done');

            todoItem.appendChild(todoText);
            todoItem.appendChild(todoDate);
            todoItem.appendChild(todoBtnWrap);
            todoBtnWrap.appendChild(delBtn);
            todoBtnWrap.appendChild(doneBtn);

            delBtn.addEventListener('click', (event) => {
                todoDelete(event.currentTarget, todoItem);
            });

            doneBtn.addEventListener('click', (event) => {
                todoDone(event.currentTarget, todoItem);
            });

            if (allItems == true) {
                todoWrap.appendChild(todoItem);                
            }

        });

        if ( allItems == false ) {
            todoWrap.appendChild(todoItem);
        }

        
    }

    const saveStorage = () => {
        const todoJson = JSON.stringify(todoItems);
        localStorage.setItem('todos', todoJson);
    }

    const getStorageTodos = () => {
        saveValue = localStorage.getItem('todos');
        let saveTodos = JSON.parse(saveValue);
        // console.log(saveTodos);
        todoCreate(saveTodos, true);
    }


    function Todo(index, value, date) {
        this.index = index;
        this.value = value;
        this.date = date;
    }

    let todoObj;

    const todoInit = (todoArray) => {
        let date = new Date().toLocaleString();
        todos.forEach((item, index) => {
            todoObj = new Todo(index, item, date);
        });

        todoArray.push(todoObj);

        console.log(todoArray);

        todoCreate(todoItems);
    }
    // functions 



    if (todoInput) {
        inputFocus();
        todoInput.addEventListener('input', (event) => {
            if ( event.currentTarget.value != '' ) {
                hideError();
            } 

            else {
                document.querySelector('.todo__label').append(inputError());
            }
        })
    }

    if (todoAdd) {

        todoAdd.addEventListener('click', () => {

            let inputVal = todoInput.value;

            if (inputVal != '') {
                hideError();
               
                todos.push(inputVal);

                
                todoInit(todoItems);
                inputClear();
                inputFocus();
                saveStorage();
                
            }

            else {
                document.querySelector('.todo__label').append(inputError());
            }


        })



    }

   getStorageTodos();

    
});