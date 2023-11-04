import "./App.css";
import { data, Character } from "../public/tma-data.ts";
import Card from "./components/card/card.tsx";
import Navbar from "./components/navbar/navbar.tsx";
import Table from "./components/table/table.tsx";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Table data={data} keys={["name", "skillset", "votes"]} />
      </div>
      <div className="container">
        {data.map((card: Character) => (
          <Card
            key={card.name}
            name={card.name}
            nickName={card.nickName!}
            background={card.background}
            imageUrl={card.imageUrl}
          />
        ))}
      </div>
    </>
  );
}

export default App;
