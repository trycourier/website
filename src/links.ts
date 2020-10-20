export const githubSignUpUrl =
  "https://courier.auth.us-east-1.amazoncognito.com/oauth2/authorize?identity_provider=Github&redirect_uri=https://trycourier.app/login/callback&response_type=CODE&client_id=5f4fmec2qnuscp89qbt8nsuftj&scope=aws.cognito.signin.user.admin%20email%20openid%20profile";
export const googleSignUpUrl =
  "https://courier.auth.us-east-1.amazoncognito.com/oauth2/authorize?identity_provider=Google&redirect_uri=https://www.trycourier.app/login/callback&response_type=CODE&client_id=5f4fmec2qnuscp89qbt8nsuftj&scope=aws.cognito.signin.user.admin%20email%20openid%20profile";
export const emailSignUpUrl = "https://app.courier.com/register/email";
export const signUpUrl = "https://app.courier.com/register/";

type SignUpType = "GitHub" | "Google" | "Email";

export const trackSignUp = (type?: SignUpType): void => {
  window.analytics.track("Sign Up", { category: "Account", label: type });
};
