function TripForm({
    name,
    setName,
    area,
    setArea,
    onDecide,
    hasResult,
    nameError,
}) {
    return (
    <div className="rounded-3xl bg-white p-7 shadow-xl">
        <div className="mb-6">
            <label className="mb-2 block font-bold text-gray-700">お名前</label>
            <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="名前を入力してください"
                className="w-full rounded-2xl border-2 border-orange-200 px-4 py-3 outline-none transition focus:border-orange-400"
            />

            {nameError && (
            <p className="mt-2 text-sm font-bold text-red-500">⚠️ 名前を入力してください</p>
)}
        </div>

        <div className="mb-7">
            <label className="mb-2 block font-bold text-gray-700">旅行する範囲</label>
            <select
                value={area}
                onChange={(event) => setArea(event.target.value)}
                className="w-full rounded-2xl border-2 border-orange-200 bg-white px-4 py-3 outline-none focus:border-orange-400"
            >
                <option value="全国">全国（日本）</option>
                <option value="北海道">北海道</option>
                <option value="東北">東北</option>
                <option value="関東">関東</option>
                <option value="中部">中部</option>
                <option value="近畿">近畿</option>
                <option value="中国">中国</option>
                <option value="四国">四国</option>
                <option value="九州・沖縄">九州・沖縄</option>
            </select>
        </div>

        <button
            onClick={onDecide}
            className="w-full rounded-2xl bg-orange-500 px-6 py-4 text-lg font-black text-white shadow-md transition hover:-translate-y-1 hover:bg-orange-600"
        >
            {hasResult
                ? "🔄 もう一度決めなおす！"
            : "🎲 旅行先を決める！"}
        </button>
    </div>
    );
}

export default TripForm;

