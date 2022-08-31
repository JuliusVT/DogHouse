import React, { useState } from "react";
import { useLocation } from 'wouter';

function SearchForm() {
  const [_, pushLocation] = useLocation()
  const [keyword, setKeyword] = useState('')

  const handleSubmit = evt =>{
    evt.preventDefault()
    pushLocation(`/search/${keyword}`)
  }
  
  const handleChange = evt =>{
    evt.preventDefault()
    setKeyword(evt.target.value)
  }
  return(
    <form onSubmit={handleSubmit}>
        <button>Buscar</button>
        <input placeholder='Search a dog here...' required onChange={handleChange} type='text' value={keyword}></input>
    </form>
  );
}
export default React.memo(SearchForm)