import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EpisodeInterface } from '../interfaces/episode.interface';

@Injectable()
export class EpisodeService {

    /**
     * Constructor
     */
    constructor(
        private _http: HttpClient
    ) {
    }


    /**
     * method returns details about selected Rick and Morty episode
     * @method getEpisodeById
     * @param url: episode's url
     * @return Observable<EpisodeInterface>
     */
    getEpisodeById( url: string ): Observable<EpisodeInterface> {
        return this._http.get<EpisodeInterface>( url );
    }
}
