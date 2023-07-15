import React, { useState } from 'react';
import './App.css';
import List from './components/List';
import FormList from './components/FormList';

export interface IState {
  people: {
    name: string
    age: number
    url: string
    nationality?: string
    note?: string
  }[]
}

function App() {

  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Hozier",
      age: 33,
      url: "https://static.onecms.io/wp-content/uploads/sites/6/2019/02/37a2023-2-2000.jpg",
      nationality: "Irish"
    }
  ])

  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      <List people={people} />
      <FormList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
