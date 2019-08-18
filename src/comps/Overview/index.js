import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EmployeeService from '../../services/EmployeeService';

function Overview(props) {
  const empService = new EmployeeService();

  const [emp, setEmp] = useState([]);

  useEffect(() => {
    empService.getEmployeeDetail(props.match.params.name)
      .then(res => {
        setEmp(res);
      })
      .catch(err => {
        console.log(err);
      });
  });

  return (
    <div className="row">
      <div className="col-sm-12">
        <h1 className="heading">Employee Detail<span><Link to="/">Back</Link></span></h1>
        <h3 className="heading-sub">Subordinates of employee <span>{props.match.params.name} {emp[0] && "(" + emp[0] + ")"}</span></h3>
        {emp[1]
          && emp[1]["direct-subordinates"]
          && <ul className="list-group">{emp[1]["direct-subordinates"].map((e, index) => <li className="list-group-item" key={index}>{e}</li>)}</ul>}
        {!emp[1]
          && <p>No subordinate!!!</p>}
      </div>
    </div>
  );
}

export default Overview