import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const App = () => {
  const [columnDefs] = useState([
    { field: "make" },
    { field: "model" },
    { field: "price" },
  ]);

  const [rowData, setRowData] = useState([
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxster", price: 72000 },
  ]);

  const handleCellEditRequest = (params) => {
    const newValue =
      params.colDef.field === "price"
        ? parseFloat(params.newValue)
        : params.newValue;

    const newRowData = rowData.map((row, index) =>
      index === params.rowIndex
        ? { ...row, [params.colDef.field]: newValue }
        : row
    );

    setRowData(newRowData);
  };

  const handleKeyDown = (event) => {
    const gridApi = event.api;
    const key = event.event.key;
    const field = event.column.colId;
    const rowIndex = event.node.rowIndex;

    if (key === "ArrowDown") {
      gridApi.stopEditing();

      const nextRowIndex = Math.min(
        rowIndex + 1,
        gridApi.getDisplayedRowCount() - 1
      );
      gridApi.setFocusedCell(nextRowIndex, field);
    }
  };

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
      <AgGridReact
        readOnlyEdit={true}
        defaultColDef={{
          editable: true,
        }}
        columnDefs={columnDefs}
        rowData={rowData}
        enterMovesDown={true}
        enterMovesDownAfterEdit={true}
        onCellEditRequest={handleCellEditRequest}
        onCellKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default App;
