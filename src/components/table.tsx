import React, { useState } from "react";
import { useTable } from "react-table";
import "./table.css";

export function Table({
  showAllRows = true,
  columns,
  data,
  handleShowAllRows,
}: {
  showAllRows?: boolean;
  columns: any;
  data: any;
  handleShowAllRows?: () => void;
}) {
  // Use the state and functions returned from useTable to build your UI

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  return (
    <div>
      <button onClick={handleShowAllRows}>See Detail coverage</button>
      <table {...getTableProps()} className="coverage-table">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className="coverage-table-body">
          {rows
            .filter((row, i) => {
              if (!showAllRows) {
                return i === 0;
              }
              return row;
            })
            .map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} className="coverage-table-body_row">
                  {row.cells.map((cell) => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        className="coverage-table-body_row-body"
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
