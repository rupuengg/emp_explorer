import React from 'react';

function Search({ searchText, onSearch }) {
  let textInput = null;

  const onButtonHandle = (val) => {
    onSearch(val);
  }

  return (
    <div>
      <div className="form-group search">
        <input className="form-control" defaultValue={searchText} type="text" ref={(input) => { textInput = input; }} />
        <button className="btn btn-primary" onClick={e => onButtonHandle(textInput.value)}>Search</button>
      </div>
    </div >
  );
}

export default Search;