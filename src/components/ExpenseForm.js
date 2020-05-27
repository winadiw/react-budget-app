import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";

export default class ExpenseForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      description: props.expense ? props.expense.description : "",
      note: props.expense ? props.expense.note : "",
      amount: props.expense ? (props.expense.amount / 100).toString() : "",
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: ""
    }
  }

  onDescriptionChange = (e) => {
    const description = e.target.value;

    this.setState({
      description,
    });
  };

  onNoteChange = (e) => {
    const note = e.target.value;

    this.setState({
      note,
    });
  };

  onAmountChange = (e) => {
    const amount = e.target.value;

    // example: 1095.55 is valid, 1095.555 is not valid
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState({
        amount,
      });
    }
  };

  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState({ createdAt });
    }
  };

  onFocusChange = ({ focused }) => {
    this.setState({
      calendarFocused: focused,
    });
  };

  onSubmitForm = (e) => {
    e.preventDefault();

    if (!this.state.description || !this.state.amount) {
       this.setState({error: "Please provide description and amount."})
    } else {
      // Clear the error
      console.log('submitted!');
      this.setState({ error: "" })
      this.props.onSubmit({
        description: this.state.description,
        note: this.state.note,
        createdAt: this.state.createdAt.valueOf(),
        amount: parseFloat(this.state.amount, 10) * 100 
      });
    }
  }

  render() {
    return (
      <div>
        {this.state.error && <p> {this.state.error} </p>}
        <form onSubmit={this.onSubmitForm}>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
            className="text-input"
          />
          <input
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
            className="text-input"
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            placeholder="Add a note for your expense (optional)"
            onChange={this.onNoteChange}
            className="textarea"
          ></textarea>
          <button className="button">Add Expense</button>
        </form>
      </div>
    );
  }
}
