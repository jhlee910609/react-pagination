import React, { Component } from 'react'
import { Pagination, PaginationItem, PaginationLink, Dropdown, DropdownMenu, DropdownItem, DropdownToggle, Button } from 'reactstrap';
import InnerComponent from './InnerComponent';

const styles = {
    button: {
        width: '100px',
        height: '50px',
        color: "green",
        backgroundColor: "yellow",
        border: '0px',
        lineHeight: '20px',
        fontSize: '20px'
    },
    dropDown: {
        backgroundColor: "yellow",
        color: "black"
    },
    pagination: {
        textAlign: 'center',
        margin: '0px auto'
    }
}

export default class ButtonsComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dropdownOpen: false,
            selected: '직무',
            currentPage: 0
        };
        this.dataSet = new Array(6000).map(
            (a, i) => "Record " + (i + 1)
        );

        this.pageSize = 612;
        this.pagesCount = Math.ceil(this.dataSet.length / this.pageSize);
    }

    toggle = () => {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    menuClicked = (e) => {
        this.setState({
            selected: e.target.value
        })
    }

    innerClicked = (e) => {
        alert('hi')
    }

    handleClick = (e, index) => {
        e.preventDefault();
        this.setState({
            currentPage: index
        })
    }



    render() {

        const roles = ['경리', '관리', '경비', '개발', '분류없음']
        const { currentPage } = this.state;
        const menuList = roles.map(
            (item, i) => (
                <DropdownItem value={item} onClick={this.menuClicked} key={i}>{item} </DropdownItem>
            )
        )

        return (
            <div>
                <Button style={styles.button} onClick={() => alert('hi!')}>Hello!</Button>
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} >
                    <DropdownToggle caret>
                        {this.state.selected}
                    </DropdownToggle>
                    <DropdownMenu>
                        {menuList}
                    </DropdownMenu>
                </Dropdown>
                <InnerComponent handleClick={this.innerClicked} />

                <br />
                <br />

                <h2>Pagination</h2>
                <h3>{currentPage}</h3>
                <div style={{ display: 'inline-block', marginTop: '25px' }}>
                    <Pagination style={styles.pagination} size='sm' arias-lable="Page navigation example">
                        <PaginationItem disabled={currentPage <= 0}>
                            <PaginationLink
                                onClick={e => this.handleClick(e, currentPage - 1)}
                                previous
                                href='#'
                            />
                        </PaginationItem>
                        {[...Array(this.pagesCount)].map((page, i) =>
                            <PaginationItem active={i === currentPage} key={i}>
                                <PaginationLink onClick={e => this.handleClick(e, i)} href='#'>
                                    {i + 1}
                                </PaginationLink>
                            </PaginationItem>
                        )}
                        <PaginationItem disabled={currentPage >= this.pagesCount - 1}>
                            <PaginationLink
                                onClick={e => this.handleClick(e, currentPage + 1)}
                                next
                                href='#' />
                        </PaginationItem>
                    </Pagination>
                </div>
                <div>
                    {this.dataSet.slice(
                        currentPage * this.pageSize,
                        (currentPage + 1) * this.pageSize
                    ).map((data, i) =>
                        <div className='data-slice' key={i}>
                            {data}
                            console.log(data);
                        </div>
                    )}
                </div>
            </div>
        )
    }
}


