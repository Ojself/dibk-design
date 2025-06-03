import {
  addGlobalStylesheet,
  getCssVariablesFromTheme,
  stringifyCssColorVariables,
} from '../functions/helpers';
import type { ThemeProps } from './Theme';

import './ThemeProvider.module.scss';

export interface ThemeProviderProps {
  theme?: ThemeProps;
  children: React.ReactNode;
}

const ThemeProvider = ({ theme, children }: ThemeProviderProps) => {
  const cssVariablesFromTheme = getCssVariablesFromTheme(theme);
  const cssColorVariablesString = stringifyCssColorVariables(
    cssVariablesFromTheme
  );
  addGlobalStylesheet('theme-provider', `:root {${cssColorVariablesString}}`);

  return children;
};

export default ThemeProvider;
