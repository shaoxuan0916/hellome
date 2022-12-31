import create from "zustand"
import { persist } from "zustand/middleware"

interface AuthState {
  userProfile: any
  addUser: (user: any,username:string) => void
  removeUser: () => void
}

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      userProfile: null,
      addUser: (user: any, username:string) => set({ userProfile: {user, username:username} }),
      removeUser: () => set({ userProfile: null }),
    }),
    {
      name: "auth",
    }
  )
)

export default useAuthStore
