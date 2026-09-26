
function RedecideButtons({
    onDestinationAgain,
    onDaysAgain,
    }) {
        return (
        <div className="mt-3 grid grid-cols-2 gap-3">

            <button
                onClick={onDestinationAgain}
                className="rounded-2xl bg-pink-400 px-4 py-3 font-bold text-white transition hover:bg-pink-500"
            >
            旅行先を<br />決めなおす
            </button>

            <button
                onClick={onDaysAgain}
                className="rounded-2xl bg-purple-400 px-4 py-3 font-bold text-white transition hover:bg-purple-500"
            >
            日数を<br />決めなおす
            </button>
        </div>
    );
}

export default RedecideButtons;

