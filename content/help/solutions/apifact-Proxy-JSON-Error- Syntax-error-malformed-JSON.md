---
title: "Instruction: add_order. Message: apifact/Proxy JSON Error: Syntax error, malformed JSON"
issue: "Evolution: add_order: Syntax error, malformed JSON"
type: "solution"
seoTitle: "add_order: Syntax error, malformed JSON"
seoDescription: "Evolution is replying to our add_order instruction with an unknown / unexpected response."
source: "sage-200-evolution"
channel: ""
fulfillment: ""
process: "orders"
headless: true
---

#### Error description
Evolution is replying to our add_order instruction with an unknown / unexpected response. 

#### Error solution
Remote Access will  be required.

 - Check Apifact port is not shared with another application:
    - Login to clients server where our software is installed.
    - ```netstat -aon | find /i "1337" ``` ( Check what is listening on 1337)
    - Copy PID ( Far right xxxx)
    - ```tasklist /fi "pid eq xxxx ```( Check process name)

- Get developers help to check SDK response
 
