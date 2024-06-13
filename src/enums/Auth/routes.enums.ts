enum UnauthorizedRoutes {
  welcome = '/',
  login = '/accounts/login',
  register = '/accounts/register',
  forgotPassword = '/accounts/forgotPassword',
  termsAndConditions = '/TermsAndConditions',
  resetPassword = '/accounts/resetPassword',
}
enum AuthorizedRoutes {
  dashboard = '/',
  categories = '/categories',
  today = '/today',
  tasks = '/tasks',
  habits = '/habits',
}

export { AuthorizedRoutes, UnauthorizedRoutes };
