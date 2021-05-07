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
      isAuth: token ? true : false,
      setUser: this.setUser,
      setAuth: this.setAuth,
    };
  }

  setUser = (user) => {
    this.setState({ user });
  };

  setAuth = (boolean) => {
    this.setState({ isAuth: boolean });
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
