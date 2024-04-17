# Story Card

> [!Important]
> This story card component has an image/video component, title and description, author.
> There is also a button that shows the dark side of the card.

## Installation and Creation of Story Card

1. `npm create vite@latest` for creating a new vite project
2. Setting up tailwindcss from [tailwind with vite](https://tailwindcss.com/docs/guides/vite)
3. **Heading** and **Footer** code is written in `App.jsx`
4. **cards-container** is created to hold all the cards in `App.jsx`
5. **Card Component** is created to hold img, title, paragraph and author in `Card.jsx`
6. A _Button_ is created to toggle the dark mode and change author of the card in `Card.jsx`
7. **data** array is created to have object holding all data related to cards in `assets/databank.js`
8. In `App.jsx` `data` array is mapped with `Card` component and `Card.jsx` is injected with props

## Creating Forms