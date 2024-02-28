enum UnauthorizedRoutes {
  login = '/accounts/login',
  register = '/accounts/register',
  resetPassword = '/accounts/password/reset',
  termsAndConditions = '/TermsAndConditions',
}
enum AuthorizedRoutes {
  dashboard = '/',
}

export { AuthorizedRoutes, UnauthorizedRoutes };
