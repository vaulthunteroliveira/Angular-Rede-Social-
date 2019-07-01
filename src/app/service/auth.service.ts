import { Injectable } from '@angular/core';
import { CredemciaisDTO } from './../models/credenciais.dto';
import { HttpClient } from '@angular/common/http';
import { SOCIAL_API } from './social.api';
import { LocalUser } from './../models/localuser';
import { StorageService } from './storage.service';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable()
export class AuthService {


  jwtHelper: JwtHelperService = new JwtHelperService();

  constructor(public http: HttpClient, public storage: StorageService) { }


  authenticate(creds: CredemciaisDTO) {
    return this.http.post(
      `${SOCIAL_API}/login`,
      creds,
      {
        observe: 'response',
        responseType: 'text'
      }
    );
  }


  successfulLogin(authorization: string) {
    let tokenAux = authorization.substring(7);
    let user: LocalUser = {
      token: tokenAux,
      email: this.jwtHelper.decodeToken(tokenAux).sub
    };
    this.storage.setLocalUser(user);
  }

  logout() {
    this.storage.setLocalUser(null);
  }



}
