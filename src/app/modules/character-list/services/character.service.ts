import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CharacterInterface } from '../interfaces/character.interface';


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
     * @return  Observable
     */
    getCharacters(): any {
    // getCharacters(): Observable<Array<CharacterInterface>> {
        return this._http.get('https://rickandmortyapi.com/api/character');
    }
}
