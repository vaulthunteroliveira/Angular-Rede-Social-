import { Injectable } from '@angular/core';
import { Local } from 'protractor/built/driverProviders';
import { LocalUser } from './../models/localuser';
import { STORAGE_KEYS } from './../config/storage';

@Injectable()
export class StorageService {

  constructor() { }


  getLocalUser(): LocalUser { 
    let usr = localStorage.getItem(STORAGE_KEYS.localUser)
    if (usr == null) {
      return null;
    } else { 
      return JSON.parse(usr);
    }
  }

  setLocalUser(obj: LocalUser) { 
    if (obj == null) {
      localStorage.removeItem(STORAGE_KEYS.localUser);
    } else { 
      localStorage.setItem(STORAGE_KEYS.localUser, JSON.stringify(obj));
    }

  }
}
