import { createSlice } from '@reduxjs/toolkit'
import { DataProvider } from "recyclerlistview";

const initialState = {
    audioList: [],
    dataprovider: new DataProvider((r1, r2) => r1 !== r2)
}

export const audioSlice = createSlice({
    name: 'audio',
    initialState,
    reducers: {
        addAudioList: (state, { payload }) => {
            console.log("poayload", payload)
            state.dataprovider.cloneWithRows(payload);
            state.audioList = payload;
        },
    },
})

// Action creators are generated for each case reducer function
export const { addAudioList } = audioSlice.actions

export default audioSlice.reducer