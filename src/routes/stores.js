import { writable } from "svelte/store";

export const timer = writable({
    sets: 0,
    work: 0,
    rest: 0,
})

export const actions = writable([])

export const mint = writable(0)
export const maxt = writable(0)
