// imports
import React from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";


function AccountContainer({
	transactions,
	addTransaction,
	searchTransaction,
	newDeleteTransaction,
}) {
	return (
		<div>
			<Search searchTransaction={searchTransaction} />
			<AddTransactionForm
				addTransaction={addTransaction}
				transactions={transactions}
			/>
			<TransactionsList
				transactions={transactions}
				newDeleteTransaction={newDeleteTransaction}
			/>
		</div>
	);
}

export default AccountContainer;
