import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import sortBy from 'sort-by'
import escapeRegex from 'escape-string-regexp'
import Gravatar from 'react-gravatar'

class ListContacts extends Component{

    static propTypes = {
        contacts: PropTypes.array.isRequired,
        onDeleteContact: PropTypes.func.isRequired
    }

    state = {
        query : ''
    }

    updateQuery = query =>{
        this.setState({
            query: query.trim()
        }) 
    }

    render(){ 

       const { contacts, onDeleteContact } = this.props
       const { query } = this.state


        let showingContacts
        if (query) {
            const match = new RegExp(escapeRegex(query), 'i')
            showingContacts = contacts.filter(contact => match.test(contact.name))
        } else {
            showingContacts = contacts
        }

        showingContacts.sort(sortBy('name'))

        return(

            
            <div className="list-contacts">
                <div className="list-contacts-top">
                    <input 
                        className="search-contacts"
                        type="text"
                        placeholder="Search contacts"
                        value={query}
                        onChange={event => this.updateQuery(event.target.value)}
                    />
                    <Link  to="/create"
                            className="add-contact"   
                        >
                            Add Contacr
                    </Link>
                </div>    

                <ul className='contact-list'>
                    {showingContacts.map(contact => 
                        <li key={contact.id} className="contact-list-item">
                            {/* <div className="contact-avatar" style={{
                                backgroundImage: `url(${contact.avatarURL})`     
                                }} 
                            /> */}
                                <Gravatar email={contact.email} size={100} 
                                          rating="pg" default="monsterid"
                                          className="contact-avatar" 
                                />
                            <div className='contact-details'>
                                    <p>{contact.name }</p>
                                    <p>{contact.email} </p>
                            </div> 
                            <button onClick={() => onDeleteContact(contact)} className="contact-remove">
                                Remove
                            </button>
                        </li>    
                    )}
                </ul>


            </div>

            
        )
    }

}


export default ListContacts