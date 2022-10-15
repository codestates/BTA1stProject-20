import {Navigate, Route, Routes} from "react-router-dom";
import {AskFirstTime, BringWallet, CreateWallet, Error, Start} from "./pages";

export default function () {
    return (
        <Routes>
            <Route path="index.html" element={<Navigate replace to="/" />} />
            <Route path="/" element={<Start />} />
            <Route path="/start" element={<Start />} />
            <Route path="/first-time" element={<AskFirstTime />} />
            <Route path="/create-wallet" element={<CreateWallet />} />
            <Route path="/bring-wallet" element={<BringWallet />} />
            <Route path="/error" element={<Error />} />
        </Routes>
    );
}
