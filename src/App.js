import React, { useState } from "react";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AccountsTable from "./components/AccountsTable/AccountsTable";
import AddAccount from "./components/AddAccount/AddAccount";
import EditTable from "./components/EditTable/EditTable";
import EditAccount from "./components/EditAccount/EditAcount";

function App() {
  
  const [accounts, setAccounts] = useState([
    {id:1, name:"Aleksandar", lastname: "Kovač", phone: "555-369", email: "sale@gmail.com"},
    {id:2, name:"Žika", lastname: "Marić", phone: "22-22-22", email: "zile@gmail.com"}
  ])

   const addNewAccountToState = (acc) => {
    // console.log(acc);
    setAccounts([...accounts, acc]);
  }

  const deleteAccount = (id) => {
    // console.log(id);
    const newCopyAccounts = accounts.filter(account => {
      return account.id !== id
    });
    setAccounts(newCopyAccounts);
  }

  const editAccount = (acc) => {
    // console.log(acc);
    let accountPossition = accounts.map(account => account.id).indexOf(acc.id);
    // console.log(accountPossition);
    accounts[accountPossition] = acc;
    setAccounts(accounts);
  }

  return (
    <BrowserRouter>
      <Header />
      <Route path="/" exact><AccountsTable accounts={accounts} /></Route>
      <Route path="/add"><AddAccount addNewAccountToState={addNewAccountToState} /></Route>
      <Switch>
        <Route path="/edit/:id"><EditAccount accounts={accounts} editAccount={editAccount} /></Route>
        <Route path="/edit"><EditTable accounts={accounts} deleteAccount={deleteAccount} /></Route>
      </Switch>
    </BrowserRouter>
    )
  }

export default App;