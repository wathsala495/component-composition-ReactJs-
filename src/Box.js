import React from 'react'

export default function Box(props) {
    console.log(props)
  return (
    <div>
   {props.children}
    </div>
  )
}
