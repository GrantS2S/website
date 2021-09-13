---
title: "Field Map Transform Error"
issue: "Magento 1.x: Field Map Transform Error"
type: "solution"
seoTitle: "Magento 1.x: Field Map Transform Error"
seoDescription: "Related to attributes that contain special characters that have been added into the fields."
source: ""
channel: "magento_1"
fulfillment: ""
process: "products"
headless: true
---

#### Error description
 Related to attributes that contain special characters that have been added into the fields.
 
This error has two sub messages:

- *Field map transform error: Unexpected control character found.*
- *Syntax error, malformed JSON*


#### Error solution
Special charters are used for computer programs and might break the program if used out of context. In general all Stock2Shop fields should only contain the letters from a-z, numbers 0-9 and basic punctuation. Avoid slashes and other characters.

- Investigate which field that could be causing the product to to break when trying to update it on Magento. This is could be in the General or Attributes tab
- If you not sure, cut and paste the field to notepad and then change the field text to a test value.  
- Retry queue error
- Repeat steps if failed


Remember if you are copying text from other sources you should always add it to a text editor, to remove any styles that may have been copied.


