
import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { AddUser } from './Components/AddUser';
import { EditUser } from './Components/EditUser';
import { UserComponent } from './Components/UserComponent';
import { UserDetails } from './Components/UserDetails';
import { BaseApp } from './core/BaseApp';
import { data } from './Data/Data';

function App() {
  const[user, setUser] = useState(data);

  return (
    <div className="App">
     
     <Switch>

<Route exact path="/">
    <UserComponent
    user = {user}
    setUser = {setUser}
    />
</Route>
<Route  path="/add/user">
    <AddUser
    user = {user}
    setUser = {setUser}
    />
</Route>
<Route  path="/user/:id">
    <UserDetails
    user = {user}
    />
</Route>
<Route  path="/edit/:id">
    <EditUser
    user = {user}
    setUser = {setUser}
    />
</Route>




     </Switch>
    
      

    </div>
  );
}

export default App;
