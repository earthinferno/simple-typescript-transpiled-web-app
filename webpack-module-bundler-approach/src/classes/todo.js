const todo = {
    id: 123,
    name: 'Pick up dog',
    completed: true,
};
const todoTemplate = `
<div todo=${todo.id} class='list-group-item'>
  <i class="${todo.completed ? '' : 'hidden'}"></i>
  <span class="name">${todo.name}</span>
</div>
`;
export { todoTemplate };
