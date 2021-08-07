export interface Character {
    name?: string,
    species?: string,
    gender?: string,
    house?: string,
    dateOfBirth?: string,
    yearOfBirth?: number,
    ancestry?: string,
    eyeColour?: string,
    hairColour?: string,
    wand?: {
        wood?: string,
        core?: string,
        length?: number
    },
    patronus?: string,
    hogwartsStudent?: boolean,
    hogwartsStaff?: boolean,
    actor?: string,
    alive?: boolean,
    image?: string
}
