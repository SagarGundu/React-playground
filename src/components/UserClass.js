import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state={
            count:0,
            
        };
    }
    render(){
        const{count} =this.state;
        const{name,location}= this.props;
       
        return(
    <div className= "user-card">
   
    <h2>Count : {count}</h2>
    <button 
    onClick={()=>{
        this.setState({
            count:  this.state.count + 1 ,

        });
    }}
    >
         Count Increase
         </button>
         <button 
    onClick={()=>{
        this.setState({
            count:  this.state.count - 1 ,

        });
    }}
    >
         Count Decrease
         </button>
    <h2>Name: {name}</h2>
    <h3>Location: {location}</h3>
    <h4>Contact: 97856775599</h4>
    </div>

        );
    };
};
export default UserClass;