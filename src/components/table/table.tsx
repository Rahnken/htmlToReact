import React from "react";
import styles from "./table.module.css";
import { Character } from "../../../public/tma-data";

interface TableProps {
  data: Character[];
  keys: string[];
}

const Table: React.FC<TableProps> = ({ data, keys }) => {
  const topVoted = data.sort((a, b) => b.votes - a.votes).slice(0, 5);

  return (
    <>
      <h3> Top Characters as Voted</h3>
      <table className={styles.table}>
        <thead>
          <tr>
            {keys.map((key) => (
              <th key={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {topVoted.map((item, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? styles.dark : styles.light}
            >
              {keys.map((key) => (
                <td key={key}>{item[key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
