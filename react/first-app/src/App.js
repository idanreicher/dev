import React, { Component } from 'react';
import NameComponent from './components/NameComponent';
import NativeCounterButton from './components/NativeCounterButton';
import {Navbar, Nav, NavItem, NavDropdown, MenueItem, Form, FormControl, Button, Table} from 'react-bootstrap'
import Select from 'react-select';
import GoogleMaps from './components/GoogleMaps';

class App extends Component {

  constructor(props){
    super(props);
    this.addLastName = this.addLastName.bind(this);
    this.state = {
      array: ['hallo','to','you'],
      user_name: 'idan',
      user_name_props : 'idan reicher with props',
      selectedOption : '',
       options : [],
      jsonList: []
    };
  }
  
  componentDidMount(){
    fetch('http://www.json-generator.com/api/json/get/ceBzksMwEi?indent=2' ,{
      method: 'GET'
    })
    .then(Response => Response.json())
    .then(json => {
      console.log(json);
      
      this.setState({
        jsonList : json
      });
      const optionsList = this.state.jsonList.map(item => {
       return { value: item.name, label: item.name }
      });
      this.setState({
        options : optionsList
      });
    })
    .catch(error => {
      console.log(error)
    });
  }

  addLastName(){
    this.setState({
      user_name : 'idan reicher',
    });
      
  }

  handleChange = selectedOption => {
    this.setState(
      { selectedOption },
      () => console.log(`Option selected:`, this.state.selectedOption)
    );
  };

  render() {

   // const array = ['hallo','to','you'];
    // let array2Render = [];

    // array.forEach( word => 
    //                       array2Render.push(
    //                         <p key={array.indexOf(word)}>{word}</p>
    //                       ));
    const { array } = this.state;
    const { selectedOption } = this.state;
    const { options } = this.state;
    const { jsonList } = this.state;
    return (
      <div className="App">
        <div>

        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">First APP</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
          </Navbar>
        <div className='container'>

          <div className='row'>
            <div className="col-sm-12 my-5">
                <Select
                  value={selectedOption}
                  onChange={this.handleChange}
                  options={options}
                />
            </div>
            <hr/>
            </div>
          <div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Age</th>
                  <th>Company</th>
                </tr>
              </thead>
              <tbody>
                {
                  jsonList.map(item => {
                    if(selectedOption == '' || item.name == selectedOption.value )
                    return(
                      <tr>
                        <td key={item.name}>{item.name}</td>
                        <td key={item.name}>{item.address}</td>
                        <td key={item.name}>{item.age}</td>
                        <td key={item.name}>{item.company}</td>
                      </tr>
                    )
                  })
                }
                
              </tbody>
            </Table>
         
          </div>
            
        </div>
        </div>
        <div>

        <GoogleMaps />

        </div>
        <div>
          <NativeCounterButton />
          <NameComponent />
          <NameComponent user_name_props = {this.state.user_name_props}  />

          {array.map( word => <p key = {array.indexOf(word)}>{word}</p>)}

          <button onClick={()=>{console.log('anonymouse func')}}> click me for anonymouse func</button>
          <br/>
          <button onClick={this.componentDidMount}> click me for app <NameComponent user_name_props = {this.state.user_name_props}  /></button>
          <br/>
          <button   > click me for last name {this.state.user_name}</button>
          <br/>
          <button  onClick={this.addLastName}> click me for last name {this.state.user_name}</button>
      </div>
      </div>
    );
  }
}
export default App;
