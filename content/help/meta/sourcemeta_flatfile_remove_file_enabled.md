---
title: "Remove Flat File from FTP server"
name: "sourcemeta_flatfile"
key: "remove_file_enabled"
description: "Removes the file when complete (only ftp)"
user_friendly_description: "you may have a scenario where a new file is dropped off every day in your FTP location. Once Stock2Shop has processed the Flat File we can remove it to ensure we don't try to process it again."
default: "true"
values: []
tags: [sourcemeta,flatfile,flat-file]
type: "meta"
process: "products"
headless: true
---