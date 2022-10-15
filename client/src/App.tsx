import {useMemo, useState} from 'react';
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {ColorModeContext} from './contexts';
import {Route, BrowserRouter, Routes, Navigate} from "react-router-dom";
import {AskFirstTime, Start} from "./pages";

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

                    <Routes>
                        <Route path="index.html" element={<Navigate replace to="/" />} />
                        <Route path="/" element={<Start />} />
                        <Route path="/start" element={<Start />} />
                        <Route path="/first-time" element={<AskFirstTime />} />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
