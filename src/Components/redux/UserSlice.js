import { createSlice} from '@reduxjs/toolkit'
export const userSlice = createSlice({
name:"user", // sotre name
initialState:{

        data: {
            author:"Guest",
            crush_name : "My Love",
            message : "Loading...",
            confess_text : "Will You Marry me ? ",

           
                     },// harusnya nnti pake UserIs
},
reducers:{
    setContent : (state,action)=>{
        console.log("author created")
        state.data.author = action.payload.author
        state.data.message = action.payload.message
        state.data.confess_text = action.payload.confess_text
        state.data.crush_name = action.payload.crush_name
    }
   
}
})


export  const {setContent}= userSlice.actions
export default userSlice.reducer