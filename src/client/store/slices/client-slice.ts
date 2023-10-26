import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface ClientState {
	hangman: {
		word: string[] | null;
		guessedLetters: string[];
	};
}

const initialState: ClientState = {
	hangman: {
		word: null,
		guessedLetters: [],
	},
};

const slice = createSlice({
	name: 'client',
	initialState,
	reducers: {
		sethangman: (state, action: PayloadAction<Partial<ClientState['hangman']>>) => {
			state.hangman = {
				...state.hangman,
				...action.payload,
			};
		},
	},
});

export const { sethangman } = slice.actions;
export default slice.reducer;
