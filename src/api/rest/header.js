const authHeaderAccount = (account)=> {
    return { 
      'username':  `${account.username}`,
      'access_token':  `${account.AccessToken}`
    };
}
const authHeader = ()=> {
    return { 
      'access_token':  `${localStorage.getItem("accessToken")}`
   };

}
const headerFefreshToken = ()=> {
  return { 
    'refresh_token':  `${localStorage.getItem("RefreshToken")}`
 };
}
export {authHeaderAccount, authHeader, headerFefreshToken}