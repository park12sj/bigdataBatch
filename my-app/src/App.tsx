import React, {useState, useEffect} from 'react';
import {IUser} from './IUser'
import {getDataPromise} from './getDataPromise'
import {Card} from './Card'
import './App.css'

function App() {
  const limit = 1
  const [Skip, setSkip] = useState(0)
  const [Users, setUsers] = useState<IUser[]>([])

  const onClick = () => {
    getDataPromise((recievedUsers: IUser[]) => {
      setSkip(Skip + limit)
      setUsers([...Users, ...recievedUsers])
    })(Skip,limit)
    console.log(Skip)
  }

  useEffect(onClick, [])
  
  return (
    <div className='App'>
      {Users.map((user:IUser, key:number) => (<Card click={onClick} user={user} key={key.toString()}/>))}
    </div>
  )
}

export default App;
