// Add bellow trusted domains, access tokens will automatically injected to be send to
// trusted domain can also be a path like https://www.myapi.com/users,
// then all subroute like https://www.myapi.com/useers/1 will be authorized to send access_token to.

// Domains used by OIDC server must be also declared here
const trustedDomains = {
  default: {
    domains: ["https://sso-qa.charisma.online"],
    showAccessToken: true,
  },
  // config_classic: ["https://demo.duendesoftware.com"] ,
  // config_without_silent_login: ["https://demo.duendesoftware.com"] ,
  // config_without_refresh_token: ["https://demo.duendesoftware.com"],
  // config_without_refresh_token_silent_login: ["https://demo.duendesoftware.com"],
  config_google: [
    "https://oauth2.googleapis.com",
    "https://openidconnect.googleapis.com",
  ],
  // config_with_hash: ["https://demo.duendesoftware.com"]
};

trustedDomains["11F38BA7-6F50-48F0-B8B6-109A2AE294FD"] = {
  domains: ["https://sso-qa.charisma.online"],
  showAccessToken: true,
};
trustedDomains["DA84628A-2925-4B69-9116-A90DD5A72B1F"] = {
  domains: ["https://sso-qa.charisma.online"],
  showAccessToken: true,
};
