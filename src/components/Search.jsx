import React, { useState } from 'react'

const Search = ({ cb = Function.prototype }) => {
  const [value, setValue] = useState('')
  const handleKey = (evt) => {
    if (evt.key === 'Enter') {
      handleSubmit()
    }
  }
  const handleSubmit = () => {
    cb(value)
  }

  return (
    <div className="row">
      <div className="input-field col sp12">
        <input
          type="search"
          id="input-field"
          placeholder="search..."
          onChange={(evt) => setValue(evt.target.value)}
          onKeyDown={handleKey}
          value={value}
        />
        <button
          className="btn"
          style={{ position: 'absolute', top: 0, right: 0 }}
          onClick={handleSubmit}
        >
          Search
        </button>
      </div>
    </div>
  )
}

export default Search
