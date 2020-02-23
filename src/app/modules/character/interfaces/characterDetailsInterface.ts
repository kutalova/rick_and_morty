import { CharacterGenderEnum, CharacterSpeciesEnum, CharacterStatusEnum } from '../enums/character.enum';
import { CharacterLocationInterface } from './characterLocation.interface';

export interface CharacterDetailsInterface {
    id: number,
    name: string,
    status: CharacterStatusEnum,
    species: CharacterSpeciesEnum,
    type: string,
    gender: CharacterGenderEnum,
    origin: CharacterLocationInterface,
    location: CharacterLocationInterface,
    image: string,
    episode: Array<string>,
    url: string,
    created: string,
}
