import { Coords } from 'google-map-react'

export type Input = {
    location: Coords,
    description: string
};

export type TypeInitialState = {
    from: Input,
    to: Input,
    travelTime: number,
    selectedOption: string
};