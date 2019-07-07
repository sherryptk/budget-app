import React from 'react';
import '../App.css';

class ExpenseList extends React.Component {
  constructor(props) {
    super(props);
    this.state = 
      {
        expenseName: '',
        expenseAmount: '',
        id: 0,
        expenseList: []
      };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onRemoveItem = this.onRemoveItem.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState(state => {
      const expenseList = state.expenseList.concat(
        {
          expenseName: this.expenseName.value,
          expenseAmount: this.expenseAmount.value,
          id: new Date().getUTCMilliseconds()
        }
      );
      return {
        expenseList,
        expenseName: '',
        expenseAmount: '',
      };
    });
  };

  onRemoveItem = id => {
    console.log()
    this.setState(state => {
      const expenseList = state.expenseList.filter((item) => {
        console.log(item)
        return item.id !== id
      });

      console.log(expenseList)

      return {
        expenseList,
      };
    });
  };

  render() {
    return (
      <div>
        <h1>Expense List</h1>
        <form onSubmit={this.handleSubmit}>
         <label htmlFor="expenseName">expense </label>
         <input
           type="text"
           name="expenseName"
           ref={expenseName => this.expenseName = expenseName}
         />
        <br/>
         <label htmlFor="expenseAmount">amount </label>
         <input
           type="expenseAmount"
           name="expenseAmount"
           ref={expenseAmount => this.expenseAmount = expenseAmount}
         />
          <br/>
        <input type="submit" value="Submit" />
       </form>
       {this.state.expenseList.length > 0 &&
        <ol>
          {this.state.expenseList.map(item => (
            <li 
            key={item.expenseName}>{item.expenseName}: ${item.expenseAmount}
              <button type="button" onClick={() => this.onRemoveItem(item.id)}>
                Remove
              </button>
              {console.log(this.state)}
            </li>
          ))}
        </ol>}
      </div>
    );
  }
}

export default ExpenseList;