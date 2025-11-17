const { createSlice, nanoid } = require("@reduxjs/toolkit");

const initialstate = {
  todo: [{ id: "1", text: "learn redux toolkit" }],
};

const todoslice = createSlice({
  name: "todos",
  initialState: initialstate,
  reducers: {
    addtodo: (state, action) => {
      const newtodo = {
        id: nanoid(),
        text: action.payload.text,
      };
      state.todo.push(newtodo);
    },


    deletetodo: (state, action) => {
      state.todo = state.todo.filter((todo) => todo.id !== action.payload.id);
    },

    updatetodo: (state, action) => {
      const { id, text } = action.payload;
      const existingtodo = state.todo.find((todo) => todo.id === id);
      if (existingtodo) {
        existingtodo.text = text;
      }
    },
  },
});


 export const {addtodo, deletetodo, updatetodo} = todoslice.actions;
export default todoslice.reducer;