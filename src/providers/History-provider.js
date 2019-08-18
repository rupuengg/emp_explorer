import React, { useState } from 'react';
import HistoryContext from '../contexts/History-context';

export const HistoryProvider = props => {
  const [history, setHistory] = useState([]);

  return (
    <HistoryContext.Provider value={"history"}>{props.chilren}</HistoryContext.Provider>
  );
}