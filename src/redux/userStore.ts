import { create } from "zustand";

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

export interface UserStoreState {
  user: User;
  setUser: (payload: User) => void;
  removeUser: () => void;
}

const useUserStore = create<UserStoreState>((set) => ({
  user: initialState,
  setUser: (payload: User) => set((state) => ({ ...state, user: payload })),
  removeUser: () => set({ user: initialState }),
}));

export default useUserStore;
