import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { tap } from 'rxjs/operators';

@Injectable()
export class UnauthorizedUserGuard implements CanActivate, CanLoad, CanActivateChild {

    constructor(
        private _router: Router,
        private _usersService: UserService,
    ) {
    }

    /**
     * access check
     * @method _accessCheck
     */
    private _accessCheck() {

        this._usersService.checkLogin();
        return this._usersService._access.pipe(
            tap( ( access ) => !access && this._router.navigate( [ '/login' ] ) )
        );
    }

    canActivate( route: ActivatedRouteSnapshot ) {
        return this._accessCheck();
    }

    canActivateChild( route: ActivatedRouteSnapshot ) {
        return this._accessCheck();
    }

    canLoad( route: Route ) {
        return this._accessCheck();
    }


}
