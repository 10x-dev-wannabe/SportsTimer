import { writable } from "svelte/store";

export const timer = writable({
    sets: 0,
    work: 10,
    rest: 0,
})