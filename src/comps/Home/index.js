import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Search from '../Search';
import Results from '../Results';

function Home() {
  const [searchText, setSearhText] = useState('');

  const onSearchHandle = (txt) => {
    setSearhText(txt);
  }

  return (
    <div className="row">
      <div className="col-sm-12">
        <h1 className="heading">Employee Search<span><Link to="/history">History</Link></span></h1>
        <Search onSearch={onSearchHandle} />
        <Results searchText={searchText} />
      </div>
    </div>
  );
}

export default Home;