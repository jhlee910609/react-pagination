import React, { Component } from 'react';
import './App.scss';
import Container from './Container';
import BaseComponent from './BaseComponent';
import RadioContainer from './RadioContainer';

export default class App extends BaseComponent {


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
      <div cl>
        <div style={{ height: '100px', width: '100%', backgroundColor: 'yellow', fontSize: '2rem', textAlign: 'center', position: 'fixed', top: '0', overflow: 'hidden' }}>메뉴바</div>
        <div style={{ marinTop: '100px', display: 'flex', flexDirection: 'column' }} >
          <Container defaultName={this.state.name} changeName={this.changeName} />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ width: '61px', height: '27px', borderRadius: '2px', border: 'solid 1px #a9afb3', padding: '5px', fontSize: '12px', boxSizing: 'boder-box' }}>
              10개 보기
            </div>
            <div style={{ marginTop: '50px', width: '61px', height: '27px', borderRadius: '2px', border: 'solid 1px #a9afb3', padding: '5px', fontSize: '12px' }}>
              10개 보기
            </div>
          </div>
        </div>
        <RadioContainer />
      </div>
    );
  }
}