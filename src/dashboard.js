import React from "react";
import "./App.css";
import StudentCard from './Components/StudentCardComponent';
class dashboard extends React.Component {
  
  
  render() {
  //     const {username}=this.props.match.params;
  console.log('this.props.location',this.props);
    return (
      <div>
       {/* <h3>Welcome{username}</h3> */}
       <StudentCard isAdmin={this.props.location.state.detail}/>
      </div>
    );
  }
}

export default dashboard;
