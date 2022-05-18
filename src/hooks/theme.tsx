import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  ReactNode,
} from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider as StyledThemeProvider } from 'styled-components/native';

import light from '@theme/light';
import dark from '@theme/dark';

//type CustomTheme = 'light' | 'dark';

type ThemeContextData = {
  isEnabled: boolean;
  handleTheme(): void;
};

type ThemeProviderProps = {
  children: ReactNode;
};

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

function ThemeProvider({ children }: ThemeProviderProps) {
  //const [themeState, setThemeState] = useState<CustomTheme>('light');
  const [isEnabled, setIsEnabled] = useState(false);

  //const handleTheme = (mode: CustomTheme) => setThemeState(mode);
  const handleTheme = () => setIsEnabled((previousState) => !previousState);

  const value = useMemo(
    () => ({
      isEnabled,
      handleTheme,
    }),
    [isEnabled, handleTheme],
  );

  return (
    <ThemeContext.Provider value={value}>
      <StyledThemeProvider theme={isEnabled ? dark : light}>
        <>
          <StatusBar style={isEnabled ? 'light' : 'auto'} translucent backgroundColor="transparent" />
          {children}
        </>
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
}

function useTheme() {
  const context = useContext(ThemeContext);

  return context;
}

export { ThemeProvider, useTheme };
