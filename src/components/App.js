// imports
import React, { useState, useEffect } from "react";
import AccountContainer from "./AccountContainer";


function App() {
	const [transactions, setTransactions] = useState([]);

      useEffect(() => {
        fetchTransactions()
    
      }, []);

      const fetchTransactions = () => {
        fetch('http://localhost:8001/transactions')
          .then((response) => response.json())
          .then((data) => {
            setTransactions(data)
    
          })
          .catch((err) => console.log(err))
      }

	const addTransaction = (transaction) => {
		setTransactions([...transactions, transaction]);
	};

	const newDeleteTransaction = (transactionId) => {
		const filterTransactions = transactions.filter(
			(transact) => transact.id !== transactionId
		);

		setTransactions(filterTransactions);
	};

	const searchTransaction = (searchItem) => {
		if (searchItem) {
			const filteredTransactions = transactions.filter((transact) => {
				if (transact.description.toLowerCase().match(searchItem.toLowerCase())) {
					return true;
				} else {
					return false;
				}
			});
			setTransactions(filteredTransactions);
		} else {
			fetchTransactions();
		}
	};


	return (
		<div className="ui raised segment">
			<div className="ui segment violet inverted">
				<h2>The Royal Bank of Flatiron</h2>
			</div>
			<AccountContainer
				addTransaction={addTransaction}
				transactions={transactions}
				searchTransaction={searchTransaction}
				newDeleteTransaction={newDeleteTransaction}
			/>
		</div>
	);
}

export default App;
