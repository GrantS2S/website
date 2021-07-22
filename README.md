# Website

Stock2Shop website and api documentation built with Hugo.

## Getting Started

- Install GoHugo
- Clone the project
- Navigate to project and run ```hugo -D server```
- View in your browser with http://localhost:1313/


## themes and content

The site uses two themes (s2s and [docuapi](https://github.com/bep/docuapi/)).
docuapi is used for documenting our api and has it's own config file `config-docuapi.toml`.
The publish and content directory is set to `/api`
To run the api docs use

```shell script
hugo -D --config=config-docuapi.toml server
```
Otherwise
```shell script
hugo -D server
```
s
## Front Matter Glossary

|Term|Description| 
|---|---|
|title|Page meta title for SEO|  
|heading|Page heading when different from title|  
|titleList|Displayed on list page|  
|linkTitle|Hardcoded menu item title|  
|description|Page Meta Description for SEO|  
|summary|Page summary displayed in the articles list page|  
|summary2|Additional summary parameter for different styling eg. bold|   
|lead|Lead paragraph|  
|lead2|Second lead paragraph|  
|toc|Show page table of content|  
|image|Image used from social media sharing and for list page|
|imageAlt|Alt tag assigned to image  
|date|Used for sorting with yyyy-mm-dd format|  
|weight|The default menu item and listing sort order|
|aliases|Old URL to redirect|
|author|Displayed underneath the title on some article pages|
|type|Layout type as per the theme|
|tags|Used for listing eg. footer|
|menu|Name assigned to specific menu|
|parent|Page name used in menu to nest under|
|name|Unique name for menu item when different to title|

## Connector Naming & Tagging Conventions
A list of all connectors and how they should be named and tagged on Hugo.

| Connector Type | Connector Name                 | Tag                            |
| -------------- | ------------------------------ | ------------------------------ |
| Source         | Dolfin                         | dolfin                         |
| Source         | Efinity                        | efinity                        |
| Source         | Flat File                      | flat-file                      |
| Source         | iQ Retail                      | iq-retail                      |
| Source         | iSync                          | isync                          |
| Source         | Microsoft Dynamics NAV         | microsoft-dynamics-nav         |
| Source         | Omni Accounts                  | omni-accounts                  |
| Source         | Sage 50cloud Pastel Partner    | sage-50cloud-pastel-partner    |
| Source         | Sage 50cloud Pastel Xpress     | sage-50cloud-pastel-xpress     |
| Source         | Sage 100 Evolution             | sage-100-evolution             |
| Source         | Sage 200 Evolution             | sage-200-evolution             |
| Source         | Sage 300cloud                  | sage-300cloud                  |
| Source         | Sage X3                        | sage-x3                        |
| Source         | Sage Business Cloud Financials | sage-business-cloud-financials |
| Source         | Sage Business Cloud Accounting | sage-business-cloud-accounting |
| Source         | SAP Business One               | sap-business-one               |
| Source         | Syspro                         | syspro                         |
| Source         | Custom Database                | custom-database                |
| Channel        | Magento 1.x                    | magento-1                      |
| Channel        | Magento 2.x                    | magento-2                      |
| Channel        | B2B Trade Store                | b2b-trade-store                |
| Channel        | Shopify                        | shopify                        |
| Channel        | Takealot                       | takealot                       |
| Channel        | Woocommere                     | woocommere                     |
| Fulfilment     | Parcelninja                    | parcelninja                    |
| Fulfilment     | On The Dot                     | on-the-dot                     |


## Help section (suggested structure)
Structure of the help section menu:

```
Menu
  |
  |- Getting Started
  |- Platforms
  |- How Stock2Shop Works
  |- Developer API Docs
```

#### Getting started
Add a generic getting started page for Stock2shop.
This should just be hard coded into the menu as the first item.
This page details the process of getting setup with Stock2Shop:

 - Signing up 
 - Costs 
 - Install
 - Handover
 - Training

#### Platforms
Loop through all Platforms and display on left menu. 
Note: need to confirm how best to do this. 
Naming conventions should not be a factor, as long as it is grouped under the platform.
There should however be at least the following 3 .md files for each platform:

- getting-started.md
- features.md
- solutions.md

```
Platform_1
  |
  |- platform_1-getting-started.md
  |- platform_1-features.md
  |- platform_1-example-order-payload.md
  |- platform_1-user-defined-fields.md
  |- platform_1-solutions.md
  |- any-other-page-relating-to-platform_1.md
  
Platform_2
  |
  |- platform_2-getting-started.md
  |- platform_2-features.md
  |- platform_2-example-order-payload.md
  |- platform_2-user-defined-fields.md
  |- platform_2-solutions.md
  |- any-other-page-relating-to-platform_2.md

  And so on for all platforms.
``` 
  
#### How Stock2Shop Works
How it works should remain as in it's current structure.
Broken up into all the important concepts of stock2shop.
Naming convention is not a factor as long as it is grouped into the correct "section".

```
How Stock2Shop works
  |
  |- Console
        |- console-notifications.md
        |- console-users.md
  |- Sources
          |- linked-source.md
          |- primary-source.md
  |- Channels
          |- channel-flags.md
          |- channel-rules.md
  |- Products
  |- Customers
  |- Ordering
  |- Fulfillments
  |- Queue
  |- Business Models
```

Tags have already been defined for this section:

| Section         | tag         |
| --------------- | ----------- |
| Console         | console     |
| Sources         | source      |
| Channels        | channel     |
| Products        | product     |
| Customers       | customer    |
| Ordering        | order       |
| Fulfilment      | fulfillment |
| Queue           | queue       |
| Business Models | model       |

  
#### Developer Docs
Link to the developer section of the website (tbc)