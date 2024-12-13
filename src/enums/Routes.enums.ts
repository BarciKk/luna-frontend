enum UnauthorizedRoutes {
  welcome = '/',
  login = '/accounts/login',
  register = '/accounts/register',
  forgotPassword = '/accounts/forgot-password',
  termsAndConditions = '/terms-and-conditions',
  resetPassword = '/accounts/reset-password',
}
enum AuthorizedRoutes {
  dashboard = '/',
  categories = '/categories',
  customize = '/customize',
  today = '/today',
  tasks = '/tasks',
  habits = '/habits',
  termsAndConditions = '/terms-and-conditions',
}

export { AuthorizedRoutes, UnauthorizedRoutes };
