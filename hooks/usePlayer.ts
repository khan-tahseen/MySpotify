import { create } from "zustand";

interface PlayerStore {
    ids: string[];
    activeId?: string;
    setId: (id: string) => void;
    setIds: (ids: string[]) => void;
    reset: () => void;
}

const usePlayer = create<PlayerStore>((set) => ({
    ids: [],
    activeId: undefined,
    setId: (id) => {
        set((state) => {
            state.activeId = id;
            return state;
        });
    },
    setIds: (ids) => {
        set((state) => {
            state.ids = ids;
            return state;
        });
    },
    reset: () => {
        set((state) => {
            state.ids = [];
            state.activeId = undefined;
            return state;
        });
    },
}));

export default usePlayer;