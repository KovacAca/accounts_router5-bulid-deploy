import React, { useState } from "react";
import { withRouter} from "react-router-dom";

function EditAccount (props){

  const [account, setAccount] = useState(props.accounts.filter(acc => acc.id == props.match.params.id)[0]);

  const editAccount = () => {
    props.editAccount(account);
    props.history.push("/");
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-10 offset-1">
          <h2 className="display-4 m-4">Edit Account</h2>
          <div className="row">
            <div className="col-10 offset-1">
              <input onChange={e=>{ setAccount({...account, name:e.target.value}) }} type="text" id="name" className="form-control" value={account.name} /><br />
              <input onChange={e=>{ setAccount({...account, lastname:e.target.value}) }} type="text" id="lastname" className="form-control" value={account.lastname}/><br />
              <input onChange={e=>{ setAccount({...account, phone:e.target.value}) }} type="text" id="phone" className="form-control" value={account.phone}/><br />
              <input onChange={e=>{ setAccount({...account, email:e.target.value}) }} type="text" id="email" className="form-control" value={account.email}/><br />
              <button onClick={editAccount} className="btn btn-info form-control">Edit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  
}

export default withRouter(EditAccount);