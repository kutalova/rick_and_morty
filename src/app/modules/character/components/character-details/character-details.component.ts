import { Component, OnDestroy, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterDetailsInterface } from '../../interfaces/characterDetailsInterface';
import { CharacterGenderEnum, CharacterSpeciesEnum, CharacterStatusEnum } from '../../enums/character.enum';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component( {
    selector: 'app-character-details',
    templateUrl: './character-details.component.html',
    styleUrls: [ './character-details.component.scss' ]
} )
export class CharacterDetailsComponent implements OnInit, OnDestroy {

    /**
     * Unsubscriber
     */
    private _unsubscriber = new Subject();
    /**
     * Character personal info
     */
    character: CharacterDetailsInterface;
    /**
     * enum of possible genders
     */
    characterGender = CharacterGenderEnum;
    /**
     * enum of possible statuses
     */
    characterStatus = CharacterStatusEnum;
    /**
     * enum of species
     */
    characterSpecies = CharacterSpeciesEnum;

    constructor(
        private _characterService: CharacterService,
        private _activatedRoute: ActivatedRoute,
        private _router: Router,
    ) {
    }

    ngOnInit() {
        this._activatedRoute.params
            .pipe( takeUntil( this._unsubscriber ) )
            .subscribe( ( data ) => {
                this.getCharacterInfo( data.id );
            } );

    }

    /**
     * Get more detailed info about character based on it's id
     * @method getCharacterInfo
     * @param id - character's id
     */
    getCharacterInfo( id: number ) {
        this._characterService.getCharacterById( id )
            .pipe( takeUntil( this._unsubscriber ) )
            .subscribe( ( data: CharacterDetailsInterface ) => {
                this.character = data;
            } );
    }

    /**
     * closes info tab and returns to the full list
     * @method back
     */
    back() {
        this._router.navigate( [ '/' ] );
    }

    ngOnDestroy() {
        this._unsubscriber.next();
        this._unsubscriber.complete();
    }

}
