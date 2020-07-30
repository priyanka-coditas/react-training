import React from "react";
import data from "./studentData.json";

class StudentData extends React.Component {
  getKeys = function () {
    return Object.keys(data[this.props.location.state.index].data);
  };
  getvalues = function () {
    return Object.values(data[this.props.location.state.index].data);
  };

  getHeader = function () {
    var keys = this.getKeys();
    keys.unshift("Semister");
    return keys.map((key, index) => {
      return <th key={key}>{key.toUpperCase()}</th>;
    });
  };
  getBody = function () {
    var keys = this.getvalues();
    // keys.unshift( 'Semister' );
    return keys.map((key, index) => {
      return <td key={key}>{key}</td>;
    });
  };
  render() {
    const studentData = data[this.props.location.state.index];
    const marks = this.getvalues();
    console.log(this.getvalues());
    console.log('this.props.location',this.props.location);
    return (
      <div>
        <div> Name:{studentData.name}</div>
        <div> Class:{studentData.class}</div>

        {/* <div>
          <table>
            <thead>
              <tr>{this.getHeader()}</tr>
            </thead>
            <tbody>
                <td></td>
            </tbody> */}
        {/* <tbody>{this.getRowsData()}</tbody> */}
        {/* </table>
        </div> */}

        <table>
          {/* <th>Semister</th> */}
          {Object.keys(studentData.data).map((key, value) => (
            <th>{key}</th>
          ))}
        </table>
      </div>

      
    );
  }
}

export default StudentData;
