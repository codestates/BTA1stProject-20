import {useMemo, useState} from 'react';
import {Box, Button, createTheme, CssBaseline, IconButton, ThemeProvider, Typography} from "@mui/material";
import {Brightness4 as Brightness4Icon, Brightness7 as Brightness7Icon} from '@mui/icons-material';
import {ColorModeContext} from './contexts';
import {Route, BrowserRouter, Routes} from "react-router-dom";
import {Page1, Page2, Start} from "./pages";

// TODO: theme change
// TODO: eslint, prettier 설정 추가
// TODO: component 분리
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
                <BrowserRouter>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '100%',
                            height: '100%',
                            alignItems: 'center',
                            backgroundColor: 'background.default',
                            color: 'text.primary',
                            p: 3,
                        }}
                    >
                        <Box>
                            <Typography display="inline" variant="body1">
                                {theme.palette.mode} mode
                            </Typography>
                            <IconButton sx={{ml: 1}} onClick={colorMode.toggleColorMode} color="inherit">
                                {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                            </IconButton>
                        </Box>
                        <Routes>
                            <Route path="/" element={<Start />} />
                            <Route path="/start" element={<Start />} />
                            <Route path="/page1" element={<Page1 />} />
                            <Route path="/page2" element={<Page2 />} />
                        </Routes>
                    </Box>
                </BrowserRouter>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
