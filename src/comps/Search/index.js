import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import HistoryContext from '../../contexts/History-context';

function Search({ onSearch }) {
  const [history, setHistory] = useContext(HistoryContext);

  let textInput = null;

  const onButtonHandle = (val) => {
    onSearch(val);
    setHistory(history.concat(val));
  }

  return (
    <div>
      <div className="form-group search">
        <input className="form-control" type="text" ref={(input) => { textInput = input; }} />
        <button className="btn btn-primary" onClick={e => onButtonHandle(textInput.value)}>Search</button>
      </div>
    </div >
  );
}

export default Search;