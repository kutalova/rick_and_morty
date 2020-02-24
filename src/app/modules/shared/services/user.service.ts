import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE } from '@ng-toolkit/universal';
import { UserInterface } from '../interfaces/user.interface';
import { Router } from '@angular/router';
import { BehaviorSubject, of } from 'rxjs';

@Injectable( {
    providedIn: 'root'
} )
export class UserService {

    /**
     * returns true if user exists
     * @return boolean
     */
    _access = new BehaviorSubject<boolean>( false );

    constructor(
        @Inject( LOCAL_STORAGE ) private localStorage: any,
        private _router: Router
    ) {
    }

    /**
     * Login. Stores user data in LocalStorage
     *
     * @method Login
     * @param data - login data
     * @return void
     */
    login( data: UserInterface ) {
        this.localStorage.setItem( 'user', JSON.stringify( data ) );
        this._access.next( true );
        this._router.navigate( [ '/' ] );
    }

    /**
     * Logout. Removes user data from LocalStorage
     *
     * @method Logout
     * @return void
     */
    logout() {
        this.localStorage.removeItem( 'user' );
        this._access.next( null );
        this._router.navigate( [ '/login' ] ).then(() => this._router.navigate([{outlets: {details: null}}]));
    }
}
