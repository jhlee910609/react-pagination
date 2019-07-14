import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styles from './App.scss';

const Input = ({ name, onChange, value }) => {
    return (
        <div>
            <input style={{ border: '1px solid red' }} name={name} onChange={onChange} value={value} />
        </div>
    )
};

const Item = ({ num, name, isChecked }) => {
    return (
        <div className={styles.item}>
            <span style={{ marginRight: '5px' }}>{num}</span>
            <span style={{ marginRight: '5px' }}>{name}</span>
            <span>{isChecked ? 'checked' : 'unchecked'}</span>
        </div>
    );
};

export default class Container extends PureComponent {

    constructor(props) {
        super();
        this.itemCount = 0;
        this.state = {
            name: props.defaultName,
            list: [],
        }
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    };

    setAllChecked = () => {
        const newList = this.state.list.map(item => ({
            ...item,
            isChecked: !item.isChecked,
            name: item.name,
        })
        );
        this.setState({
            list: newList,
        });

    };

    addItem = () => {
        if (!this.state.name) {
            return;
        }
        const tempList = this.state.list;
        const data = {
            num: ++this.itemCount,
            name: this.state.name,
            key: Date.now(),
            isChecked: false,
        }
        tempList.push(data);
        this.setState({
            list: tempList,
            name: '',
        })
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.defaultName !== this.props.defaultName) {
            this.setState({
                name: prevProps.defaultName,
            })
        }
    };

    render() {
        const { addItem, handleChange } = this;
        const { name } = this.state;
        return (
            <div style={{ marginTop: '100px' }}>
                <span>
                    <Input name='name' onChange={handleChange} value={name} />
                </span>
                <span>
                    <button onClick={addItem}>아이템 추가 하기</button>
                </span>
                <span>
                    <button onClick={this.props.changeName}>이름 변경</button>
                </span>
                <span>
                    <button onClick={this.setAllChecked}>체크 변경</button>
                </span>
                <div>
                    {this.state.list.map(item => {
                        const { num, name, key, isChecked } = item;
                        return (<Item num={num} name={name} key={key} isChecked={isChecked} />)
                    })}
                </div>
            </div >
        )
    }
}
