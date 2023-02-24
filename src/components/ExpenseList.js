import React, { useContext } from 'react';
import ExpenseItem from './ExpenseItem'
import { AppContext } from '../context/AppContext';

const ExpenseList = () => {
    const { expenses } = useContext(AppContext);

    return (
        <table className='table'>
            <thead className='thead-light'>
                <tr>
                    <td scope='col'>Items</td>
                    <td scope='col'>Quantity</td>
                    <td scope='col'>Unit Price</td>
                    <td scope='col'>Item Price</td>
                    <td scope='col'>Remove</td>
                </tr>
            </thead>
            <tbody>
                {expenses.map((expense) => (
                    <ExpenseItem id={expense.id} key={expense.id} name={expense.name} quantity={expense.quantity} unitprice={expense.unitprice}/>
                ))};
            </tbody>
        </table>
    );
};

export default ExpenseList;
