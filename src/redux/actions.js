export const ADD_TODO = (task) => {
    return {
        type: 'ADD_ITEM',
        data:task
    }
}
export const DELETE_TODO = (index) => {
    return {
        type: 'DELETE_TODO',
        id:index
    }
}


