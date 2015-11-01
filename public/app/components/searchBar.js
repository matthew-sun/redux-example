import React from 'react'
import ImmutableRenderMixin from 'react-immutable-render-mixin'

let SearchBar = React.createClass({
    mixins: [ImmutableRenderMixin],
    render() {
        return (
            <div className="pure-form">
                <input type="text" onKeyUp={this.props.filterItem} placeholder="请输入查找的item" />
            </div>
        )
    }
})

export default SearchBar
