
export interface extendedCompanyDetails {
  id: string
  logo?: string
  name?: string
  domain?: string
  description?: string
  industry?: string
  moneyRaised?: number
  marketCap?: number
  annualRevenue?: number
  location?: string
  numOfEmployees?: number
  type?: string
}

export interface companyDetailsResponse {
  id: string
  logo?: string
  name?: string
  domain?: string
  description?: string
  metrics?: companyMetrics
  category?: companyCategory
  location?: string
  type?: string
  error?: any
}

export interface companyMetrics {
  annualRevenue?: number
  employees?: number
  marketCap?: number
  raised?: number
}

export interface companyCategory {
  industry?: string
}