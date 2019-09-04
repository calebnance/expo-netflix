# Netflix Clone with Expo

web demo: [Expo Netflix](https://expo-netflix.calebnance.now.sh)

<p align="center">
  <img src="screenshots/screenshare-6.png?raw=true" />
</p>

## Table of Contents

- [Install & Build](#install--build)
- [Stats](#stats)
- [Linting](#linting)
- [Expo Web](#expo-web)
- [Demo & Release Notes](#release-notes)

## Install & Build

Install: `yarn install`

Expo CLI: `npm install -g expo-cli` (if not already installed)

Run Project Locally: `expo start`

## Stats

- Expo SDK 34
- iOS, Android and PWA (Web App)
- React Navigation v3
- PropTypes

## Linting

- run: `yarn lint` for a list of linting warnings/error in cli
- prettier and airbnb config
- make sure you have [prettier package](https://atom.io/packages/prettier-atom) installed on your atom/vscode editor
- then make sure to enable these options (packages → prettier):
  - eslint integration
  - stylelint integration
  - automatic format on save (toggle format on save)
- be aware of the `.prettierignore` file

## Expo Web

Currently Expo Web support is **not production ready**, but if you want to see how this project looks on the web as a PWA (Progressive Web App)... using [react-native-web](https://github.com/necolas/react-native-web) and react-dom.

[PWA: Expo Netflix](https://expo-netflix.calebnance.now.sh) looks best on a mobile device, but not bad on desktop!

**Dev with Expo Web**
- Remove node_modules if they exist: `rm -rf nodes_modules`
- Install/Re-install: `yarn`
- Start development: `yarn web` or `expo start --web`
- Build PWA: `yarn web-build` or `expo build:web`

a couple manual changes within `index.html` i found needed to be made so far:
- **to make splash screen work:** "mobile-web-app-capable" => "apple-mobile-web-app-capable"
- **status bar transparent:** apple-mobile-web-app-status-bar-style="default" => "black-translucent"
- **no white background:** add background color within body{background-color: #121212; ...}
- **check output meta:** double image meta tags
- **check output js:** double/triple js packages

## Release Notes

### version 0.0.2 (current)

- Expo Web support
- upgraded to [Expo SDK 34](https://blog.expo.io/expo-sdk-34-is-now-available-4f7825239319)
- upgraded to [Expo SDK 33](https://blog.expo.io/expo-sdk-v33-0-0-is-now-available-52d1c99dfe4c)
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
