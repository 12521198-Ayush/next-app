import {auth} from "./app/auth"

export default auth((req)=>{
  const isloggedin = !!req.auth;
  const {nextUrl} = req;
  console.log(auth.jwt);
  if(nextUrl.pathname == '/login') return null;

  if(!isloggedin && nextUrl.pathname!='/login') 
    return Response.redirect(new URL("/login",nextUrl))
});

export const config = { matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"], }