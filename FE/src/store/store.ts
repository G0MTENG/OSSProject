import { create } from 'zustand'

interface Visitors {
    name: string
    cheer: string
}

interface Store {
    visitors: Visitors[]
    setVisitors: (visitors: Visitors[]) => void
}

export const useStore = create<Store>((set) => ({
    visitors: [],
    setVisitors: (visitors) => set({ visitors }),
}))
