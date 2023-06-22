import React, { useCallback, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { OidcProvider } from "@axa-fr/react-oidc";

const urlRoot = `${window.location.protocol}//${window.location.hostname}${
  window.location.port ? `:${window.location.port}` : ""
}`;
const AUTH = {
  CALLBACK: "/authentication/callback",
  SILENT_CALLBACK: "/authentication/silent_callback",
};

const config = (t) => {
  const extras = t === "default" ? undefined : { acr_values: `tenant:${t}` };
  return {
    client_id: "eOrder_Frontend",
    authority: "https://sso-qa.charisma.online",
    redirect_uri: `${urlRoot}${AUTH.CALLBACK}`,
    silent_redirect_uri: `${urlRoot}${AUTH.SILENT_CALLBACK}`,
    response_type: "code",
    scope: "openid profile IdentityServerApi email roles",
    post_logout_redirect_uri: `${urlRoot}`,
    automaticSilentRenew: true,
    loadUserInfo: true,
    triggerAuthFlow: true,
    revokeAccessTokenOnSignout: true,
    register_uri: `https://sso-qa.charisma.online/?returnUrl=${urlRoot}/register&clientId=eOrder_Frontend`,
    service_worker_relative_url: "/OidcServiceWorker.js",
    service_worker_only: true,
    refresh_time_before_tokens_expiration_in_second: 50,
    extras,
  };
};

const AuthProvider = ({ children }) => {
  const t = localStorage.getItem("tenant") || "default";

  const [cfg, setCfg] = useState(config(t));

  const onClick = useCallback(() => {
    localStorage.setItem("tenant", "11F38BA7-6F50-48F0-B8B6-109A2AE294FD");
    setCfg(config("11F38BA7-6F50-48F0-B8B6-109A2AE294FD"));
  }, []);
  const onClick2 = useCallback(() => {
    localStorage.setItem("tenant", "DA84628A-2925-4B69-9116-A90DD5A72B1F");
    setCfg(config("DA84628A-2925-4B69-9116-A90DD5A72B1F"));
  }, []);

  const logEvent = useCallback((cfgName, name, info) => {
    console.log(`${cfgName} : ${name}`);
    console.log(info);
  }, []);

  return (
    <OidcProvider configuration={cfg} configurationName={t} onEvent={logEvent}>
      <button onClick={onClick}>Change Tenant</button>
      <button onClick={onClick2}>Change Tenant</button>
      {children}
    </OidcProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
