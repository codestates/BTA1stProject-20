import {Navigate, Route, Routes} from "react-router-dom";
import {
    AskFirstTime,
    BringWallet,
    CreateWallet,
    Error,
    SeedCheck,
    SeedReveal,
    Start,
} from "./pages";

export default function () {
    return (
        <Routes>
            <Route path="index.html" element={<Navigate replace to="/" />} />
            <Route path="/" element={<Start />} />
            <Route path="/bring-wallet" element={<BringWallet />} />
            <Route path="/create-wallet" element={<CreateWallet />} />
            <Route path="/first-time" element={<AskFirstTime />} />
            <Route path="/seed-check" element={<SeedCheck />} />
            <Route path="/seed-reveal" element={<SeedReveal />} />
            <Route path="/start" element={<Start />} />
            <Route path="/error" element={<Error />} />
        </Routes>
    );
}
