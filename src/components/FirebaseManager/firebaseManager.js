import React from "react"
import Firebase, { signInWithEmailAndPassword } from "./../../utils/connectFirebase"
import PropTypes from 'proptypes'

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

        let items = []
        const db = Firebase.database()
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
        signInWithEmailAndPassword('mymail@gmail.com', '12344A').then(user => {
            this.sync() 
        })
    }

    render() {
        return null
    }
}
FirebaseManager.defaultProps = {
  dataSync: () => {}
}
/*
FirebaseManager.proptypes = {
    dataSync: PropTypes.func,
}
*/


export default FirebaseManager