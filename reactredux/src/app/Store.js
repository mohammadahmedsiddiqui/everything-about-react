const {configureStore} = require('@reduxjs/toolkit');
const todoReducer = require('../features/todo/todoslice');


export const store = configureStore({
    reducer: todoReducer
});