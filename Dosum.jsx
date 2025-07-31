import React from 'react';

class Dosum extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      txt1: '',
      txt2: '',
      ans: '',
      errors: {}
    };
  }

  // Validation function
  doValidation() {
    const { txt1, txt2 } = this.state;
    let temperr = {};
    let isValid = true;

    if (!txt1) {
      temperr.txt1 = "Enter No1";
      isValid = false;
    } else if (isNaN(txt1)) {
      temperr.txt1 = "Enter Only Digits in No1";
      isValid = false;
    }

    if (!txt2) {
      temperr.txt2 = "Enter No2";
      isValid = false;
    } else if (isNaN(txt2)) {
      temperr.txt2 = "Enter Only Digits in No2";
      isValid = false;
    }

    this.setState({ errors: temperr });
    return isValid;
  }

  // Sum function
  doSum() {
    if (this.doValidation()) {
      const no1 = parseInt(this.state.txt1);
      const no2 = parseInt(this.state.txt2);
      const result = no1 + no2;
      this.setState({ ans: "Sum is " + result, errors: {} });
    } else {
      this.setState({ ans: "" }); // Clear result on error
    }
  }

  render() {
    return (
      <>
        <h1>Sum Demo</h1>

        No1 :{' '}
        <input
          type="text"
          value={this.state.txt1}
          onChange={(e) => this.setState({ txt1: e.target.value })}
        />
        <br />
        <span style={{ color: 'red' }}>{this.state.errors.txt1}</span>
        <br />

        No2 :{' '}
        <input
          type="text"
          value={this.state.txt2}
          onChange={(e) => this.setState({ txt2: e.target.value })}
        />
        <br />
        <span style={{ color: 'red' }}>{this.state.errors.txt2}</span>
        <br />

        <input type="button" value="+" onClick={this.doSum.bind(this)} />
        <br />
        <h3>{this.state.ans}</h3>
      </>
    );
  }
}

export default Dosum;