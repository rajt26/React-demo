import { action, makeObservable, observable } from "mobx";

class UserStore {
  userInfo = [];

  constructor() {
    makeObservable(this, {
      userInfo: observable,
      addUser: action,
    });
  }
  addUser(name) {
    this.userInfo.push(name);
  }
  deleteUser(i) {
    this.userInfo = this.userInfo.filter((item) => {
      return item != this.userInfo[i];
    });
  }
}

export default UserStore;
