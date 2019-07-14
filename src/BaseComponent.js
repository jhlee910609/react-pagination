import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class BaseComponent extends PureComponent {
    static propTypes = {

    }

    componentWillMount() {
        window.onbeforeunload = function () {
            window.scrollTo(0, 0);
        }
    };
}
