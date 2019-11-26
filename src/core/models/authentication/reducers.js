import { config } from "@core/configuration";
import { coreAuth_updateAccount, coreAuth_updateInitialRoute } from "./actions";

const reducer = (
  state = { account: { isLogged: false || !config.hasLogin } },
  action
) => {
  switch (action.type) {
    case coreAuth_updateAccount.type: {
      return {
        ...state,
        account: action.payload
      };
    }
    case coreAuth_updateInitialRoute.type: {
      return { ...state, initialRoute: action.payload };
    }
    default:
      return state;
  }
};

const coreAuth_reducer = {
  coreAuth: reducer
};

export default coreAuth_reducer;
