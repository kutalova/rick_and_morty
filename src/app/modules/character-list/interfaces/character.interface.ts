import { CharacterListInfoInterface } from './characterListInfo.interface';
import { CharacterDataInterface } from './characterData.interface';

export interface CharacterInterface {
    info: CharacterListInfoInterface,
    results: Array<CharacterDataInterface>,
}
