import { useState, useEffect } from 'react';
import './style.css';
import * as api from './api';

function App() {
  const [todo, setTodo] = useState({});
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await api.readTodos();

      //I know it looks weird but it works
      console.log(result.data.data);
      setTodos(result.data.data);
    };
    fetchData();
  }, []);
  // CREATE
  const createTodo = async () => {
    try {
      // const { data } = 
      await api.createTodo(todo);
      // setTodos([...todos, data]);
    } catch (error) {
      console.log(error);
    }
  };
  // UPDATE
  const finishTodo = async (data) => {
    try {
      const id = data.id;
      await api.finishTodo(id);
      const result = await api.readTodos();
      setTodos(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  // DELETE
  const deleteTodo = async (data) => {
    try {
      const id = data.id;
      await api.deleteTodo(id);
      const result = await api.readTodos();
      console.log(result);
      setTodos(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='container' >
      <div class="p-3 mb-2 text-dark text-center" >
      <form>
        <div className='mb-3'>
          <label className='form-label' >Things To-do</label>
          <input
            type='text'
            className='form-control'
            id="ex5"
            value={todo.Content}
            onChange={(e) => setTodo({ ...todo, Content: e.target.value })}
          />
  
          <button
          class="form-submit"
          type='submit'
          className='btn btn-secondary'
          onClick={() => {
            createTodo(todo);
          }}
        >
          Save
        </button>
        </div>

       
      </form>
      </div>
      <div className='list-group mt-5' >
        {todos.map((data) => (
          <a
            href=''
            className=' list-group-item-action flex-column align-items-start active'
          >
            
            <div className='d-flex w-100 justify-content-between'>
              <h5 className='mb-1'>{data.attributes.Content}</h5>
              <div>
                
                <div class='w-40 p-3'>
                  <b>{!data.attributes.Done?
                  <button onClick={() => finishTodo(data)}>
                    <div>I  did it!  </div>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='40'
                      height='40'
                      fill='currentColor'
                      class='bi bi-calendar2-check-fill'
                      viewBox='0 0 16 16'
                    >
                      <path d='M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zm9.954 3H2.545c-.3 0-.545.224-.545.5v1c0 .276.244.5.545.5h10.91c.3 0 .545-.224.545-.5v-1c0-.276-.244-.5-.546-.5zm-2.6 5.854a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z' />
                    </svg>
                  </button>
                  : <span>Done!  </span>}
                  </b>
                  <button onClick={() => deleteTodo(data)}>
                  <div>Delete</div>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='40'
                      height='40'
                      fill='currentColor'
                      class='bi bi-calendar2-x-fill'
                      viewBox='0 0 16 16'
                    >
                      <path d='M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zm9.954 3H2.545c-.3 0-.545.224-.545.5v1c0 .276.244.5.545.5h10.91c.3 0 .545-.224.545-.5v-1c0-.276-.244-.5-.546-.5zm-6.6 5.146a.5.5 0 1 0-.708.708L7.293 10l-1.147 1.146a.5.5 0 0 0 .708.708L8 10.707l1.146 1.147a.5.5 0 0 0 .708-.708L8.707 10l1.147-1.146a.5.5 0 0 0-.708-.708L8 9.293 6.854 8.146z' />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default App;
