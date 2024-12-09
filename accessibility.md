Accessibility
=======

Used to make websites and apps content and its functionality available to everyone, including those with disabilities.

## Semantic html

are descriptive tags (the right element for the right purpose). Tags like nav, main, section, header, footer define different parts of a webpage and make HTML easier to navigate for assistive technology. When using wrapper divs it becomes harder for screen readers to find valuable information on the webpage. Semantic html also include: headings (in numeric order), form, list, table, button. Examples of React semantic tags are <Fragments> that allows to list groups of children without adding extra nodes in the Dom

## Examples of assistive technologies are:

screen readers, speech recognition software, screen magnifiers, alternative input devices

## Keyboard focus

is important because many users can’t navigate the web with a mouse, so all functionalities should be made available through the standard keyboard. Keyboard focus is important in a React app because screen readers are silent to page changes in a single page application. To add keyboard focus to an element, add ref to that element, tabIndex=0 to make sure this element is keyboard focusable and then call focus on that ref when needed

## Blur and focus events

can be useful to avoid broken navigation when accessing mouse and pointer events through keyboard only

## Basic keyboard navigation:

tab to navigate trough links and form, enter to select an element, arrows for other navigation

## Skip link

To avoid users having to tab through all the elements of the page we can add a skip link that lets users go to a specific section of the page and skip part of the page content. To connect them use `<a href=‘#id’>` and add the same id to the content to skip to.

## Tools to test accessibility:

Lighthouse, Accessibility tree in Chrome dev tools, screen readers (VoiceOver for Mac) , contrast checkers

## WCAG (web content accessibility guidelines)

have 3 levels : A(website is not accessible), AA (website is accessible), AAA(fully accessible)

## Remember to use:

alt attribute with img tags unless they are decorative images or have text next to it, in which case use alt=‘’ so screen readers know they will need to skip that image, use labels with inputs, good contrast

## Aria (Accessible rich internet applications)

is a set of roles and attributes to add to html elements to provide more context and information to assistive technology, used when creating UI components that don’t exist in html. Aria-controls and aria-live are used to make screen readers announce changes to a webpage without need for the user to navigate to the changed content. Values are: aria-live: ‘off’, aria-live:’polite’, aria-live: ‘assertive’ and are used for real time notifications or messages after submissions.
