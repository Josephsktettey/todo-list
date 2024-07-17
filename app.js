const addForm = document.querySelector('.add');
// const todo = document.querySelector('.todos')
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

const generateTemplate  = (todo) => {
    const html = `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <span>${todo}</span>
                <i class="fa-solid fa-trash delete"></i>

            </li>

    
    `;

    list.innerHTML += html;
}

addForm.addEventListener('submit', e => {
    e.preventDefault();

    const todo = addForm.add.value.trim();
    // console.log(todo);

    if(todo.length){

        generateTemplate(todo);
        addForm.reset();
    }
    

});

//delee todos 

list.addEventListener('click', e =>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});



// /filtering the todos

const filterTodos = (term) => {

    Array.from(list.children)
        .filter((todo) => !todo.textContent.includes(term))
        .forEach((todo) => todo.classList.add('filtered'));

    Array.from(list.children)
        .filter((todo) => todo.textContent.includes(term))
        .forEach((todo) => todo.classList.remove('filtered'));
                 
 };

search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase;
    filterTodos(term);
});