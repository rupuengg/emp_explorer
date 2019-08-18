import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import HistoryContext from '../../contexts/History-context';

function History() {
  const [history, setHistory] = useContext(HistoryContext);

  return (
    <div className="row">
      <div className="col-sm-12">
        <h1 className="heading">History<span><Link to="/">Back</Link></span></h1>
        <ul className="list-group">
          {history.map((el, index) => <li className="list-group-item" key={index}>{el}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default History;