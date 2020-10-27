import React from 'react';
import axios from 'axios'


export default class UserCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      url: null,
      name: null,
      location: null,
    }
  }


  getNewCard = () => {
    axios.get('https://randomuser.me/api/')
      .then((res) => {
        const person = res.data.results[0];
        this.setState({
          url: person.picture,
          name: person.name,
          location: person.location,
        })
      })
  }

  componentDidMount() {
    this.getNewCard()

  }



  render() {
    if (!this.state.url) {
      return '';
    }
    const {name,location,url} = this.state;
    
    return (
    <div className="card">
        <img
        className="card-img-top profile"
        src={url.large}
        alt='User'
        onClick={this.getNewCard}
        />
        <div className='card-body'>
          <h5 className="card-title">User's Info</h5>
          <p className="card-text">{name.first} {name.last}</p>
          <p className="card-text">
          {location.street.number} {location.street.name}, {location.city}
          </p>
          <input className='btn btn-primary' type='button' value='Next Profile' onClick={this.getNewCard}></input>
        </div>
    </div>



    )
  }

}
