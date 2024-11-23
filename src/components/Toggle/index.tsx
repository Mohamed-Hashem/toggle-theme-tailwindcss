import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const ToggleTheme = () => {
    const getInitialTheme = () => {
        try {
            const savedTheme = localStorage.getItem("theme");
            if (savedTheme) return savedTheme === "dark";

            return (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) || false;
        } catch {
            // Fallback in case localStorage is not available
            return false;
        }
    };

    const [theme, setTheme] = useState<boolean>(getInitialTheme);

    const handleThemeSwitcher = () => {
        const newTheme = !theme;
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme ? "dark" : "light");
        document.documentElement.classList.toggle("dark", newTheme);
    };

    useEffect(() => {
        const isDark = getInitialTheme();
        setTheme(isDark);
        document.documentElement.classList.toggle("dark", isDark);
    }, []);

    return (
        <div className="fixed right-2 top-1 flex items-center rounded-lg border-2 border-yellow-500 bg-slate-600 p-2 dark:border-red-500">
            <div className="relative mr-2 inline-block w-10 select-none align-middle transition duration-200 ease-in">
                <input
                    type="checkbox"
                    name="toggle"
                    id="toggle"
                    checked={theme}
                    value={theme ? "dark" : "light"}
                    onChange={handleThemeSwitcher}
                    className="toggle-checkbox absolute block h-6 w-6 cursor-pointer appearance-none rounded-full border-4 border-yellow-500 bg-white dark:border-4 dark:border-red-500 dark:bg-black"
                />
                <label
                    htmlFor="toggle"
                    className="toggle-label block h-6 cursor-pointer overflow-hidden rounded-full bg-slate-400"
                ></label>
            </div>
            <label htmlFor="toggle" className="flex items-center gap-2 text-xs text-white">
                {theme === false ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                Toggle me.
            </label>
        </div>
    );
};

export default ToggleTheme;
