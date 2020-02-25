import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component( {
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: [ './header.component.scss' ]
} )
export class HeaderComponent implements OnInit, OnDestroy {

    /**
     * Unsubscriber
     */
    private _unsubscriber = new Subject();

    /**
     * Variable used to check whether user exists
     */
    user = false;

    constructor(
        private _userService: UserService,
    ) {
    }

    ngOnInit() {
        this._userService._access.pipe( takeUntil( this._unsubscriber ) ).subscribe( ( data ) => this.user = data );
    }

    /**
     * Logout
     */
    logout() {
        this._userService.logout();
    }

    ngOnDestroy() {
        this._unsubscriber.next();
        this._unsubscriber.complete();
    }
}
