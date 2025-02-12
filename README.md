# @ionic/react page duplication on Cypress bug

## Issue description

This repo aim to reproduce a bug occuring between `@ionic/react` and `Cypress` that does not remove old page from the DOM when navigating in the history. It only remove it during a history.back() if the ion-page has the ".can-go-back" class.
For this exemple I just used a tab navigation, but it act the same with a more classic navigation.

The main problem of this bug is the duplication of some elements that should not exist twice on the same page.

The issue does not happens outside of Cypress environment. If I run the `npm run dev` server, and opening the app on my browser (tested on Arc for macos and Safari), it behaves as expected

## Workaround

To avoid having to count which element my test is looking for, I just add a unique ID to each page, and do all my `cy.get()` precising the `ion-page` id

## Expected behavior

When navigating to a new page, the old ion-page should be removed from the DOM after animation ended (`ion-page-hidden` class on the `ion-page`) in Cypress environment
