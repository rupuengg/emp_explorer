import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API_URL } from '../../config/constants';
import EmployeeContext from '../../contexts/Employee-context';

function Results({ searchText }) {
  const [emps, setEmp] = useContext(EmployeeContext);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(res => {
        setEmp(res.filter(emp => emp.toLowerCase().indexOf(searchText.toLowerCase()) >= 0));
      })
      .catch(err => {
        console.log(err);
      })
  })

  return (
    <ul className="list-group">
      {emps.map((emp, index) => <li className="list-group-item" key={index}><Link to={"/" + emp}>{emp}</Link></li>)}
    </ul>
  );
}

export default Results;