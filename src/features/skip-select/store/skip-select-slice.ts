import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { SkipType } from '@/features/skip-select/types';

interface SkipSelectState {
  selectedSkip: SkipType | null;
}

const initialState: SkipSelectState = {
  selectedSkip: null,
};

export const skipSelectSlice = createSlice({
  name: 'skipSelect',
  initialState,
  reducers: {
    setSelectedSkip: (state, action: PayloadAction<SkipType>) => {
      state.selectedSkip = action.payload;
    },
  },
});

export const { setSelectedSkip } = skipSelectSlice.actions;

export default skipSelectSlice.reducer;
