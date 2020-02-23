import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { CharacterInterface } from '../../interfaces/character.interface';
import { CharacterDetailsInterface } from '../../interfaces/characterDetailsInterface';

@Component( {
    selector: 'app-character-list',
    templateUrl: './character-list.component.html',
    styleUrls: [ './character-list.component.scss' ]
} )
export class CharacterListComponent implements OnInit {

    characters: Array<CharacterDetailsInterface>;

    constructor(
        private _characterService: CharacterService
    ) {
    }

    ngOnInit() {
        this._characterService.getCharacters().subscribe( ( data: CharacterInterface ) => {
            this.characters = data.results;
        } );
    }

}
