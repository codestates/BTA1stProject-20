import {Navigate, Route, Routes} from "react-router-dom";
import {
    AllSet,
    AskFirstTime,
    BringWallet,
    CreateWallet,
    Error,
    SeedCheck,
    SeedReveal,
    Send,
    SendInput,
    Start,
    Wallet,
} from "./pages";

export default function _Routes() {
    return (
        <Routes>
            <Route path="index.html" element={<Navigate replace to="/" />} />
            <Route path="/">
                <Route index element={<Start />} />
                <Route path="all-set" element={<AllSet />} />
                <Route path="bring-wallet" element={<BringWallet />} />
                <Route path="create-wallet" element={<CreateWallet />} />
                <Route path="first-time" element={<AskFirstTime />} />
                <Route path="seed-check" element={<SeedCheck />} />
                <Route path="seed-reveal" element={<SeedReveal />} />
                <Route path="send">
                    <Route index element={<Send />} />
                    <Route path=":ticker" element={<SendInput />} />
                </Route>
                <Route path="start" element={<Start />} />
                <Route path="wallet" element={<Wallet />} />
                <Route path="error" element={<Error />} />
            </Route>


        </Routes>
    );
    // return (
    //     <Routes>
    //         <Route path="index.html" element={<Navigate replace to="/" />} />
    //         <Route path="/" element={<Start />} />
    //         <Route path="/all-set" element={<AllSet />} />
    //         <Route path="/bring-wallet" element={<BringWallet />} />
    //         <Route path="/create-wallet" element={<CreateWallet />} />
    //         <Route path="/first-time" element={<AskFirstTime />} />
    //         <Route path="/seed-check" element={<SeedCheck />} />
    //         <Route path="/seed-reveal" element={<SeedReveal />} />
    //         <Route path="/send" element={<Send />}>
    //             <Route path="/send/id" element={<SendInput />} />
    //         </Route>
    //         <Route path="/start" element={<Start />} />
    //         <Route path="/wallet" element={<Wallet />} />
    //         <Route path="/error" element={<Error />} />
    //     </Routes>
    // );
}
