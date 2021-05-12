import React from "react";

const appContext = React.createContext();
// context contains variables and the Provider make them accessible to every component it wraps
// Le Context contient des variables que le Provider rend accessible aux Components
// qu'il englobe pour que ceux-ci aient accès aux variables du Provider
// <Provider>
//  <Component (Consumer)/> <-- Aura accès aux variables du Provider
// </Provider>
class AppProvider extends React.Component {
  constructor(props) {
    super(props);

    const token = localStorage.getItem("token");

    this.state = {
      user: null,
      firstName: null,
      lastName: null,
      isAuth: token ? true : false,
      role: null,
      authUserId: null,
      currency: "$",
      setUser: this.setUser,
      setUserInfos: this.setUserInfos,

      setAuth: this.setAuth,
      setRole: this.setRole,
      logOut: this.logOut,
    };
  }

  setUser = (user) => {
    this.setState({ user });
  };

  setUserInfos = (user, firstName, lastName, role, authUserId) => {
    this.setState({ user, firstName, lastName, role, authUserId });
  };
  setAuth = (boolean) => {
    this.setState({ isAuth: boolean });
  };
  setRole = (role) => {
    this.setState({ role: role });
  };
  logOut = () => {
    this.setState({ isAuth: false });
    localStorage.removeItem("token");
  };
  render() {
    return (
      <appContext.Provider value={this.state}>
        {this.props.children}
      </appContext.Provider>
    );
  }
}

export { AppProvider };
export default appContext;
