import React from "react"
import vv from '../picture.png'

class Checkpoint extends React.Component{
    constructor(){
        super()
        this.state={
            Person : { fullName : 'Humbert Charlotte',Age : '31', profession: 'banker'},
            show : false,
            intervall:null,
            timer:0
            
        }
    }

    render(){
        return(
            <div>
                <h6 style={{ marginTop: '40px', color:'green' }}>Counter :
                <b> {this.state.timer}</b> seconds</h6>
                
                <h1>Person</h1>

                <h2>fullName : {this.state.Person.fullName}</h2>
                <h2>Age : {this.state.Person.Age}</h2>
                <h2>Profession : {this.state.Person.profession}</h2>
                <img src={vv} alt='Not Found'/>
            </div>
        )
    }
    componentDidMount(){
        this.setState({
          intervall:setInterval(() => {
            this.setState({timer:this.state.timer +1});
          }, 1000)
        });
      }
}

export default Checkpoint