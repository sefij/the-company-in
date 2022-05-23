import { NavLink, useLocation } from "react-router-dom";
import { extendedCompanyDetails } from "../models/models";
import '../style/index.css'

export default function Company() {
  const location: { state: { company: extendedCompanyDetails } } =
    useLocation() as any;
  const company = location.state.company;
  return (
    <div className="twty-px-margin">
      <NavLink className="nav-link" to="/">
        Go back home
      </NavLink>
      <div>
        <div className="domain-row">
          <img src={company.logo} alt="logo" />
        </div>
        <div className="domain-row">
          <div className="domain-row">Name: {company.name}</div>
          {company.type && (
            <div className="domain-row">Type: {company.type}</div>
          )}
          {company.annualRevenue && (
            <div className="domain-row">
              AnnualRevenue: {company.annualRevenue.toLocaleString()}
            </div>
          )}
          {company.description && (
            <div className="domain-row">Description: {company.description}</div>
          )}
          {company.domain && (
            <div className="domain-row">Domain: {company.domain}</div>
          )}
          {company.industry && (
            <div className="domain-row">Industry: {company.industry}</div>
          )}
          {company.location && (
            <div className="domain-row">Location: {company.location}</div>
          )}
          {company.marketCap && (
            <div className="domain-row">Market cap: {company.marketCap.toLocaleString()}</div>
          )}
          {company.moneyRaised && (
            <div className="domain-row">
              Money raised: {company.moneyRaised.toLocaleString()}
            </div>
          )}
          {company.numOfEmployees && (
            <div className="domain-row">
              Number of employees: {company.numOfEmployees.toLocaleString()}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
