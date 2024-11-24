import React from "react";

const Table = ({ data }) => {
  return (
    <table className="table-auto w-full my-5">
      <thead>
        <tr>
          <th className="border px-4 py-2 bg-[#62D69C]">Crop name</th>
          <th className="border px-4 py-2 bg-[#62D69C]">Season</th>
          <th className="border px-4 py-2 bg-[#62D69C]">Crop area (Ha)</th>
          <th className="border px-4 py-2 bg-[#62D69C]">
            Avg. crop yield(Kg/ha)
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td className="border px-4 py-2">{item.name}</td>
            <td className="border px-4 py-2">{item.season}</td>
            <td className="border px-4 py-2">{item.area}</td>
            <td className="border px-4 py-2">{item.kgha}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
