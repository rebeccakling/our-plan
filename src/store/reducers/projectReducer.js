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
            return state
        case 'CREATE_PROJECT_ERROR': 
            return state
        default:
            return state
    }
}

export default projectReduser 