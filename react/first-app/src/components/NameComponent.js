import React, { Component } from 'react';

class NameComponent extends Component{
  
  constructor(props){
    super(props);
    this.state = {

     name_displayed : 'full name' 

    };
  }

  componentDidMount(){
      console.log('mounted NameComponent');
  }

  componentWillReceiveProps(nextProp){
    console.log(nextProp);
    console.log(this.props.user_name_props);
   
  }


  render() {

    const { user_name_props } = this.props;
    const { name_displayed } = this.state;

    return (
      <div>
        <p>{name_displayed}</p>
        <p>{user_name_props ? user_name_props : 'idan no props'}</p>
      </div>
    );
  }
}
export default NameComponent;
