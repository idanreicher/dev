import React, {Component} from 'react'
import ListContacts from './ListContacts' 
import { Route, Router } from 'react-router-dom'
import CreateContact from './CreateContact' 
import * as ContactsAPI from './utils/ContactsAPI'


class App extends Component{


  state = {
    contacts : []
 }
 
  componentDidMount(){
  ContactsAPI.getAll()
      .then(   
       contacts => this.setState({ contacts }),
    ) 
    
 }

 

 removeContact = contact => {
  this.setState(state => ({

    contacts: state.contacts.filter(c => c.id !== contact.id)

  }))

  ContactsAPI.remove(contact)

 }

 

  render() {

    const { contacts } = this.state
    return (
      <div className="App">
        <Route exact path="/" render={() => (
            <ListContacts 
                contacts={this.state.contacts}
                onDeleteContact = {this.removeContact}             
            />

          )}
        />  
        <Route path="/create" component={() => <CreateContact onCreate={contacts} />}  />
      </div>
    )
  }

}


export default App
