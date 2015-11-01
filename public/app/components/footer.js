import React from 'react'
import ImmutableRenderMixin from 'react-immutable-render-mixin'

let Footer = React.createClass({
    mixins: [ImmutableRenderMixin],
    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <button style={{marginRight: '10px'}} className="pure-button button-secondary button-small" onClick={this.props.addItem}>add</button>
                <button className="pure-button button-error button-small" onClick={this.props.deleteAll}>deleteAll</button>
            </div>
        )
    }
})

export default Footer
