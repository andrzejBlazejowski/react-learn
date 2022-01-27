import React from 'react';

const Person = (props) => {
  const {age, name, children} = props
  return <p>I'm a {name}, and I'm {age} years old. {children}</p>
}

export default Person;