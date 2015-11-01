import React from 'react'
import SearchBar from '../components/searchBar'
import Content from '../components/content'
import Footer from '../components/footer'
import { connect } from 'react-redux'
import ImmutableRenderMixin from 'react-immutable-render-mixin'
import * as ItemsActions from '../actions'
import { bindActionCreators } from 'redux'

let App = React.createClass({
    mixins: [ImmutableRenderMixin],
    propTypes: {
        items: React.PropTypes.object,
        filter: React.PropTypes.string
    },
    render() {
        let styles = {
            width: '200px',
            margin: '30px auto 0'
        }
        const actions = this.props.actions

        return (
            <div style={styles}>
                <h2>Manage Items</h2>
                <SearchBar filterItem={actions.filterItem}/>
                <Content items={this.props.items} filter={this.props.filter} deleteItem={actions.deleteItem}/>
                <Footer addItem={actions.addItem} deleteAll={actions.deleteAll}/>
            </div>
        )
    }
})

export default connect(state => ({
    items: state.items,
    filter: state.filter
}), dispatch => ({
    actions: bindActionCreators(ItemsActions, dispatch)
}))(App)
