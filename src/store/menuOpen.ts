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
