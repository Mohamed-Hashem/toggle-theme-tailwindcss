import ProductCard from "./components/Product";
import ToggleTheme from "./components/Toggle";

function App() {
    const renderProductList = Array(7)
        .fill(null)
        .map((_, index: number) => <ProductCard key={index} />);

    return (
        <>
            <ToggleTheme />
            <div className="my-2 grid gap-3 rounded-lg border-4 border-red-500 bg-sky-950 p-2 shadow-sky-950 dark:border-yellow-500 dark:bg-black sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                {renderProductList}
            </div>
        </>
    );
}

export default App;
