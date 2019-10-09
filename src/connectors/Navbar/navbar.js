import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import { actionCreators } from './actions'
import { actionCreators as restaurantPagesActionCreators} from './../RestaurantsPage/actions'
import { bindActionCreators } from 'redux'

const mapStateToProps = state => ({
	title: state.restaurants.title,	
	myColor: state.navbar.myColor
})

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(actionCreators, dispatch ),
	actionsRestaurantsPage: bindActionCreators(restaurantPagesActionCreators, dispatch)
})


class Navbar extends React.Component {
    constructor() {
        super()
		this.changeColor = this.changeColor.bind(this)
		this.changeTitle = this.changeTitle.bind(this)
	}

	changeColor(e) {
        console.log('hello')
		this.props.actions.changeColor({one: '#797953', two: '#89895d'})
		//this.props.actions.changeMyColor('#558000')
	}
	changeTitle(e) {
        console.log('hello')
        this.props.actionsRestaurantsPage.changeTitle('hej hej ny title')
    }
	render() {
		return (
			<div>
				<Link to="/"> Startsida</Link> | 
				<Link to="/about"> Om foodie</Link>
				<div style={{backgroundColor: this.props.myColor}}>
					Hejsansvejsan
				</div>
				<br />
					<button onClick={this.changeColor}>change color</button>
					<br />
					<br />
					<button onClick={this.changeTitle}>change title</button>	
			</div>
		)
	}
}



export default connect(mapStateToProps, mapDispatchToProps)(Navbar)