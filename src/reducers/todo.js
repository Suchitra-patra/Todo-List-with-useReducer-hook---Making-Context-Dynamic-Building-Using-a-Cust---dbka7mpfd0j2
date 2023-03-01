const todoReducer = (state, action) => {
    switch (action.type) {
        case 'add':
            return {todos:[...state.todos,action.payload]}
        case 'delete':
            return {todos:[...state.todos.filter(todo => todo.id !== action.payload.id)]}
        default:
            break;
    }
}

export { todoReducer }