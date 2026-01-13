# Certif-Scope - Official README (English Version)

1. DESCRIPTION

Certif-Scope generates an indicative CO2e attestation based exclusively on a company’s annual financial spending (€). The methodology is spend-based, recognized only for GHG Protocol Scope 3 Category 1 (Purchased Goods and Services). Certif-Scope does not calculate: Scope 1, Scope 2, full Scope 3, physical emissions, CSRD/ESRS regulatory inventories, or environmental audits. The output is non-regulatory, indicative, and fully dependent on user-provided financial data.

2. PURPOSE AND SCOPE

Certif-Scope provides a standardized CO2e indicator that is deterministic, reproducible, cryptographically verifiable, and compliant with GDPR (no data storage). It is designed for indicative institutional use such as banking, insurance, public procurement, ESG pre-screening, accounting firms, and SMEs. It does not replace a regulatory carbon footprint or CSRD/ESRS disclosure.

3. METHODOLOGY

Official formula:
CO2e = Spending(€) × EmissionFactor(kgCO2e/€)

Emission factors:
- Sector-level macroeconomic EEIO factors
- Expressed in kgCO2e per euro spent
- Versioned MAJOR.MINOR.PATCH
- No combustion factors (no kWh, liters, km, tons)

Allowed inputs:
- Annual spending (€) distributed across predefined categories such as IT, transport, professional services, energy (invoice € only), travel, office supplies, marketing, subcontracting, waste (€)

Forbidden inputs:
- kWh
- liters
- km
- tons
- physical activity data
- direct fuel/energy usage
- Scope 1 and Scope 2 calculations
- full Scope 3 inventory

4. WORKFLOW

1. User selects the year of analysis
2. User enters spending amounts per category (€)
3. Certif-Scope applies sector emission factors
4. The system calculates total and category-level CO2e
5. An attestation is generated including:
- total estimated CO2e
- category breakdown
- spending inputs
- emission factor values
- dataset version
- cryptographic hash
- timestamp
- attestation ID
- mandatory legal disclaimer

5. ATTESTATION STRUCTURE (PDF/JSON)

Indicators:
- Total CO2e estimate
- CO2e per category
- Spending per category

Metadata:
- Dataset version
- Timestamp
- Unique attestation ID
- SHA-256 hash

Mandatory disclaimer:
This attestation provides an indicative CO2e estimate based solely on spend-based methodology. It is not a regulatory carbon report and must not be used for CSRD/ESRS disclosure. The user is fully responsible for the accuracy of financial data provided.

6. SECURITY AND VERIFICATION

Certif-Scope ensures:
- Digital signature or SHA-256 cryptographic hash
- Offline verification capability
- PDF/A stable format
- No user data stored
- No personal data collected
- No external transmission of inputs

7. COMPLIANCE

Certif-Scope aligns with:
- GHG Protocol (spend-based method for Scope 3 Category 1)
- ISO 14064-1 principles (transparency, consistency, reproducibility)
- GDPR (no data retention)

Certif-Scope is not:
- a CSRD/ESRS reporting tool
- a certified carbon footprint
- a physical emissions inventory
- a Scope 1/2 calculator

8. LIMITATIONS

- Indicative results only
- Based solely on financial spending
- Do not represent actual physical emissions
- Accuracy depends entirely on user input
- Not suitable for regulatory reporting
- Not an audit or certification of emissions

9. PRICING MODEL

- Fixed price per attestation
- No subscription
- No data storage
- Instant calculation

10. TARGET USERS

- SMEs
- Accounting firms
- Banks (ESG screening)
- Insurance companies
- Public institutions
- ESG consultants
- Due diligence workflows

CONCLUSION

Certif-Scope generates indicative CO2e attestations based exclusively on financial spending, without Scope 1/2, without physical data, and without regulatory applicability. The method is transparent, reproducible, secure, and aligned with GHG Protocol spend-based guidance for Scope 3 Category 1.
