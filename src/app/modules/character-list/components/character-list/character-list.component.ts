import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { CharacterInterface } from '../../interfaces/character.interface';
import { CharacterDataInterface } from '../../interfaces/characterData.interface';
import { map } from 'rxjs/operators';

@Component( {
    selector: 'app-character-list',
    templateUrl: './character-list.component.html',
    styleUrls: [ './character-list.component.scss' ]
} )
export class CharacterListComponent implements OnInit {

    characters: Array<CharacterDataInterface>;

    constructor(
        private _characterService: CharacterService
    ) {
    }

    ngOnInit() {
        this._characterService.getCharacters().subscribe( ( data: CharacterInterface ) => {
            this.characters = data.results;
            console.log(data.results, this.characters);
            // this.character = data.results;
        } );
    }

}
