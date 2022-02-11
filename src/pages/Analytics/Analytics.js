import React from "react";
import "./styles.css";
import "../../App.css";
import { Link } from "react-router-dom";

import Header from "../../components/Header/Header";
import SideBar from "../../components/SideBar/sideBar";

import SegQTD from "./Reports/SegQTD";
import SegPercentageTickets from "./Reports/SegPercentageTickets";
import SegAvaliacao from "./Reports/SegAvaliacao";
import AgentQTD from "./Reports/AgentQTD";
import AgentMedia from "./Reports/AgentMedia";

function Analytics() {
  return (
    <>
      <SideBar />
      <div className="content">
        <Header title="Indicadores" />
        <div className="squares">
          <Link to="/advancedAnalytics" className="advanced-analytics">
            <button className="button-indicadores">
              Indicadores avançados
            </button>
          </Link>
          <div className="square-analytics">
            <h1 className="square-title">Quantidade de tickets por segmento</h1>
            <SegQTD />
          </div>
          <div className="square-analytics">
            <h1 className="square-title">Media anual de CSAT por segmento</h1>
            <SegAvaliacao />
          </div>
          <div className="square-segpercent">
            <h1 className="square-title">
              Percentual de abertura de tickets por data
            </h1>
            <SegPercentageTickets />
          </div>
          <div className="square-analytics-agQtd">
            <h1 className="square-title">
              Quantidade de tickets resolvidos por agente
            </h1>
            <AgentQTD />
          </div>
          <div className="square-analytics-agMedia">
            <h1 className="square-title">Media CSAT por agente</h1>
            <AgentMedia />
          </div>
        </div>
      </div>
    </>
  );
}

export default Analytics;
