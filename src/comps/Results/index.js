import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EmployeeService from '../../services/EmployeeService';
import EmployeeContext from '../../contexts/Employee-context';

function Results({ searchText }) {
  const empService = new EmployeeService();

  const [emps, setEmp] = useContext(EmployeeContext);

  useEffect(() => {
    empService.getEmployees(searchText)
      .then(res => {
        setEmp(res);
      })
      .catch(err => {
        console.log(err);
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);

  return (
    <ul className="list-group">
      {emps.map((emp, index) => <li className="list-group-item" key={index}><Link to={"/overview/" + emp}>{emp}</Link></li>)}
    </ul>
  );
}

export default Results;
