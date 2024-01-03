enum AuthorizedRoutes {
  login = "/",
  register = "/accounts/register",
  resetPassword = "/accounts/password/reset",
  termsAndConditions = "/TermsAndConditions",
}
enum UnauthorizedRoutes {
  dashboard = "/dashboard",
}

export { AuthorizedRoutes, UnauthorizedRoutes };
