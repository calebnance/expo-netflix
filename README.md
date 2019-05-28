# Netflix Clone with Expo

<p align="center">
  <img src="screenshots/screenshare-6.png?raw=true" />
</p>

## Table of Contents

- [Install & Build](#install--build)
- [Stats](#stats)
- [Linting](#linting)
- [Demo & Release Notes](#release-notes)

## Install & Build

Install: `yarn install`

Expo CLI: `npm install -g expo-cli` (if not already installed)

Run Project Locally: `expo start`

## Stats

- Expo SDK 32
- React Navigation v3
- PropTypes

## Linting

- prettier and airbnb config
- make sure you have [prettier package](https://atom.io/packages/prettier-atom) installed on your atom/vscode editor
- then make sure to enable these options (packages → prettier):
  - eslint integration
  - stylelint integration
  - automatic format on save (toggle format on save)
- be aware of the `.prettierignore` file

## Release Notes

### version 0.0.2 (current)

- Home Top Navbar
  - show/hide on scroll
  - start of stack navigation in nav bar
  - TV Shows, Movies and My List screens
  - start of mock data and images for shows/movies
- More Stack
  - menu list (scrollable) created, with current version on screen
  - **app settings**
    - start of section headings
    - displays current phone model name (ios only, for now)
    - delete all downloads (mock alert)
    - storage bar styled: device storage space, netflix (downloaded) space used, and free space (all mock data)
  - **privacy** now opens a modal with WebView that opens [Help Netflix - Privacy page](https://help.netflix.com/legal/privacy?headless=true&locale=en-US)
  - **sign out** now opens an alert with selectable options
  - **manage profiles**
    - modal popup with edit overlay
    - modal add profile with for kids switch
- Modal Video player screen added
  - on open (mount), screen orientation changes to landscape
  - on close (unmount), screen orientation changes back to portrait

### version 0.0.1

- iOS and Android
- Tab Navigation
  - Home
    - simple banner (bandersnatch)
    - add to my list
    - simple wireframe with FlatList (horizontal scroll)
  - Search
    - simple animation onFocus and onBlur of search input
    - autofocus on first render
  - My Downloads
  - More
    - simple account profiles layout
- Chrome Cast modal screen

<p align="left">
  <img src="screenshots/expo-netflix-0.0.1.gif?raw=true" width="320" />
</p>
