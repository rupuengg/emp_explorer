import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Search from '../Search';
import Results from '../Results';
import HistoryContext from '../../contexts/History-context';

function Home() {
  const [history, setHistory] = useContext(HistoryContext);
  // let searchText = history[history.length-1] ? history[history.length-1] : "";
  const [searchText, setSearhText] = useState(history[history.length - 1] ? history[history.length - 1] : "");

  const onSearchHandle = (txt) => {
    setSearhText(txt);
  }

  return (
    <div className="row">
      <div className="col-sm-12">
        <h1 className="heading">Employee Search<span><Link to="/history">History</Link></span></h1>
        <Search searchText={searchText} onSearch={onSearchHandle} />
        <Results searchText={searchText} />
      </div>
    </div>
  );
}

export default Home;