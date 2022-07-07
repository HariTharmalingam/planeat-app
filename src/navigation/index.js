import React from "react";
import { AuthenticatedUserProvider } from "./Auth/AuthenticatedUserProvider";
import RootNavigator from "./Auth/RootNavigator";

/**
 * Wrap all providers here
 */

export default function Routes() {
  return (
    <AuthenticatedUserProvider>
      <RootNavigator />
    </AuthenticatedUserProvider>
  );
}
