import React from 'react';
import './App.css';
import Checkpoint from './Component/Checkpoint';


class App extends React.Component{
  constructor(){
    super()
    this.state={
      
      
    }
  }


  
  handleShow =()=> this.setState({show : !this.state.show})
  render(){
    return(
      <div>
        <button onClick={this.handleShow}>{this.state.show ? 'Hide' : 'Show'}</button>
        {

          this.state.show  &&  <Checkpoint/>
        }
                
      </div>
    )
  }
 
}


export default App;