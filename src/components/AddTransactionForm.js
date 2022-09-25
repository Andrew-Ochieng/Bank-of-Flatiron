// imports
import React, { useState } from "react";


function AddTransactionForm({ addTransaction }) {

	const [formData, setFormData] = useState({ 
    date: "", 
    description: "", 
    category: "", 
    amount: null,
  });

  const addNewTransaction = (e) => {
    e.preventDefault()

    fetch('http://localhost:8001/transactions', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        date: formData.date,
				description: formData.description,
				category: formData.category,
				amount: formData.amount,
      })
    })
      .then((response) => response.json())
      .then((data) => {
        addTransaction(data);
        setFormData({
          date: "",
          description: "",
          category: "",
          amount: null,
      });

      })
      .catch((err) => console.log(err))
  }


	const inputChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};



	return (
		<div className="ui segment">
			<form className="ui form" onSubmit={addNewTransaction}>
				<div className="inline fields">
					<input type="date" name="date" value={formData.date} onChange={inputChange}/>
					<input type="text" value={formData.description} name="description" placeholder="Description" onChange={inputChange}/>
					<input type="text" value={formData.category} name="category" placeholder="Category" onChange={inputChange}/>
					<input type="number" value={formData.amount} name="amount" placeholder="Amount"  onChange={inputChange}/>
				</div>
				<button className="ui button" type="submit">
					Add Transaction
				</button>
			</form>
		</div>
	);
}

export default AddTransactionForm;
