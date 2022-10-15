import {useMemo, useState} from 'react';
import {Box, createTheme, CssBaseline, IconButton, ThemeProvider} from "@mui/material";
import {Brightness4 as Brightness4Icon, Brightness7 as Brightness7Icon} from '@mui/icons-material';
import {ColorModeContext} from './contexts';
import {Route, BrowserRouter, Routes, Navigate} from "react-router-dom";
import {AskFirstTime, BringWallet, CreateWallet, Start} from "./pages";
import {QueryClient, QueryClientProvider} from "react-query";

// TODO: theme change
// TODO: eslint, prettier 설정 추가
// TODO: component 분리
function App() {
    const queryClient = new QueryClient();
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
            <QueryClientProvider client={queryClient}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <BrowserRouter>
                        <Box position="absolute" right={15} top={15}>
                            <IconButton sx={{ml: 1}} onClick={colorMode.toggleColorMode} color="inherit">
                                {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                            </IconButton>
                        </Box>
                        <Routes>
                            <Route path="index.html" element={<Navigate replace to="/" />} />
                            <Route path="/" element={<Start />} />
                            <Route path="/start" element={<Start />} />
                            <Route path="/first-time" element={<AskFirstTime />} />
                            <Route path="/create-wallet" element={<CreateWallet />} />
                            <Route path="/bring-wallet" element={<BringWallet />} />
                        </Routes>
                    </BrowserRouter>
                </ThemeProvider>
            </QueryClientProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
