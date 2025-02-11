const {UserList, MovieList} = require('../fakeData')
const _= require("lodash")

const resolvers = {
    Query:{
        // User Resolvers
        users: () => {
            return UserList;
        },
        user: (parent, args)=>{
            const id= args.id;
            const user= _.find(UserList, {id: Number(id)});
            return user;
        },
        // Movie Resolvers
        movies: ()=>{
            return MovieList;
        },
        movie: (parent, args)=>{
            const name= args.name;
            const movie= _.find(MovieList, {name});
            return movie;
        }
    },
    User:{
        favoriteMovies: () =>{
            return _.filter(MovieList,(movie)=> movie.yearPublished >= 2000 && movie.yearPublished <= 2010)
        }
    },
    Mutation:{
        createUser: (parents, args) =>{
            const user= args.input;
            const lastId= UserList[UserList.length-1].id;
            user.id= lastId + 1;
            UserList.push(user)
            return user;
        },

        updateUsername: (parents, args) =>{
            const { id, newUsername }= args.input;
            let userUpdated;
            UserList.forEach((user)=>{
                if(user.id === Number(id)){
                    user.name = newUsername;
                    userUpdated= user;
                }
            });
            return userUpdated;
        },
    },
}

module.exports= {resolvers}