import React from "react";
import "./BalanceBox.css";

export const BalanceBox = () => {
  return (
    <div className="balanceCard">
      <box className="mainInformation">
        <text>Balance del mes</text>
        <h3 class="mx-auto py-2">$1230.15</h3>
      </box>

      <box className="control">
        <box class="d-flex flex-column align-items-center justify-content-center">
          <text id="transactionTitle">Ingresos</text>
          <h4>+$3478.32</h4>
        </box>
        <span class="border-end" />
        <box class="d-flex flex-column align-items-center">
          <text id="transactionTitle">Gastos</text>
          <h4>-$1452.50</h4>
        </box>
      </box>
    </div>
  );
};
