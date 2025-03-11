# HeroUI Sandbox: Autocomplete and Select issues

Migrating from NextUI to HeroUI caused 2 problems:

1. Selecting an entry from `<Autocomplete/>` closes the enclosing `<Modal>`
2. We cannot view or select entries in a `<Select>` menu

This minimal project demonstrates both of these issues. Steps are:

- `npm install`
- `npm run dev`
- open the project in your browser and click on the "Open Modal" button
- observe: selecting a Flavor closes the modal
- observe: you cannot select anything under the Size menu

The above issues do not happen in NextUI 2.6.11.

