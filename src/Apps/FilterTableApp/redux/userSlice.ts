import { createSlice, PayloadAction, AnyAction } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import { RootState } from './store';
import axios from 'axios';

interface User {
  id: string;
  name: string;
  username: string;
  email: string;
}

interface UserState {
  users: User[];
  filteredUsers: User[];
}

const initialState: UserState = {
  users: [],
  filteredUsers: [],
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
    setFilteredUsers: (state, action: PayloadAction<User[]>) => {
      state.filteredUsers = action.payload;
    },
  },
});

export const { setUsers, setFilteredUsers } = userSlice.actions;

export const fetchUsers = (filters: Partial<User>): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch, getState) => {
    const { users } = getState().users;
    const filteredUsers = users.filter(user => {
      for (const key in filters) {
        if (user[key as keyof User].includes(filters[key as keyof User] as string)) {
          return true;
        }
      }
      return false;
    });
    dispatch(setFilteredUsers(filteredUsers));
  };
  

export const selectUsers = (state: RootState) => state.users.users;
export const selectFilteredUsers = (state: RootState) => state.users.filteredUsers;

export default userSlice.reducer;
