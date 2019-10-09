import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'

const mapStateToProps = state => ({
	title: state.restaurants.title
})

const mapDispatchToProps = dispatch => ({})


const Navbar = props => (
	<div>
		<Link to="/"> Startsida</Link> | 
		<Link to="/about"> Om foodie</Link>
		<div>
			{props.title}
		</div>
	</div>
)


export default connect(mapStateToProps, mapDispatchToProps)(Navbar)