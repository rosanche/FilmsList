import { movies$ as movies } from '../../assets/movies';
// const proxyurl = 'https://cors-anywhere.herokuapp.com/';
//     const url = 'https://daysk.com/wp-json/wp/v2/posts?=search[blog]';

//     movies.then(
//         (response) => {
//     return (JSON.stringify(response))
//     })
//     .then(datas => {return (JSON.parse(datas))})    
const initialState = 
{ 
    films: [
    //         {
    //   id: '1',
    //   title: 'Oceans 8',
    //   category: 'Comedy',
    //   likes: 4,
    //   dislikes: 1
    // }, {
    //   id: '2',
    //   title: 'Midnight Sun',
    //   category: 'Comedy',
    //   likes: 2,
    //   dislikes: 0
    // }, {
    //   id: '3',
    //   title: 'Les indestructibles 2',
    //   category: 'Animation',
    //   likes: 3,
    //   dislikes: 1
    // }, {
    //   id: '4',
    //   title: 'Sans un bruit',
    //   category: 'Thriller',
    //   likes: 6,
    //   dislikes: 6
    // }, {
    //   id: '5',
    //   title: 'Creed II',
    //   category: 'Drame',
    //   likes: 16,
    //   dislikes: 2
    // }, {
    //   id: '6',
    //   title: 'Pulp Fiction',
    //   category: 'Thriller',
    //   likes: 11,
    //   dislikes: 3
    // }, {
    //   id: '7',
    //   title: 'Pulp Fiction',
    //   category: 'Thriller',
    //   likes: 12333,
    //   dislikes: 32
    // }, {
    //   id: '8',
    //   title: 'Seven',
    //   category: 'Thriller',
    //   likes: 2,
    //   dislikes: 1
    // }, {
    //   id: '9',
    //   title: 'Inception',
    //   category: 'Thriller',
    //   likes: 2,
    //   dislikes: 1
    // }, {
    //   id: '10',
    //   title: 'Gone Girl',
    //   category: 'Thriller',
    //   likes: 22,
    //   dislikes: 12
    // },
    ]
    // films: movies.then(
    //     (response) => {
    // return (JSON.stringify(response))
    // })
    // .then(datas => {return (JSON.parse(datas))})
    // .then(datas => console.log(datas))
    // films: 
    // fetch(proxyurl + url) 
    // .then((resp)=> { return resp.json() })
    // .then((datas)=> { 
    //     // this.setState({datas: datas});
    //     console.log(datas);
    //     return (datas);
    // })
}

const filmsReducer = (state = initialState, action) => {
    let nextState;
    // let nextState = await movies.then(
    //     (response) => {
    // return (JSON.stringify(response))
    // })
    // .then(datas => {return (JSON.parse(datas))})
    // // .then(datas => {
    // //     console.log(datas);
    // //     state = {...state, datas}})
    // nextState = {...state, films: nextState}
    // console.log(nextState);
    // // nextState = {...state};
    // // console.log(nextState);

    switch (action.type)
    {
        case 'FILMS_RECEIVED':
            nextState = { ...state, films: action.value}
            console.log(action.value);
            return (nextState);
        default:
            return (state);
    }
    return (nextState);
}

export default filmsReducer;