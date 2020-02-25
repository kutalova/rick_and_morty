import { Component, OnDestroy, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { CharacterInterface } from '../../interfaces/character.interface';
import { CharacterDetailsInterface } from '../../interfaces/characterDetailsInterface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EpisodeService } from '../../services/episode.service';
import { EpisodeInterface } from '../../interfaces/episode.interface';
import { from, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { SearchService } from '../../../shared/services/search.service';
import { CharacterListInfoInterface } from '../../interfaces/characterListInfo.interface';

@Component( {
    selector: 'app-character-list',
    templateUrl: './character-list.component.html',
    styleUrls: [ './character-list.component.scss' ]
} )
export class CharacterListComponent implements OnInit, OnDestroy {

    /**
     * Unsubscriber
     */
    private _unsubscriber = new Subject();
    /**
     * array of characters
     */
    characters: Array<CharacterDetailsInterface>;
    /**
     * technical information about the array of characters
     */
    info: CharacterListInfoInterface;
    /**
     * list of episodes
     */
    episodes: Array<EpisodeInterface> = [];
    /**
     * The current page number. By default 1
     */
    page = 1;
    /**
     * Number of characters per page
     */
    pageSize = 20;

    constructor(
        private _characterService: CharacterService,
        private _episodeService: EpisodeService,
        private _searchService: SearchService,
        private modalService: NgbModal
    ) {
    }

    ngOnInit() {
        this._searchService.searchState.subscribe( ( data ) => {
            if ( data ) {
                this._characterService.getCharacterByName( data )
                    .pipe( takeUntil( this._unsubscriber ) )
                    .subscribe( ( chars: CharacterInterface ) => {
                            this.info = chars.info;
                            this.characters = chars.results;
                        }, ( error ) => console.error( error )
                    );
            } else {
                this._characterService.getCharacters()
                    .pipe( takeUntil( this._unsubscriber ) )
                    .subscribe( ( chars: CharacterInterface ) => {
                        this.info = chars.info;
                        this.characters = chars.results;
                    } );
            }
        } );

    }

    /**
     * Opens modal window with list of episodes
     * @param content - window template
     * @param charEpisodes - list of episodes to be shown in the modal window
     */
    open( content, charEpisodes: Array<string> ) {
        from( charEpisodes )
            .pipe(
                map( _episode => this._episodeService.getEpisodeById( _episode )
                    .subscribe( ( data: EpisodeInterface ) =>
                        this.episodes.push( data )
                    )
                ),
            )
            .subscribe();
        this.modalService.open( content, { ariaLabelledBy: 'modal-basic-title' } );
    }

    /**
     * Loads new page with characters
     * @method loadPage
     * @param $event: page number
     */
    loadPage( $event ) {
        this._characterService.getCharactersList( $event ).pipe( takeUntil( this._unsubscriber ) )
            .subscribe( ( chars: CharacterInterface ) => {
                this.characters = chars.results;
            } );
    }

    ngOnDestroy() {
        this._unsubscriber.next();
        this._unsubscriber.complete();
    }
}
