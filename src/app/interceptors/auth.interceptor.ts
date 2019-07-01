import { Injectable } from "@angular/core";
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HTTP_INTERCEPTORS
} from "@angular/common/http";
import { Observable } from "rxjs";
import { StorageService } from "./../service/storage.service";
import { SOCIAL_API } from "./../service/social.api";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(public storage: StorageService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let localUser = this.storage.getLocalUser();

        let N = SOCIAL_API.length;
        let requestToApi = req.url.substring(0, N) == SOCIAL_API;

        if (localUser && requestToApi) {
            const reqAux = req.clone({
                headers: req.headers.set("Authorization", "Bearer " + localUser.token)
            });
            return next.handle(reqAux);
        } else {
            return next.handle(req);
        }
    }
}

export const AuthInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
};
