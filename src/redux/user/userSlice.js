import { createSlice } from '@reduxjs/toolkit';

const initialState ={
    currentUser: null,
    error: null,
    loading: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInStart: (state)=>{
            state.loading = true;
        },
        signInSuccess: (state, action)=> {
            state.currentUser = action.playload;
            state.loading = false;
            state.error = null;
        },
        signInFailure: (state, action)=>{
            state.error = action.playload;
            state.loanding = false;
        }
    }
   
});
export const {signInStart, signInSuccess, signInFailure}= userSlice.actions;
export default userSlice.reducer;