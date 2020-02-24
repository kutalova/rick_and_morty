import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterDetailsInterface } from '../../interfaces/characterDetailsInterface';
import { CharacterGenderEnum, CharacterSpeciesEnum, CharacterStatusEnum } from '../../enums/character.enum';

@Component( {
    selector: 'app-character-details',
    templateUrl: './character-details.component.html',
    styleUrls: [ './character-details.component.scss' ]
} )
export class CharacterDetailsComponent implements OnInit {

    character: CharacterDetailsInterface;
    characterGender = CharacterGenderEnum;
    characterStatus = CharacterStatusEnum;
    characterSpecies = CharacterSpeciesEnum;

    constructor(
        private _characterService: CharacterService,
        private _activatedRoute: ActivatedRoute,
        private _router: Router,
    ) {
    }

    ngOnInit() {
        this._activatedRoute.params.subscribe( ( data ) => {
            this.getCharacterInfo( data.id );
        } );

    }

    getCharacterInfo( id: number ) {
        this._characterService.getCharacterById( id ).subscribe( ( data: CharacterDetailsInterface ) => {
            this.character = data;
        } );
    }

    back() {
        this._router.navigate(['/']);
    }

}
