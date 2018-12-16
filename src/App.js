import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';


class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <SayFullName name="Аня" surname="Иванова" link="ya.ru" /> 
        <SayFullName name="Ваня" surname="Петров" link="vk.com" /> 
        <SayFullName name="Петя" surname="Татаров" link="fb.me" /> 
        <SayFullName name="Аня" surname="Сидорова" link="google.com" /> 
      </div>
    );
  }
}

function SayFullName(props) {
  return (
      <div>
        <h1> Моё имя {props.name}, фамилия - {props.surname}</h1>
        <a href={props.link}> Профиль </a>
      </div>
    )
}

export default App;
