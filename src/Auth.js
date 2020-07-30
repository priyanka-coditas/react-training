const Auth = {
  isAuthenticated: false,
  isLogout: false,
  authenticate() {
    console.log("in yes");
    this.isAuthenticated = true;
  },
  signout() {
    this.isAuthenticated = false;
    this.isLogout = true;
    return this.isLogout;
  },
  getAuth() {
    return this.isAuthenticated;
  },
  isLogin() {
    return true;
  },
};
export default Auth;
