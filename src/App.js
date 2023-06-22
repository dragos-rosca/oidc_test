import {
  OidcSecure,
  useOidcUser,
  useOidc,
  useOidcAccessToken,
} from "@axa-fr/react-oidc";
import { useCallback } from "react";

function App() {
  const t = localStorage.getItem("tenant") || "default";

  const { oidcUser } = useOidcUser(t);
  const { logout } = useOidc(t);
  const { accessToken } = useOidcAccessToken(t);
  const onLogout = useCallback(() => logout(), [logout]);
  return (
    <OidcSecure configurationName={t}>
      <div>
        <h1>{oidcUser?.tid}</h1>
        <button onClick={onLogout}>Logout</button>
        <p>{accessToken}</p>
      </div>
    </OidcSecure>
  );
}

export default App;
