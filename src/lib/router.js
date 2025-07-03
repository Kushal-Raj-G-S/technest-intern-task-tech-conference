// Router for the tech conference website
import { writable } from 'svelte/store';

export const currentPage = writable('home');

export function navigate(page) {
    currentPage.set(page);
}
