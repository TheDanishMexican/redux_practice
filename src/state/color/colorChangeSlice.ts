import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ColorState {
  value: string;
}

const initialState: ColorState = {
  value: "pink",
};

const colorChangeSlice = createSlice({
  name: "colorChange",
  initialState,
  reducers: {
    changeColorToBlue: (state) => {
      state.value = "blue";
    },
    changeColorToInput: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { changeColorToBlue, changeColorToInput } =
  colorChangeSlice.actions;

export default colorChangeSlice.reducer;
