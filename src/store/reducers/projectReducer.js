const initState = {
    projects: [
        // {id: 1, title: 'Hejsan', content: 'blah blah blah'},
        // {id: 2, title: 'Hallo', content: 'blah blah blah'},
        // {id: 3, title: 'Köp blåbär', content: 'blah blah blah'}
    ]
}

const projectReduser = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            //console.log('created project', action.project)
            return state
        case 'CREATE_PROJECT_ERROR': 
           // console.log('create project error', action.err)
            return state
        default:
            return state
    }
}

export default projectReduser 