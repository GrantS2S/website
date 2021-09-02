---
title: "Set product GTIN (Global Trade Identification Number)"
name: "channelmeta_takealot"
key: "gtin_map"
description: "GTIN, Global Trade Identification number (EAN-13 or ISBN-13 barcode). To create offers you must have a GTIN."
user_friendly_description: "In order to create or update an offer against a catalogued product in Takealot it is a requirement that you have the product GTIN on record. We can sync the GTIN from your ERP / Accounting System to Takealot."
default: "{{variant.barcode}}"
values: []
tags: [channelmeta,takealot]
type: "meta"
process: "products"
headless: true
---