enum UnauthorizedRoutes {
  login = '/accounts/login',
  register = '/accounts/register',
  forgotPassword = '/accounts/forgotPassword',
  termsAndConditions = '/TermsAndConditions',
}
enum AuthorizedRoutes {
  dashboard = '/',
}

export { AuthorizedRoutes, UnauthorizedRoutes };
