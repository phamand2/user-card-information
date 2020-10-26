import React from 'react';
import UserCard from './components/UserCard'
import './App.css';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: 1
    }
  }

  addUser = () => {
    this.setState(
      {
        users: this.state.users + 1 
      }
    )
  }


  render(){
    let userList = [];
    for (let index = 0; index < this.state.users; index++) {
      userList.push(<UserCard />);
      
    }

    
    return (
    <div className='container'>
      <div className="App">
        <h1>Welcome To Single People</h1>
        {userList}
        <div className='card userProfile'>
          
        </div>
          <button className='btn btn-primary' onClick={this.addUser}>Add User!</button>
      </div>


    </div>
  );
  
}
}

export default App;
