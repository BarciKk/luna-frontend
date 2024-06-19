enum UnauthorizedRoutes {
  welcome = '/',
  login = '/accounts/login',
  register = '/accounts/register',
  forgotPassword = '/accounts/forgotPassword',
  termsAndConditions = '/termsAndConditions',
  resetPassword = '/accounts/resetPassword',
}
enum AuthorizedRoutes {
  dashboard = '/',
  categories = '/categories',
  today = '/today',
  tasks = '/tasks',
  habits = '/habits',
  termsAndConditions = '/termsAndConditions',
}

export { AuthorizedRoutes, UnauthorizedRoutes };
