import { useDispatch, useSelector } from 'react-redux';
import { getUsersFetch } from './actions';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.myFirstReducer.users);
  console.log(users);

  return (
    <div className='App'>
      <div>
        <h1>Usuários: </h1>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
        <button onClick={() => dispatch(getUsersFetch())}>
          Listar Usuários
        </button>
      </div>
    </div>
  );
}

export default App;
