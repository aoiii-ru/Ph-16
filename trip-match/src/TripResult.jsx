
function TripResult({
    name,
    destination,
    days,
}) {
    return (
        <div className="mt-8 rounded-3xl bg-white p-8 text-center shadow-xl">

            <p className="text-lg font-bold text-gray-500">🎉 旅行プラン決定！ 🎉</p>
            <p className="mt-5 text-xl font-bold text-gray-700">{name || "あなた"}さんが行く旅行は……</p>
            
            <div className="my-5 rounded-3xl bg-orange-50 px-5 py-7">
                <p className="text-4xl font-black text-orange-500">{destination}</p>
                <p className="mt-3 text-3xl font-black text-pink-500">{days - 1}泊{days}日</p>
            </div>

            <p className="font-bold text-gray-600">{destination}へ {days - 1}泊{days}日です！！ </p>
            <p className="mt-4 text-3xl">🧳 ✈️ 🗺️ 📸</p>

        </div>
    );
}

export default TripResult;
