import React, { useState } from 'react';
import EmployeeContext from '../contexts/Employee-context';

export const EmployeeProvider = props => {
  const [emps, setEmp] = useState([]);

  return (
    <EmployeeContext.Provider value={[emps, setEmp]}>{props.children}</EmployeeContext.Provider>
  );
};