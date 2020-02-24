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
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { SearchService } from './services/search.service';

@NgModule( {
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        FontAwesomeModule,
        NgbModule,
        ReactiveFormsModule,
    ],
    declarations: [ HeaderComponent, SearchComponent ],
    exports: [
        RouterModule,
        FormsModule,
        FontAwesomeModule,
        NgbModule,
        ReactiveFormsModule,
        HeaderComponent,
    ],
    providers: [ SearchService, SearchService],
} )
export class SharedModule {
    constructor( library: FaIconLibrary ) {
        library.addIcons( faVenus, faMars, faGenderless, faBug, faUserSlash, faMale, faDizzy, faGrin );
    }
}
