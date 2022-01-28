import React from 'react';

const Person = (props) => {
  const {age, name, children, nameChangeHandler} = props
  return <div>
    <p>I'm a {name}, and I'm {age} years old. </p>
    <p>{children}</p>
    <input onChange={nameChangeHandler} value={name}/>
  </div> 
}

export default Person;