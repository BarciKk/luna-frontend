enum UnauthorizedRoutes {
  login = '/accounts/login',
  register = '/accounts/register',
  resetPassword = '/accounts/reset-password',
  termsAndConditions = '/TermsAndConditions',
}
enum AuthorizedRoutes {
  dashboard = '/',
}

export { AuthorizedRoutes, UnauthorizedRoutes };
