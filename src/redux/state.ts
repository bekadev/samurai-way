type PropsType = {
    id: number
    message: string
}


export let state = {
    posts: [
        {id: 1, message: 'texting for posts'},
    ],
    postData: [
        {id: 1, message: 'hi'},
        {id: 2, message: 'hype'},
        {id: 3, message: 'bye'}
    ],
    dialogsData: [
        {id: 1, name: 'Beka'},
        {id: 2, name: 'Alua'},
        {id: 3, name: 'Ayan'},
        {id: 4, name: 'Kuat'},
        {id: 5, name: 'Rahat'},
        {id: 6, name: 'Aldik'}
    ],
    messageData: [
        {id: 1, message: 'hi its me'},
        {id: 2, message: 'yo what you doing'},
        {id: 3, message: 'say me what your name'}
    ]
}

export const addPost = (postText: string) => {
    const newPost: PropsType = {
        id: new Date().getTime(),
        message: postText
    }
    state.posts.push(newPost)
}