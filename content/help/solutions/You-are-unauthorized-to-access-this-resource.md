---
title: "You are unauthorized to access this resource"
issue: "Parcelninja: You are unauthorized to access this resource"
type: "solution"
seoTitle: "Rejected Fulfillment from ParcelNinja"
seoDescription: "S2S attempted to create a fulfillment but was rejected by ParcelNinja."
source: ""
channel: ""
fulfillment: "parcel-ninja"
process: "fulfillments"
headless: true
---

#### Error description
S2S attempted to create a fulfillment but was rejected by Parcelninja.

#### Error solution
This error results from S2S being provided with the incorrect API keys to sync to ParcelNinja. Correct keys would need to be provided to S2S or created by: 

- In ParcelNinja Navigate to **User Management**
- Scroll down to **API Keys > Add Key**
- Set the description to **Stock2Shop**
- Select all the roles, except for (View Virtual / Update Virtual / Delete Virtual)
- Click **Add Key**
- Copy the API Username and Password and send to Stock2Shop
