import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { immigrationApi } from './slices/ImmigrationSlice'

export const store = configureStore({
  reducer: {
    [immigrationApi.reducerPath]: immigrationApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(immigrationApi.middleware),
})

setupListeners(store.dispatch)