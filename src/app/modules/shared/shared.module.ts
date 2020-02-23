import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { faMale } from '@fortawesome/free-solid-svg-icons';
import { faBug } from '@fortawesome/free-solid-svg-icons';
import { faDizzy } from '@fortawesome/free-solid-svg-icons';
import { faGenderless } from '@fortawesome/free-solid-svg-icons';
import { faMars } from '@fortawesome/free-solid-svg-icons';
import { faVenus } from '@fortawesome/free-solid-svg-icons';
import { faUserSlash } from '@fortawesome/free-solid-svg-icons';
import { faGrin } from '@fortawesome/free-solid-svg-icons';

@NgModule( {
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        FontAwesomeModule,
        NgbModule,
        ReactiveFormsModule,
    ],
    declarations: [],
    exports: [
        RouterModule,
        FormsModule,
        FontAwesomeModule,
        NgbModule,
        ReactiveFormsModule,
    ],
    providers: [],
} )
export class SharedModule {
    constructor(library: FaIconLibrary) {
        library.addIcons(faVenus, faMars, faGenderless, faBug, faUserSlash, faMale, faDizzy, faGrin);
    }
}
