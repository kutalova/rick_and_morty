import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable( {
    providedIn: 'root'
} )
export class SearchService {
    /**
     * has current searchbar value
     */
    searchState = new BehaviorSubject( '' );
}
