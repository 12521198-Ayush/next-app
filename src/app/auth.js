import NextAuth from "next-auth";
import credentials from "next-auth/providers/credentials";
import CredentialsProvider from 'next-auth/providers/credentials'

export const {auth,signIn,handlers:{GET,POST}} = NextAuth({
    providers: [
        CredentialsProvider({
            name:"credential",
            Credentials:{
                username:{type:String,required:true},
                password:{type:String,required:true},
            },
            authorize: async(credentials)=>{
                const user = {id:2,name:"Ayush",password:"123",role:"admin"};
                if(credentials?.username===user.name && credentials?.password===user.password)
                    return user;
                else return null
            },
        }),
    ],
    secret:process.env.AUTH_SECERT,
    pages:{
        signIn:"/login",
    },
    callbacks:{
        jwt:async ({token,user})=>{
            if(user){
                token.role = user.role;
            }
            
            return token;
        },
        session:async ({session,token})=>{
            
            if(session?.user){
                session.user.role = token.role;
            }
            return session;
        }
    }
})