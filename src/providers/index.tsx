import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AuthProvider from "./AuthProvider";
import { NotificationProvider } from "./NotificationProvider";
import { ThemeProvider } from "./ThemeProvider";
import { config } from "../lib/config";
import { HelmetProvider } from "react-helmet-async";

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  const googleClientId = config.auth.google.clientId;
  return (
    <GoogleOAuthProvider clientId={googleClientId}>
      <HelmetProvider>
        <ThemeProvider>
          <AuthProvider>
            <NotificationProvider>{children}</NotificationProvider>
          </AuthProvider>
        </ThemeProvider>
      </HelmetProvider>
    </GoogleOAuthProvider>
  );
};

export default Providers;
