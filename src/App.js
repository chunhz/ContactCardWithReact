import React, { Component} from 'react';

import './App.css';
//import PropTypes from 'prop-types';

class ContactCard extends Component {
  render() {
    return <div>
      <h1>Name: {this.props.name}</h1>
      <p>Mobile Number: {this.props.mobileNum} </p>
      <p>Work Phone: {this.props.workNum}</p>
      <p>Email: {this.props.email}</p>

       </div>
  }
}

class App extends Component {
  render() {
    return <div>
    <ContactCard name = "John Jay"  mobileNum = "(123)123-1234" workNum = "none" email = "johnjay@email.com" />
    <ContactCard name = "John Doe" mobileNum = "(123)123-4321" email = "johndoe@email.com" />
    <ContactCard name = "Jane Doe" mobileNum = "(123)123-1122" email = "janedoe@email.com"workNum = "(321)321-4321"/>
    </div>
  }
}


export default App;