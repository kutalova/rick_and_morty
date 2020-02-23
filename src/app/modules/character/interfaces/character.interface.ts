import { CharacterListInfoInterface } from './characterListInfo.interface';
import { CharacterDetailsInterface } from './characterDetailsInterface';

export interface CharacterInterface {
    info: CharacterListInfoInterface,
    results: Array<CharacterDetailsInterface>,
}
