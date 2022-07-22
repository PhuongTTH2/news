const apiGets = {
  refreshCredentials: "/auth/refresh-token",
  getAccount: "/account",
  signUpConfirm: "/auth/signup/confirm",
  getBookDetails: "/book/{id}",
  getBookChapters:"/book/{book_id}/chapter",
  getBookTopicDetails: "/book/get-topic/{topic_id}",
  getReligionInfluences: "/religion/influences"
};
export default apiGets;
