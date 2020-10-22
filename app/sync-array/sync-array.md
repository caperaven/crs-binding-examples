# Sync Arrays

## Introduction

This scenario shows off a slightly more advanced working on arrays.  
The first array represents available items.  
The second array represents selected items.  
If changes are made on either, apply those changes over both arrays.

## Selected Items

You can select items in the available items and add them to the selected.  
The available list acts as the master source though changes ade to items in the selected list, will reflect back to available.

## Actions

There are three actions here.

1. Create a sync group  - `createArraySync`
1. Add an array to sync group - `addArraySync`
1. Remove an array sync group - `removeArraySync`

See the array documentation for more details.

Buttons are enabled and disabled based on boolean state variables.  
Pretty standard stuff, nothing crazy going on here.

