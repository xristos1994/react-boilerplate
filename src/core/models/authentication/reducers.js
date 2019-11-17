import { coreAuth_updateAccount, coreAuth_updateInitialRoute } from "./actions";

const reducer = (state = { isLogged: false }, action) => {
  switch (action.type) {
    case coreAuth_updateAccount.type: {
      return {
        ...state,
        account: action.payload,
        isLogged: Boolean(action.payload)
      };
    }
    case coreAuth_updateInitialRoute.type: {
      return { ...state, initialRoute: action.payload, isLogged: false };
    }
    default:
      return state;
  }
};

const coreAuth_reducer = {
  coreAuth: reducer
};

export default coreAuth_reducer;
