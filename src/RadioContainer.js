import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styles from './RadioContainer.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const RadioButton = ({ isChecked, value, onChange }) => {
    return (
        <div className={cx('item-container', {
            isChecked: isChecked,
        })}>
            <label>
                <input name='selectedType' value={value} type='radio' id='btn-radio' checked={isChecked} onChange={onChange} />
                {`${value}개 보기`}
            </label>
        </div>
    );
}

export default class RadioContainer extends PureComponent {
    constructor(props) {
        super();
        this.state = {
            selectedType: 10,
        }
    };

    handleChange = e => {
        this.setState({
            selectedType: Number(e.target.value),
        })
    }

    render() {
        const { handleChange } = this;
        const { selectedType } = this.state;
        return (
            <div className={cx('container')}>
                <div style={{ textAlign: 'center' }}>
                    <h3>{`선택 : ${selectedType}`}</h3>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <RadioButton
                        value={10}
                        onChange={handleChange}
                        isChecked={selectedType === 10}
                    />
                    <RadioButton
                        value={50}
                        onChange={handleChange}
                        isChecked={selectedType === 50}
                    />
                    <RadioButton
                        value={100}
                        onChange={handleChange}
                        isChecked={selectedType === 100}
                    />
                </div>

            </div>
        )
    }
}
