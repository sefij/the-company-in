import { Link } from "react-router-dom";
import "../style/index.css";
import { extendedCompanyDetails } from "../models/models";

export default function DomainsList(props: {
  companies: extendedCompanyDetails[];
}) {
  if (props.companies?.length) {
    const domainItems = props.companies.map((c) => (
      <div key={c.id}>
        <Link className="nav-link" to="/company" state={{ company: c }}>
          Go to company
        </Link>
        <div className="domain-row">
          <img src={c.logo} alt="logo" />
        </div>
        <div className="domain-row">
          <div className="domain-row">Name: {c.name}</div>
          <div className="domain-row">Type: {c.type || "NA"}</div>
        </div>
      </div>
    ));
    return <div className="flex-display">{domainItems}</div>;
  }
  return <div></div>;
}
