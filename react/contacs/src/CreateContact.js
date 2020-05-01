import React, { Component } from 'react'
import { Link, useHistory, withRouter } from 'react-router-dom'
import ImageInput from './ImageInput'
import serializeForm from 'form-serialize'
import * as ContactsAPI from './utils/ContactsAPI'


class CreateContact extends Component{

    
    handleSubmit = e => {
       
        e.preventDefault()
        const values = serializeForm(e.target , {hash: true})
        const isCreated = ContactsAPI.create(values).then(
            
            this.props.history.push('/')
        )
        
    }



    render(){
        
        return(
            <div>
                <Link to="/" className="close-create-contact"> Close </Link>
                <form onSubmit= { this.handleSubmit } className="create-contact-form">

                    <ImageInput 
                        className="create-contact-input"
                        name="avatarURL"
                        maxHeight={64}
                    />
                    <div className="create-contact-details">
                        <input type="text" name="name" placeholder="name" />
                        <input type="text" name="email" placeholder="email" />
                        <button>Add Contact</button>
                    </div>
                </form>
            </div>
        )
    }

}

export default withRouter(CreateContact)