# German sample PDF reference layout

This document records the requested visual direction for `/api/sample?lang=de`.

## Source reference

The German downloadable sample attestation should visually follow the uploaded two-page example:

- Page 1: Certif-Scope header, QR demo block, title area, fictitious result `15 tCO₂e`, fictitious reference `CS-SAMPLE-DE-2026-0001`, entity block, explanatory cards, status indicators, and a diagonal watermark.
- Page 2: methodology, reference frameworks, simple verification, verifiable object, technical appendix, explicit limits, responsibility wording, and final documentary validity summary.

## Required safeguards

The sample must never look like a real issued attestation:

- fictitious company
- fictitious reference
- fictitious dates
- fictitious technical appendix
- demo QR only
- visible watermark
- explicit wording that it is a free sample and not an issued attestation

## Runtime scope

The change is limited to the sample PDF endpoint. It must not modify:

- Stripe
- checkout
- paid attestation generation
- carbon calculation
- emission factors
- real verification
