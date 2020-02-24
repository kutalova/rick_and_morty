import { Component } from '@angular/core';
import { UserInterface } from '../../../shared/interfaces/user.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../shared/services/user.service';

@Component( {
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: [ './login.component.scss' ]
} )
export class LoginComponent {

    /**
     * Login form
     */
    form: FormGroup = this._fb.group( {
        login: [ null, [ Validators.required, Validators.minLength( 5 ), Validators.maxLength( 255 ) ] ],
        password: [ null, [ Validators.required, Validators.minLength( 2 ),
            Validators.maxLength( 50 ) ] ]
    } );

    constructor(
        private _usersService: UserService,
        private _fb: FormBuilder
    ) {
    }

    /**
     * Method submits login form
     */
    submit() {
        this._usersService.login( this.form.value as UserInterface );
    }

}
