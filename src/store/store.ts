import { create } from "zustand";

interface MenuState {
  isMenuOpen: boolean;
  openMenuHandler: () => void;
  closeMenuHandler: () => void;
}

export const useMenuStore = create<MenuState>((set) => {
  return {
    isMenuOpen: false,
    openMenuHandler: () => {
      set({ isMenuOpen: true });
    },
    closeMenuHandler: () => {
      set({ isMenuOpen: false });
    },
  };
});

interface IIdolgroupPageIndexStore {
  activeIndex: number | null;
  prevIndex: number | null;
  setActiveIndex: (index: number) => void;
  setPrevIndex: (index: number | null) => void;
}

export const useIdolGroupPageIndexStore = create<IIdolgroupPageIndexStore>(
  (set) => ({
    activeIndex: null,
    prevIndex: null,
    setActiveIndex: (index: number) => set({ activeIndex: index }),
    setPrevIndex: (index: number | null) => set({ prevIndex: index }),
  })
);
