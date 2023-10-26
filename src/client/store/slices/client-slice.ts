import { generateRandomWord } from '@/lib/utils/generate-random-word';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface ClientState {
	hangman: {
		word: string;
		gussedLetters: string[];
	};
}

const initialState: ClientState = {
	hangman: {
		word: generateRandomWord(),
		gussedLetters: [],
	},
};

const slice = createSlice({
	name: 'client',
	initialState,
	reducers: {
		setplaces: (state, action: PayloadAction<Partial<ClientState['hangman']>>) => {
			state.hangman = {
				...state.hangman,
				...action.payload,
			};
		},
	},
});

export const { setplaces } = slice.actions;
export default slice.reducer;
