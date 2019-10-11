const initState = {
    projects: [
        {id: 1, title: 'Hejsan', content: 'blah blah blah'},
        {id: 2, title: 'Hallo', content: 'blah blah blah'},
        {id: 3, title: 'Köp blåbär', content: 'blah blah blah'}
    ]
}

const projectReduser = (state = initState, action) => {
    return state
}

export default projectReduser 