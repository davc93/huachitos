import { writable } from 'svelte/store';

function reducer() {
	const { subscribe, set, update } = writable("general");

	return {
		subscribe,
		goToGeneral: () => update(() => "general"),
		goToSubmit: () => update(() => "submit"),
		reset: () => set("general")
	};
}

export const formReducer = reducer();