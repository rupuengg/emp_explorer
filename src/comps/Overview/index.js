import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API_URL } from '../../config/constants';

function Overview(props) {
  const [emp, setEmp] = useState([]);

  useEffect(() => {
    fetch(API_URL + "/" + props.match.params.name)
      .then(res => res.json())
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