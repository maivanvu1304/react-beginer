import React, { useState } from 'react';
import AddTodo from '../AddTodo';

export default function HeaderRFC() {
  const [name, setName] = useState('');
  const handleClick = () => {
    console.log('hello');
  };

  return (
    <div>
      <AddTodo />
      <label>Name</label>
      <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => handleClick()}>Submit</button>
      <br />
      Gia tri hien tai {name}
    </div>
  );
}
