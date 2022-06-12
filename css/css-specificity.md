# Types of StyleSheets:

- ### Author/Developer style sheets

      (styles that developer writes for the website)

- ### User style sheets

      (user personalized styles eg. styles applied by some extension for the user )

- ### User agent / Browser style sheets

      Default Styles that are enabled by browsers.e.g: default style for radio input, btn or link are different for different browsers.

## Order:

**Importance > Specificity > Source Order.**

# Preference of Importance:

`important` by user > `important` by author > Author (Specificity comes under this) > User Declarations > Browser Defaults

> Fun-Fact: Extensions like `dark-reader` use `!important` in its styles everywhere. because without that Normal Author Declarations will be given more priority over Normal User Declarations.

# Specificity

The method browsers use to calculate which property value should applied to the DOM/page.

The Order followed in specificity is:

inline styles > ID selectors(`#login`, `#payment`) > Class Selectors(`.home`, `.mx-md`) > Elements (`div`,`p`,`nav`)
