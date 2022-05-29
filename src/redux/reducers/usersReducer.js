import {FOLLOW,UNFOLLOW,ADD_USERS} from '../actions/usersAction'


const initialState = {
  users: [
    {
      id: 1,
      followed: false,
      photoUrl: "https://pbs.twimg.com/profile_images/497480183813640192/SyWwkg-E_400x400.jpeg",
      fullName: "Arayik",
      status: "hello world",
      location: { city: "Erevan", country: "Armenia" },
    },
    {
      id: 2,
      followed: false,
      photoUrl: "https://pbs.twimg.com/profile_images/497480183813640192/SyWwkg-E_400x400.jpeg",
      fullName: "Karen",
      status: "hi how are you",
      location: { city: "Mosscow", country: "Rusian" },
    },
    {
      id: 3,
      followed: false,
      photoUrl: "https://pbs.twimg.com/profile_images/497480183813640192/SyWwkg-E_400x400.jpeg",
      fullName: "Saqo",
      status: "i am happy",
      location: { city: "Minsk", country: "Belarus" },
    },
    {
      id: 4,
      followed: false,
      photoUrl: "https://pbs.twimg.com/profile_images/497480183813640192/SyWwkg-E_400x400.jpeg",
      fullName: "alex",
      status: "i am happy",
      location: { city: "Minsk", country: "Belarus" },
    },
    {
      id: 5,
      followed: false,
      photoUrl: "https://pbs.twimg.com/profile_images/497480183813640192/SyWwkg-E_400x400.jpeg",
      fullName: "mrdo",
      status: "i am happy",
      location: { city: "Minsk", country: "Belarus" },
    },
    {
      id: 6,
      followed: false,
      photoUrl: "https://pbs.twimg.com/profile_images/497480183813640192/SyWwkg-E_400x400.jpeg",
      fullName: "hamo",
      status: "i am happy",
      location: { city: "Minsk", country: "Belarus" },
    },
    {
      id: 7,
      followed: false,
      photoUrl: "https://pbs.twimg.com/profile_images/497480183813640192/SyWwkg-E_400x400.jpeg",
      fullName: "lolo",
      status: "i am happy",
      location: { city: "Minsk", country: "Belarus" },
    },
    {
      id: 8,
      followed: false,
      photoUrl: "https://pbs.twimg.com/profile_images/497480183813640192/SyWwkg-E_400x400.jpeg",
      fullName: "boloo",
      status: "i am happy",
      location: { city: "Minsk", country: "Belarus" },
    },
    {
      id: 9,
      followed: false,
      photoUrl: "https://pbs.twimg.com/profile_images/497480183813640192/SyWwkg-E_400x400.jpeg",
      fullName: "haqo",
      status: "i am happy",
      location: { city: "Minsk", country: "Belarus" },
    },
  ],
};


export const usersReducer = (state = initialState,action)=>{
  
    const {type,payload} = action;

    switch (type) {
      case FOLLOW: {
        return {
          ...state,
          users: state.users.map((u) => {
            if (u.id === payload) {
              return { ...u, followed: true };
            }
            return u;
          }),
        };
      }
      case UNFOLLOW: {
        return {
          ...state,
          users: state.users.map((u) => {
            if (u.id === payload) {
              return { ...u, followed: false };
            }
            return u;
          }),
        };
      }
      case ADD_USERS:{
          return{
              ...state,
              users:state.users.concat(payload)
          }
      }
      default:
        return state;
    }

}

export const usersItems = (state) => {
  return state.usersItem;
};