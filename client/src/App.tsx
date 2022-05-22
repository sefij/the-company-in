import { useState } from "react";
import "./App.css";
import DomainsList from "./DomainsList";
import Search from "./Search";
import axios from "axios";
export interface DomainDetails {
  logo?: string;
  id: string;
  name: string;
  type?: string;
}

function App() {
  const [domains, setDomains] = useState([] as DomainDetails[]);
  const [domainText, setDomainText] = useState("");
  let currentText = domainText;

  const handleAddDom = async (domainText: string) => {
    if (domains.map((d) => d.name).includes(domainText)) return;
    try {
      console.log(domainText);
      const domainData = await axios.get(
        `http://localhost:8888/companies?domain=${domainText}`
      );
      if (domainData.data) {
        console.log(JSON.stringify(domainData.data));
        setDomainText(domainText);
        const { logo, id, name, type } = domainData.data;
        setDomains([...domains, { logo, id, name, type }]);
      }
    } catch (err) {
      console.error(JSON.stringify(err));
    }
  };

  return (
    <div className="App">
      <Search addDom={handleAddDom} inputText={currentText}></Search>
      <DomainsList domains={domains}></DomainsList>
    </div>
  );
}

export default App;
