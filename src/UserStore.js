import { action, makeObservable, observable } from "mobx";
import { observer } from "mobx-react";
import { toJS } from 'mobx'

class UserStore {
  userInfo = [];

  constructor() {
    makeObservable(this, {
      userInfo: observable,
      updateUser: action,
      addUser:action
    });
  }

  updateUser(name) {
    this.userInfo.name = name;
  }
  addUser(name){
    this.userInfo.push(name)
}
  deleteUser(i){
      this.userInfo = this.userInfo.filter((item)=>{
      return item != this.userInfo[i]
    })
  }
}

export default UserStore;
