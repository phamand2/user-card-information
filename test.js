<div className='userProfile'>
<p>My name is {this.state.name[0].name.first} {this.state.name[0].name.last} </p>
<img
className='card-img-top'
src={this.state.url[0].picture.thumbnail}
alt='User'
onClick={this.getNewCard}
/>
<div>
  <input className='btn btn-primary' type='button' value='Next Profile' onClick={this.getNewCard}></input>
</div>
</div>