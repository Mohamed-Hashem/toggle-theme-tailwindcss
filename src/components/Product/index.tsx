const ProductCard = () => {
    return (
        <div className="mx-auto rounded-md border-2 border-red-500 p-2 text-white hover:bg-slate-950 dark:border-yellow-500 dark:hover:bg-sky-950">
            <div>
                <img
                    src="https://img.freepik.com/free-vector/cartoon-style-vehicle-illustration_52683-81722.jpg?semt=ais_hybrid"
                    alt="Car"
                    className="rounded-lg"
                />
            </div>
            <h3 className="my-3 text-lg">2022 Genesis GV 70 : KIA</h3>
            <p className="mb-3 text-sm">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, voluptates!
            </p>
            <div className="my-3 flex items-center space-x-2">
                <span className="h-5 w-5 cursor-pointer rounded-full bg-red-500 text-left" />
                <span className="h-5 w-5 cursor-pointer rounded-full bg-yellow-500 text-left" />
                <span className="h-5 w-5 cursor-pointer rounded-full bg-indigo-500 text-left" />
            </div>
            <div className="my-3 flex items-center justify-between">
                <span>$500,000</span>
                <img
                    src="https://img.freepik.com/free-vector/cartoon-style-vehicle-illustration_52683-81722.jpg?semt=ais_hybrid"
                    alt="Car"
                    className="h-8 w-8 rounded-full border-2 object-cover"
                />
            </div>
            <div className="flex items-center justify-between space-x-2">
                <button className="w-1/2 rounded bg-indigo-500 py-2">Edit</button>
                <button className="w-1/2 rounded bg-red-500 py-2">Destroy</button>
            </div>
        </div>
    );
};

export default ProductCard;
