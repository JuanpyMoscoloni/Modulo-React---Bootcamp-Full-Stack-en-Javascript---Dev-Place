import React from 'react'

export function Car2(props) {
    props={
      name: "Soy un Auto con Props",
      color: "red"
    }
    return <h2>{props.name} {props.color}</h2>;
  }
