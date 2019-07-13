import React, { Component } from 'react';
import './App.scss';
import Container from './Container'
export default class App extends React.Component {


  constructor(prpos) {
    super();
    this.state = {
      name: '이준희',
      nameList: ['이준희', '송희진', '이태양', '김치현', '안태경', '오영준', '양건우'],
    };
  };

  changeName = () => {
    this.setState({
      name: this.state.nameList[Math.floor(Math.random() * (6) + 0)],
    });
  };

  render() {
    return (
      <Container defaultName={this.state.name} changeName={this.changeName} />
    );
  }
}