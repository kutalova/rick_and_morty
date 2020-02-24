import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CharacterInterface } from '../interfaces/character.interface';
import { CharacterDetailsInterface } from '../interfaces/characterDetailsInterface';
import { environment } from '../../../../environments/environment';

@Injectable()
export class CharacterService {

    /**
     * Constructor
     */
    constructor(
        private _http: HttpClient
    ) {
    }

    /**
     * method gets all Rick and Morty characters
     * @method getCharacters
     * @return Observable<CharacterInterface>
     */
    getCharacters(): Observable<CharacterInterface> {
        return this._http.get<CharacterInterface>( environment.serverDomain + 'character' );
    }

    /**
     * method returns details about selected Rick and Morty character
     * @method getCharacterById
     * @param id: character's id
     * @return Observable<CharacterDetailsInterface>
     */
    getCharacterById( id: number ): Observable<CharacterDetailsInterface> {
        return this._http.get<CharacterDetailsInterface>( environment.serverDomain + 'character/' + id );
    }
}
