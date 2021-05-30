import './App.css';
import { Icon } from '@fluentui/react/lib/Icon';
import userphoto from './userphoto.png';
;
const username = "Srishti Sharma"

function App() {
  return (
    <div>
      <header className="App-header">
        <Icon
          className="logo-icon"
          iconName="TaskManager"
        />

        <img
          className="user-photo"
          src={userphoto} width="60" height="60" alt="logo"
        />

        <h1 className="title">My Tasks</h1>
        <h2 className="subtitle">My Tasks</h2>

        <p className="para" > Logged in user is {username}</p>

      </header>
    </div>
  );
}

export default App;
