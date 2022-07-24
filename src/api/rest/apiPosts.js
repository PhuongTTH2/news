const apiPosts = {
  signIn:"/auth/signin",
  signUpValidateEmail: "/auth/signup/validate-email",
  signUp: "/auth/signup",
  signUpConfirm: "/auth/signup/confirm",
  forgotPasswordInitiate: "/auth/forgot-password/initiate",
  forgotPasswordInitiateEmail: "/auth/forgot-password/initiate/email",
  forgotPasswordChange: "/auth/forgot-password/change",
  SET_MEMBERSHIP: "/set-membership",
  changePassword: "/account/change-password",
  terminateAccount: "/account/terminate",
  applyReligion: "/account/apply-religion",
  createBook: "/book",
  createBookChapter: "/book/{book_id}/chapter",
  createBookTopic: "/book/{book_id}/chapter/{chapter_id}/topic",
  postReligionInfluences: "/religion/create",
  signOut: "/account/signout",

};
export default apiPosts;
