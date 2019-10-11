import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import { actionCreators } from './actions'
import { actionCreators as restaurantPagesActionCreators} from './../RestaurantsPage/actions'
import { bindActionCreators } from 'redux'
import SignInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'




const Navbar = () => {
	return (
		<nav className="nav-wrapper grey darken-3">
			<div className="container">
				<Link to='/' className="brand-logo">Foodie</Link>
				<SignInLinks />
				<SignedOutLinks />
			</div>
		</nav>
	)
}

export default Navbar


// const mapStateToProps = state => ({
// 	title: state.restaurants.title,	
// 	myColor: state.navbar.myColor
// })

// const mapDispatchToProps = dispatch => ({
// 	actions: bindActionCreators(actionCreators, dispatch ),
// 	actionsRestaurantsPage: bindActionCreators(restaurantPagesActionCreators, dispatch)
// })


// class Navbar extends React.Component {
//     constructor() {
//         super()
// 		this.changeColor = this.changeColor.bind(this)
// 		// this.changeTitle = this.changeTitle.bind(this)
// 	}

// 	changeColor(e) {
//         console.log('hello')
// 		  this.props.actions.changeColor({one: '#f5f5f0', two: '#e0e0d1'})
// 		//this.props.actions.changeMyColor('#558000')
// 	}
// 	// changeTitle(e) {
//     //     console.log('hello')
//     //     this.props.actionsRestaurantsPage.changeTitle('hej hej ny title')
//     // }
// 	render() {
// 		return (
// 			<div>
// 				<header>
// 					<nav>
// 						<div style={{backgroundColor: this.props.myColor}}>
// 						<Link to="/"> Startsida</Link> | 
// 						<Link to="/about"> Om foodie</Link>
// 						</div>
// 						<br />
// 						<button onClick={this.changeColor}>change color navbar</button>
// 						<br />
// 						<br />
// 						{/* <button onClick={this.changeTitle}>change title</button> */}
// 					</nav>
// 				</header>	
// 			</div>
// 		)
// 	}
// }





// export default connect(mapStateToProps, mapDispatchToProps)(Navbar)