import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface Article {
  _id: string
  title: string
  text?: string
  shortDescription: string
  status: {
    code: number
    title: string
  },
  views: number
}

interface initialStateProps {
  list: Article[]
  item: Article | undefined
}

const initialState: initialStateProps = {
  list: [],
  item: undefined
}

export const getArticles = createAsyncThunk(
  'article/getArticles',
  async () => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/article`)
    return res.data.data
  }
)

export const getArticleById = createAsyncThunk(
  'article/getArticleById',
  async (id: string) => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/article/${id}`)
    return res.data.data
  }
)

export const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    // setArticles: (state, action) => {
    //   state.article = action.payload
    // }
  },
  // extraReducers: {
  //   [getArticles.fulfilled]: () => console.log('fulfilled'),
  //   [getArticles.pending]: () => console.log('pending'),
  //   [getArticles.rejected]: () => console.log('rejected'),
  // }
  extraReducers: (builder) => {
    builder.addCase(getArticles.fulfilled, (state, action) => {
      state.list = action.payload
    })
    builder.addCase(getArticleById.fulfilled, (state, action) => {
      state.item = action.payload
    })
  },
})

export const { } = articleSlice.actions

export default articleSlice.reducer