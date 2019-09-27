import React from "react"
import Firebase, { signInWithEmailAndPassword } from "./../../utils/connectFirebase"

class FirebaseManager extends React.Component {

    constructor() {
        super()
        this.sync = this.sync.bind(this)

    }

    sync() {
        console.log('i sync')
        console.log(Firebase)
        let items = []
        const db = Firebase.database()
        const rootRef = db.ref('messages')
          rootRef.on('value', snap => {
            items = []
            snap.forEach(childSnapshot => {
              items.push({...childSnapshot.val(), key: childSnapshot.key})
          })
          console.log('items: ', items)
        })        
    }

    componentDidMount() {
        signInWithEmailAndPassword('someEmail@gmail.com', '12344').then(
            this.sync() 
        )
        
    }

    render() {
        return null
    }
}

export default FirebaseManager