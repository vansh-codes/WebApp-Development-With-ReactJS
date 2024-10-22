import { useState } from "react";
export default function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div className="w-full shadow-lg flex flex-col justify-center items-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:text-white h-36">
            Counter: {count}
            <button
                className="px-4 py-2 m-2 text-white bg-blue-500 rounded-lg hover:bg-blue-700"
                onClick={() => setCount(count + 1)}
            >
                Increment
            </button>
            <button
                className="px-4 py-2 m-2 text-white bg-red-500 rounded-lg hover:bg-red-700"
                onClick={() => setCount(count - 1)}
            >
                Decrement
            </button>
        </div>
    );
}