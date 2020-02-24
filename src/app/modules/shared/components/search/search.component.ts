import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { CharacterService } from '../../../character/services/character.service';
import { SearchService } from '../../services/search.service';

@Component( {
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: [ './search.component.scss' ]
} )
export class SearchComponent implements OnInit {

    /**
     * Search input setter
     */
    @Input( 'value' )
    set search( search: AbstractControl ) {
        this.search.setValue( search );
    }

    /**
     * Search input getter
     */
    get search(): AbstractControl {
        return this.form.get( 'search' );
    }

    /**
     * Search form
     */
    form: FormGroup;

    /**
     * queryParams
     */
    queryParams: Params;

    constructor(
        private _fb: FormBuilder,
        private _router: Router,
        private _route: ActivatedRoute,
        private _characterService: CharacterService,
        private _searchService: SearchService,
    ) {
        this.form = _fb.group( { search: [ null, [ Validators.required, Validators.minLength( 3 ) ] ] } );
    }

    ngOnInit() {
        this.search.valueChanges.pipe( debounceTime( 250 ), distinctUntilChanged() ).subscribe( value => {
            if ( !value ) {
                const params = { ...this.queryParams };
                delete params.name;
                this._router.navigate( [ '' ], {
                    queryParams: params
                } );
            }
            this._searchService.searchState.next( value );
        } );
        this._route.queryParams.subscribe( ( params: Params ) => {
            this.queryParams = params;
            if ( params.name ) {
                this.search = params.name;
            }
        } );
    }

    /**
     * Form submission
     *
     * @method submit
     * @return void
     */
    submit() {
        if ( this.form.invalid ) {
            return;
        }
        this._router.navigate( [], {
            queryParams: {
                name: this.search.value
            },
            queryParamsHandling: 'merge'
        } );
        this._searchService.searchState.next( this.search.value );

    }

    /**
     * Method checks value, and if it is empty, marks field as untouched
     *
     * @method checkValue
     * @return void
     */
    checkValue() {
        if ( !this.search.value ) {
            this.search.markAsUntouched();
        }
    }
}

