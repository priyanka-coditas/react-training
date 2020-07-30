import React from "react";
import jsonData from "./studentData.json";
class StudentMarksTable extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {};

  render() {
    return (
      <div className="invoice-body">
        {/* <h3>Name:{jsonData[this.props.location.state.id].name}</h3> */}
        <div className="d-flex flex-sm-row flex-column justify-content-center">
          <div className="invoice-itemization container-fluid">
            <table className="table table-bordered">
              <thead className="thead-default">
                <tr>{this.getHeader()}</tr>
              </thead>
              <tbody>
                <tr>{this.renderCells()}</tr>
              </tbody>
            </table>
            {/* <button onClick={(e) => this.handleClick()}>save</button> */}
          </div>
        </div>
      </div>
    );
  }
  componentWillUnmount() {
    localStorage.setItem("someSavedState", JSON.stringify(this.state));
    localStorage.setItem("id", this.props.location.state.id);
    jsonData[this.props.location.state.id].data=this.state;
  }
  componentWillMount() {
    const data = JSON.parse(localStorage.getItem("someSavedState"));
   
    const id = localStorage.getItem("id");
    id == this.props.location.state.id
      ? this.setState(data)
      : this.setState(jsonData[this.props.location.state.id].data);
    // this.setState(data);
    localStorage.clear();
  }
  getKeys = function () {
    return Object.keys(this.state);
  };
  getHeader = function () {
    var keys = this.getKeys();
    return keys.map((key, index) => {
      return <th key={key}>{key.toUpperCase()}</th>;
    });
  };
  renderCells() {
    const arr = this.getKeys();
    return arr.map(
      (field) => (
        <Cell
          key={field}
          value={this.state[field]}
          onChange={(value) => this.setState({ [field]: value })}
          mode={this.props.location.state.mode}
        />
      ),
    );
  }
}

class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editing: false };
  }

  render() {
    const { value, onChange } = this.props;
    return this.state.editing ? (
      <td className="no-pad">
        <input
          className="form-control editor edit-text"
          ref="input"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={(e) => this.onBlur()}
        />
      </td>
    ) : (
      //   <td onClick={() => this.onFocus()}>{value}</td>
      <td
        onClick={() => {
          this.props.mode === "view" ? this.onBlur() : this.onFocus();
        }}
      >
        {value}
      </td>
    );
  }

  onFocus() {
    this.setState({ editing: true }, () => this.refs.input.focus());
  }

  onBlur() {
    this.setState({ editing: false });
  }
}
export default StudentMarksTable;
