import React, { Component } from 'react'
import _ from 'lodash'
import classNames from 'classnames'

class Content extends Component {
    render() {
        let items = this.props.items.toArray()

        return (
            <ul>
                {items.map(v => <LiItem filter={this.props.filter} item={v} key={v} deleteItem={this.props.deleteItem} />)}
            </ul>
        )
    }
}

class LiItem extends Component {
    render() {
        let liClass = classNames({ hidden: !_.isEmpty(this.props.filter) && this.props.filter != this.props.item})

        return (
            <li className={liClass}>
                <span style={{marginRight: '4px'}}>{this.props.item}</span>
                <button onClick={this.props.deleteItem.bind(this, this.props.item)}>delete</button>
            </li>
        )
    }
}

export default Content
