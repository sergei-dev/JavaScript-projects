'use strict';

document.addEventListener('DOMContentLoaded', function () {

    const todoWrap = document.querySelector('.todo__list-wrap');
    const todoForm = document.querySelector('.todo__create-wrap');
    const todoInput = document.querySelector('.js-todo-input');
    const todoAdd = document.querySelector('.js-add-task');
    let todosEl;
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

    const inputError = () => {
        let elError = document.createElement('span');
        elError.classList.add('todo__error');
        elError.innerHTML = 'Введите текст задачи';
        return elError;
    }

    const hideError = () => {
        let textError = document.querySelector('.todo__error');
        if (textError) {
            textError.remove();
        }
    }

    const inputClear = () => {
        todoInput.value = '';
    }

    const createId = () => {
        todoItems = todoItems || [];
        todoItems.forEach((item, index) => {
            console.log(index);
            todosEl[index].setAttribute('id', index);
        })


    }

    const deleteId = () => {
        for(let el of todosEl) {
            el.removeAttribute('id');
        }
    }

    const clearTodos = () => {
        for(let el of todosEl) {
            el.remove();
        }
    }

    const todoDelete = (el, wrap) => {
        let elWrapChild = el.parentElement;
        let elWrap = elWrapChild.parentElement;
        let todoText = elWrap.querySelector('.todo__text').innerHTML;
        // console.log(todoText);
        let btnWrapId = elWrap.id;

        todoItems = todoItems.filter((item, index, array) => {
            return index != btnWrapId;
        });

        clearTodos();
        clearStorage();
        deleteId();
        saveStorage();
        getStorageTodos();
        createId();
        console.log(todoItems);
    }

    const todoDone = (el, wrap) => {
        let elWrap = el.closest('.todo__item');
        elWrap.classList.toggle('todo__item--done');
        let btnWrapId = elWrap.id;
        console.log(todoItems[btnWrapId]);
        if( todoItems[btnWrapId].done === false ) {
            todoItems[btnWrapId].done = true;
        }

       else if( todoItems[btnWrapId].done === true ) {
            todoItems[btnWrapId].done = false;
        }
        console.log(todoItems);
        saveStorage();    
        
    }

    const todoCreate = (todoArray, allItems = false) => {
        if (todoArray != undefined) {
            todoArray.forEach((el, index) => {
                // create todo item
                // console.log(el.value);
                todoItem = document.createElement('div');
                todoItem.classList.add('todo__item');
                if ( el.done === false ) {
                    todoItem.classList.remove('todo__item--done');
                }   

                else if ( el.done === true ) {
                    todoItem.classList.add('todo__item--done');
                }

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

                todoItem.appendChild(todoDate);
                todoItem.appendChild(todoBtnWrap);
                todoBtnWrap.appendChild(delBtn);
                todoBtnWrap.appendChild(doneBtn);
                todoItem.appendChild(todoText);

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
        }

        if (allItems == false) {
            if (todoItem) {
                todoWrap.appendChild(todoItem);

            }

        }

        todosEl = document.querySelectorAll('.todo__item');

    }



    const saveStorage = () => {
        const todoJson = JSON.stringify(todoItems);
        localStorage.setItem('todos', todoJson);
    }

    const clearStorage = () => {
        localStorage.clear();
    }

    const getStorageTodos = () => {
        saveValue = localStorage.getItem('todos');
        let saveTodos = JSON.parse(saveValue);
        console.log(saveTodos);
        todoItems = saveTodos;
        console.log(todoItems);
        todoCreate(todoItems, true);
    }


    function Todo(index, value, date, done) {
        this.index = index;
        this.value = value;
        this.date = date;
        this.done = done;
    }

    let todoObj;

    const todoInit = (todoArray) => {
        let date = new Date().toLocaleString();
        todos.forEach((item, index) => {
            todoObj = new Todo(index, item, date, false);
        });
        

        todoItems = todoItems || [];

        todoItems.push(todoObj);

        // console.log(todoObj);

        todoCreate(todoArray);
    }
    // functions 



    if (todoInput) {
        inputFocus();
        todoInput.addEventListener('input', (event) => {
            if (event.currentTarget.value != '') {
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
                // console.log(todoItems);

                todos.push(inputVal);

                // console.log(todos);


                todoInit(todoItems);
                createId();
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
    createId();


});