import React from "react";

type Column = {
  key: string;
  value: string;
};

type Table = {
  columns: Column[];
};

const Table: React.FC = () => {
  const tab = [
    {
      key: "nome",
      value: "nome",
    },

    {
      key: "TOTAL",
      value: "TOAL PONTOS",
    },
  ];

  const participantes = [
    {
      nome: " wellington",
      pontos: "10",
    },
    {
      nome: " Anderso",
      pontos: "15",
    },
  ];

  const mocTab = (
    <table className="table-auto">
      <thead>
        <tr>
          <th>Song</th>
          <th>Artist</th>
          <th>Year</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
          <td>Malcolm Lockyer</td>
          <td>1961</td>
        </tr>
        <tr>
          <td>Witchy Woman</td>
          <td>The Eagles</td>
          <td>1972</td>
        </tr>
        <tr>
          <td>Shining Star</td>
          <td>Earth, Wind, and Fire</td>
          <td>1975</td>
        </tr>
      </tbody>
    </table>
  );

  return mocTab;
};

export default Table;
