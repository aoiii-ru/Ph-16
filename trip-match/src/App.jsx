import { useState } from "react";
import TripForm from "./TripForm";
import RedecideButtons from "./RedeicideButtons";
import TripResult from "./TripResult";

const prefectures = {
  北海道: ["北海道"],

  東北: [
    "青森県",
    "岩手県",
    "宮城県",
    "秋田県",
    "山形県",
    "福島県",
  ],

  関東: [
    "茨城県",
    "栃木県",
    "群馬県",
    "埼玉県",
    "千葉県",
    "東京都",
    "神奈川県",
  ],

  中部: [
    "新潟県",
    "富山県",
    "石川県",
    "福井県",
    "山梨県",
    "長野県",
    "岐阜県",
    "静岡県",
    "愛知県",
  ],

  近畿: [
    "三重県",
    "滋賀県",
    "京都府",
    "大阪府",
    "兵庫県",
    "奈良県",
    "和歌山県",
  ],

  中国: [
    "鳥取県",
    "島根県",
    "岡山県",
    "広島県",
    "山口県",
  ],

  四国: [
    "徳島県",
    "香川県",
    "愛媛県",
    "高知県",
  ],

  九州・沖縄: [
    "福岡県",
    "佐賀県",
    "長崎県",
    "熊本県",
    "大分県",
    "宮崎県",
    "鹿児島県",
    "沖縄県",
  ],
};

const allPrefectures = Object.values(prefectures).flat();

function App() {
  const [name, setName] = useState("");
  const [area, setArea] = useState("全国");
  const [destination, setDestination] = useState("");
  const [days, setDays] = useState(null);
  const [nameError, setNameError] = useState(false);

  const decideTrip = () => {
  if (name.trim() === "") {
    setNameError(true);
    return;
  }

  setNameError(false);
  decideDestination();
  decideDays();
};


  const decideDestination = () => {
    const candidates =
      area === "全国" ? allPrefectures : prefectures[area];

    const randomIndex = Math.floor(Math.random() * candidates.length);

    setDestination(candidates[randomIndex]);
  };

  const decideDays = () => {
    const randomDays = Math.floor(Math.random() * 4) + 2;

    setDays(randomDays);
  };

  return (
    <div className="min-h-screen bg-orange-100 px-4 py-10">
      <div className="mx-auto max-w-lg shadow">

        <div className="mb-8 text-center">
          <p className="mb-2 text-4xl">✈️ 🧳 🌈</p>

          <h1 className="text-4xl font-black text-orange-500">
            TRIP MATCH
          </h1>

          <p className="mt-3 font-bold text-orange-800">
            次の旅行先、運命に決めてもらおう！
          </p>
        </div>

        <TripForm
          name={name}
          setName={setName}
          area={area}
          setArea={setArea}
          onDecide={decideTrip}
          hasResult={destination !== ""}
          nameError={nameError}
        />

        {destination && (
          <RedecideButtons
            onDestinationAgain={decideDestination}
            onDaysAgain={decideDays}
          />
        )}

        {destination && days && (
          <TripResult
            name={name}
            destination={destination}
            days={days}
          />
        )}
      </div>
    </div>
  );
}

export default App;
