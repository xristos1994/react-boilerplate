import { Action, Actions } from "@core/actions-engine";

export const coreAuth_tryAuth = Actions("CORE_AUTH", "TRY_AUTH");

export const coreAuth_updateAccount = Action("CORE_AUTH", "UPDATE_ACCOUNT");

export const coreAuth_updateInitialRoute = Action(
  "CORE_AUTH",
  "UPDATE_INITIAL_ROUTE"
);

export const coreAuth_Logout = Action("CORE_AUTH", "LOGOUT");
