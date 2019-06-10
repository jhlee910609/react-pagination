import React, { Component } from 'react';
import './App.scss';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      someNumbersList: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
      currentPage: 0,
      startIndex: 0,
      endIndex: 9,
      offset: 10
    };
  }

  onPageClick = (e) => {
    e.preventDefault()
    this.setState({ currentPage: parseInt(e.target.innerText) - 1})
  }

  pagingPrev = () => {
    const { startIndex, endIndex, offset } = this.state;
    if (startIndex == 0) {
      return;
    }
    this.setState({
      startIndex: startIndex - offset,
      endIndex: endIndex - offset,
      currentPage: endIndex - offset
    })
  }

  pagingNext = () => {
    const { startIndex, endIndex, offset } = this.state;
    if (endIndex > this.state.someNumbersList.length) return;
    this.setState({
      startIndex: startIndex + offset,
      endIndex: endIndex + offset,
      currentPage: startIndex + offset
    })
  }

  render() {

    const { someNumbersList, currentPage, startIndex, endIndex } = this.state;
    return (
      <Pagination>
        <PaginationItem className={'item'}>
          <PaginationLink onClick={this.pagingPrev} className={'paginationButton'} previous />
        </PaginationItem>

        {someNumbersList.slice(startIndex, endIndex + 1).map((i, key) => {
          return (
            <PaginationItem
              key={startIndex + i}
              className={'paginationItemStyle'}
              active={currentPage == (i)}>
              <PaginationLink onClick={this.onPageClick} className={'paginationLinkStyle'}>
                {i + 1}
              </PaginationLink>
            </PaginationItem>)
        }
        )}

        <PaginationItem className={'item'}>
          <PaginationLink className={'paginationButton'} next onClick={this.pagingNext} />
        </PaginationItem>

      </Pagination>
    );
  }
}