import axios from 'axios';
const url = 'http://localhost:1337/api/todos';

// CREATE
export const createTodo = async (newTodo) => {
  try {
    const jsonTodo = JSON.parse(`{
            "data": {
              "Content": "${newTodo.Content}"
            }
           }`);
    await axios.post(url, jsonTodo);
  } catch (error) {
    console.log(error);
  }
};
// READ
export const readTodos = async () => {
  try {
    {
      let allTodos = await axios.get(url);
      return allTodos;
    }
  } catch (error) {
    console.log(error);
  }
};
// UPDATE
export const finishTodo = async (id) => {
  try {
    {
      const jsonTodo = await JSON.parse(`{
            "data": {
              "Done": true
            }
           }`);
      await axios.put(`${url}/${id}`, jsonTodo);
    }
  } catch (error) {
    console.log(error);
  }
};
// DELETE
export const deleteTodo = async (id) => {
  try {
    {
      console.log(id);
      await axios.delete(`${url}/${id}`);
    }
  } catch (error) {
    console.log(error);
  }
};
