import * as React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import theme from '../../core-utils/theme';

interface Props {
  children?: JSX.Element;
}

const ThemeWrapper: React.FC<Props> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default ThemeWrapper;
