import { writable } from "svelte/store";

export const timer = writable({
    sets: 0,
    work: 0,
    rest: 0,
})