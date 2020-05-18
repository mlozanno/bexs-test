import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { CardProvider } from '~/context/card';
import GlobalStyles from '~/styles/global';
import { colors } from '~/styles/theme';
import Layout from '~/components/Layout';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: colors.primary,
		},
	},
});

const App = () => (
	<CardProvider>
		<MuiThemeProvider theme={theme}>
			<Layout />
			<GlobalStyles />
		</MuiThemeProvider>
	</CardProvider>
);

export default App;
