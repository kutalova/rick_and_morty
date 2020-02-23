import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
    ],
    providers: [],
} )
export class SharedModule {
}
