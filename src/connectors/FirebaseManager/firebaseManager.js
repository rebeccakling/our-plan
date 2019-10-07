import React from "react"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'proptypes'

import { actionCreators } from './actions'


const mapStateToProps = state => ({
	auth: state.auth
})

const mapDispatchToProps = dispatch => ({
 actions: bindActionCreators(actionCreators, dispatch),
})

class FirebaseManager extends React.Component {

    constructor() {
        super()
        this.sync = this.sync.bind(this)
        this.onSync = this.onSync.bind(this)
    }
    onSync(payload) {
        this.props.dataSync(payload)
    }

    sync() {
        const { firebase } = this.props
        let items = []
        const db = firebase.database()
        const rootRef = db.ref('messages')
          rootRef.on('value', snap => {
            items = []
            snap.forEach(childSnapshot => {
              items.push({...childSnapshot.val(), key: childSnapshot.key})
          })
          this.onSync(items)

        })        
    }

    componentDidMount() {
        const { firebase } = this.props
		firebase.auth().onAuthStateChanged(user => {
			this.props.actions.firebaseAuthSync({ isLogedIn: !!user, user })
		})
    }

    render() {
        return null
    }
}
FirebaseManager.defaultProps = {
  dataSync: () => {}
}

FirebaseManager.propTypes = {
    dataSync: PropTypes.func,
}



export default connect(mapStateToProps, mapDispatchToProps)(FirebaseManager)