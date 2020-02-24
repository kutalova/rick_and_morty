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

@Component( {
    selector: 'app-character-list',
    templateUrl: './character-list.component.html',
    styleUrls: [ './character-list.component.scss' ]
} )
export class CharacterListComponent implements OnInit, OnDestroy {

    private _unsubscriber = new Subject();
    characters: Array<CharacterDetailsInterface>;
    episodes: Array<EpisodeInterface> = [];

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
                            this.characters = chars.results;
                        }, ( error ) => console.error( error )
                    );
            } else {
                this._characterService.getCharacters()
                    .pipe( takeUntil( this._unsubscriber ) )
                    .subscribe( ( chars: CharacterInterface ) => {
                        this.characters = chars.results;
                    } );
            }
        } );

    }

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

    ngOnDestroy() {
        this._unsubscriber.next();
        this._unsubscriber.complete();
    }
}
