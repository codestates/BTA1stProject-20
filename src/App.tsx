import {useMemo, useState} from 'react';
import {Box, Button, createTheme, CssBaseline, IconButton, ThemeProvider, Typography} from "@mui/material";
import {Brightness4 as Brightness4Icon, Brightness7 as Brightness7Icon} from '@mui/icons-material';
import {ColorModeContext} from './contexts';
import {Route, BrowserRouter, Routes, Link} from "react-router-dom";
import {Main, Page1, Page2} from "./pages";

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
                            // justifyContent: 'center',
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
                        <Box display="flex" gap={1}>
                            <Button
                                variant="contained"
                                component={Link}
                                to="/"
                            >
                                home
                            </Button>
                            <Button
                                variant="contained"
                                color="secondary"
                                component={Link}

                                to="/page1"
                            >
                                page1
                            </Button>
                            <Button
                                color="error"
                                variant="contained"
                                component={Link}
                                to="/page2"
                            >
                                page2
                            </Button>
                        </Box>

                        <Routes>
                            <Route path="/" element={<Main />} />
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
