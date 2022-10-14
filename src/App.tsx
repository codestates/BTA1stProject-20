import {useMemo, useState} from 'react';
import {Box, createTheme, CssBaseline, IconButton, ThemeProvider} from "@mui/material";
import {Brightness4 as Brightness4Icon, Brightness7 as Brightness7Icon} from '@mui/icons-material';
import {ColorModeContext} from './contexts';

// TODO: theme change
// TODO: eslint, prettier 설정 추가
function App() {
    const [mode, setMode] = useState<'light' | 'dark'>('light');
    const colorMode = useMemo(() => ({
        toggleColorMode: () => {
            setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        },
    }), []);

    const theme = useMemo(() =>
            createTheme({
                palette: {
                    mode,
                },
            }),
        [mode]);

    return (
        <ColorModeContext.Provider value={colorMode}>
            <CssBaseline />
            <ThemeProvider theme={theme}>
                <Box
                    sx={{
                        display: 'flex',
                        width: '100%',
                        height: '100%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'background.default',
                        color: 'text.primary',
                        p: 3,
                    }}
                >
                    {theme.palette.mode} mode
                    <IconButton sx={{ml: 1}} onClick={colorMode.toggleColorMode} color="inherit">
                        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                    </IconButton>
                </Box>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
