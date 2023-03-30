import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Header, Theme } from "./components";
import { Home } from "./pages";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: Infinity,
            cacheTime: Infinity,
        },
    },
});

function App() {
    return (
        <div className="font-sans relative z-0 dark:bg-slate-800 dark:text-gray-400">
            <BrowserRouter>
                <QueryClientProvider client={queryClient}>
                    <Theme>
                        <Header />
                        <Routes>
                            <Route path="/" element={<Home />} />
                        </Routes>
                    </Theme>
                </QueryClientProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;
