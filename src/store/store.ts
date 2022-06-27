import { configureStore } from "@reduxjs/toolkit";
import { employeesSlice } from "./slices/employeesSlice";

/**
 * Redux main store
 */
export const store = configureStore({
  reducer: {
    employees: employeesSlice.reducer,
  },
});

/**
 * createTestStore function
 * @returns new store for testing purposes
 */
export const createTestStore = () => {
  const testStore = configureStore({
    reducer: {
      employees: employeesSlice.reducer,
    },
  });

  return testStore;
};

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
