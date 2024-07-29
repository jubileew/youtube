import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface MenuMinimizedContextType {
  isMinimized: boolean;
  setIsMinimized: Dispatch<SetStateAction<boolean>>;
}

export const MenuMinimizedContext =
  createContext<MenuMinimizedContextType | null>(null);

interface MenuMinimizedProviderProps {
  children: ReactNode;
}

export const useMenuContext = () => {
  const menuContext = useContext(MenuMinimizedContext);

  if (!menuContext) {
    throw new Error(
      "has to be used within provider"
    );
  }

  return menuContext;
};

export const MenuMinimizedProvider = ({
  children,
}: MenuMinimizedProviderProps) => {
  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <MenuMinimizedContext.Provider value={{ isMinimized, setIsMinimized }}>
      {children}
    </MenuMinimizedContext.Provider>
  );
};
