import React, { useEffect, useState } from "react";
import { fetchFruits } from "./services/apiService";
import FruitList from "./components/FruitList";
import Jar from "./components/Jar";
import GroupBySelect from "./components/GroupBySelect";
import ViewToggle from "./components/ViewToggle";
import { FruitType } from "./types";
import "./styles.css";

const App: React.FC = () => {
  const [fruits, setFruits] = useState<FruitType[]>([]);
  const [groupBy, setGroupBy] = useState<string>("None");
  const [view, setView] = useState<"list" | "table">("list");
  const [jar, setJar] = useState<FruitType[]>([]);

  useEffect(() => {
    const getFruits = async () => {
      try {
        const data = await fetchFruits();
        setFruits(data);
      } catch (error) {
        console.error(error);
      }
    };
    getFruits();
  }, []);

  const addToJar = (fruit: FruitType) => {
    setJar([...jar, fruit]);
  };

  const addGroupToJar = (groupFruits: FruitType[]) => {
    setJar([...jar, ...groupFruits]);
  };

  return (
    <div className="app-container">
      <div className="left-section">
        <GroupBySelect groupBy={groupBy} setGroupBy={setGroupBy} />
        <ViewToggle view={view} setView={setView} />
        <FruitList
          fruits={fruits}
          groupBy={groupBy}
          view={view}
          addToJar={addToJar}
          addGroupToJar={addGroupToJar}
        />
      </div>
      <div className="right-section">
        <Jar jar={jar} />
      </div>
    </div>
  );
};

export default App;
