import "../styles.css";
import { Inter } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"] });

// Shim requestIdleCallback in Safari
if (typeof window !== "undefined" && !("requestIdleCallback" in window)) {
    window.requestIdleCallback = (fn) => setTimeout(fn, 1);
    window.cancelIdleCallback = (e) => clearTimeout(e);
}

export default function Nextra({ Component, pageProps }) {
    const getLayout = Component.getLayout || ((page) => page);

    return getLayout(
        <main className={inter.className}>
            <Component {...pageProps} />
        </main>
    );
}
