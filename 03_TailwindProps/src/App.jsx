import React from 'react'
import Card from './Card'


export default function App() {
  return (
    <>
    <Card name="Windows" para="fkdhfkadhdfksdkskd" btnText="Click me"/>
    <Card name="Apple" para="loremkfzlkf'kf" 
    btnText="Click me"/>
    <Card name={23}/>
    </>
  )
}