import React from "react";
import { DomainDetails } from "./App";

export default function DomainsList(props: { domains: DomainDetails[] }) {
  if (props.domains?.length) {
    const domainItems = props.domains.map((d) => (
      <div key={d.id}>
        <div className="domain-row">
          <img src={d.logo} alt="logo" />
        </div>

        <div className="domain-row">Name: {d.name}</div>
        <div className="domain-row">Type: {d.type || "NA"}</div>
      </div>
    ));
    return <div>{domainItems}</div>;
  }
  return <div></div>;
}
