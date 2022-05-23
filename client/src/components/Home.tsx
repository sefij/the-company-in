import { useState } from "react";
import "../style/App.css";
import DomainsList from "./DomainsList";
import Search from "./Search";
import axios from "axios";
import {
  companyCategory,
  companyDetailsResponse,
  companyMetrics,
  extendedCompanyDetails,
} from "../models/models";

const requestUrlTemplate = "http://localhost:8888/companies?domain=";

function App() {
  const [companies, setCompanies] = useState([] as extendedCompanyDetails[]);
  const [domainText, setDomainText] = useState("");
  let currentText = domainText;

  const handleAddDom = async (domainText: string) => {
    if (companies.map((d) => d.domain).includes(domainText)) {
      console.log("Company already in cache, skipping");
      return;
    }
    try {
      const domainData = await axios.get(`${requestUrlTemplate}${domainText}`);
      const resData: companyDetailsResponse = domainData?.data;
      if (
        resData &&
        resData.id &&
        !resData.error &&
        !companies.find((d) => d.id === resData.id)
      ) {
        setDomainText(domainText);

        const {
          logo,
          id,
          name,
          type,
          domain,
          metrics,
          description,
          location,
          category,
        } = resData;

        const {
          annualRevenue,
          employees: numOfEmployees,
          marketCap,
          raised: moneyRaised,
        } = metrics as companyMetrics;

        const { industry } = category as companyCategory;

        setCompanies([
          ...companies,
          {
            logo,
            id,
            name,
            type,
            domain,
            annualRevenue,
            description,
            industry,
            location,
            marketCap,
            moneyRaised,
            numOfEmployees,
          },
        ]);
      }
    } catch (err) {
      console.error(JSON.stringify(err));
    }
  };

  return (
    <div className="App">
      <Search addDom={handleAddDom} inputText={currentText}></Search>
      <DomainsList companies={companies}></DomainsList>
    </div>
  );
}

export default App;
