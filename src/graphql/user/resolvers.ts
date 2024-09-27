import UserService, { CreateUserPayload } from '../../services/user';


const queries={
    getUserToken: async (_: any, payload: { email: string; password: string }) => { 
        const res = await UserService.getUserToken(payload);
        return res
    },
    getCurrentLoggedInUser: async (_: any, parameters: any, context:any) => {
       if(context && context.user){
           return context.user;
           const id=context.user.id;
           const user= await UserService.getUserById(id);
       }
       throw new Error("User not found");
    }
}

const mutations = {
  createUser: async (_: any, payload: CreateUserPayload) => {
    const res = await UserService.createUser(payload);
    return res.id;
  },
};

export const resolvers={queries,mutations}