import { apiGetCurrent } from "@/apis/user";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
export const useUserStore = create(
  persist(
    (set, get) => ({
      token: null,
      current: null,
      setToken: (token) => set(() => ({ token })),
      getCurrent: async () => {
        const user = await apiGetCurrent();
        if (user.success) return set(() => ({ current: user.currentUser }));
      },
    }),
    {
      name: "real estate",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) =>
        Object.fromEntries(
          Object.entries(state).filter(
            (el) => el[0] === "token" || el[0] === "current"
          )
        ),
    }
  )
);
