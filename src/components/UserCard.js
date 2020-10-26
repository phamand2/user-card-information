import React from 'react';
import axios from 'axios'


export default class UserCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      url: null
    }
  }


  componentDidMount() {
    this.getNewCard()

  }

  getNewCard = () => {
    axios.get('https://randomuser.me/api/')
      .then((res) => {
        const person = res.data;
        this.setState({
          url: person.results,
          name: person.results,
          location: person.results,
        })
      })
  }



  render() {
    if (!this.state.url) {
      return '';
    }
    return (
    <div className="card">
        <img
        className="card-img-top profile"
        src={this.state.url[0].picture.large}
        alt='User'
        onClick={this.getNewCard}
        />
        <div className='card-body'>
          <h5 className="card-title">User's Info</h5>
          <p className="card-text">{this.state.name[0].name.first} {this.state.name[0].name.last}</p>
          <input className='btn btn-primary' type='button' value='Next Profile' onClick={this.getNewCard}></input>
        </div>




    </div>



    )
  }

}
