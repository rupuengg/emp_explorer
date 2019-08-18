import React from 'react';

function Search({ onSearch }) {
  let textInput = null;

  return (
    <div>
      <div className="form-group search">
        <input className="form-control" type="text" ref={(input) => { textInput = input; }} />
        <button className="btn btn-primary" onClick={e => onSearch(textInput.value)}>Search</button>
      </div>
    </div >
  );
}

export default Search;