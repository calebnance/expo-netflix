# Netflix: UI Clone with React Native / Expo

web demo: [Expo Netflix](https://expo-netflix.vercel.app)

[![follow @calebnance](https://img.shields.io/twitter/follow/calebnance.svg?style=for-the-badge&logo=TWITTER&logoColor=FFFFFF&labelColor=00aced&logoWidth=20&color=lightgray)](https://twitter.com/calebnance)

<p align="center">
  <img alt="netflix screens" src=".gh-assets/screenshare-6.png" />
</p>

## Table of Contents

- [Install & Build](#install--build)
- [Features](#features)
- [API Components/Packages Used](#api-componentspackages-used)
- [Linting](#linting)
- [Expo Web](#expo-web)
- [Demo & Release Notes](#release-notes)

## Install & Build

First, make sure you have Expo CLI installed: `npm install -g expo-cli`

**Install:**

```bash
yarn
```

**Run Project Locally:**

```bash
yarn dev
```

## Features

- Expo SDK 50
- iOS, Android and PWA (Progressive Web App)
- React Navigation v6
- PropTypes

## API Components/Packages Used

- React Native
  - `Animated`
  - `Alert` and `Switch`
  - `Image` and `ImageBackground`
  - `Keyboard` and `TextInput`
  - `TouchableOpacity` and `TouchableWithoutFeedback`
  - `Dimensions`, `Platform` and `StatusBar`
  - `ScrollView` and `FlatList`
  - `StyleSheet`, `Text`, and `View`
- Expo
  - `expo-asset`
  - `expo-font`
  - `expo-linear-gradient`
  - `AppLoading`
  - `ScreenOrientation`
- 3rd Party
  - `react-native-appearance`
  - `react-native-svg`
  - `react-native-webview`

## Linting

- run: `yarn lint` for a list of linting warnings/error in cli
- prettier and airbnb config
- make sure you have prettier package installed:
  - [prettier for atom](https://atom.io/packages/prettier-atom)
  - [prettier for vscode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
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

**version 0.0.2 (current)**

- upgraded to [Expo SDK 50](https://expo.dev/changelog/2024/01-18-sdk-50#%E2%9E%A1%EF%B8%8F-upgrading-your-app)
- upgraded to [Expo SDK 49](https://blog.expo.dev/expo-sdk-49-c6d398cdf740)
- upgraded to [Expo SDK 48](https://blog.expo.dev/expo-sdk-48-ccb8302e231)
- upgraded to [Expo SDK 47](https://blog.expo.dev/expo-sdk-47-a0f6f5c038af)
- upgraded to [Expo SDK 46](https://blog.expo.dev/expo-sdk-46-c2a1655f63f7)
- upgraded to [Expo SDK 45](https://blog.expo.dev/expo-sdk-45-f4e332954a68)
- upgraded to [Expo SDK 44](https://blog.expo.dev/expo-sdk-44-4c4b8306584a)
- upgraded to [Expo SDK 43](https://blog.expo.dev/expo-sdk-43-aa9b3c7d5541)
- upgraded to [React Navigation v6](https://reactnavigation.org/docs/getting-started)
- upgraded to [React Navigation v5](https://reactnavigation.org/docs/5.x/getting-started)
- upgraded to [Expo SDK 42](https://blog.expo.io/expo-sdk-42-579aee2348b6)
- upgraded to [Expo SDK 41](https://blog.expo.io/expo-sdk-41-12cc5232f2ef)
- upgraded to [Expo SDK 40](https://blog.expo.io/expo-sdk-40-is-now-available-d4d73e67da33)
- upgraded to [Expo SDK 39](https://blog.expo.io/expo-sdk-39-is-now-available-4c10aa825e3f)
- upgraded to [Expo SDK 38](https://blog.expo.io/expo-sdk-38-is-now-available-ab6cd30ca2ee)
- upgraded to [Expo SDK 37](https://blog.expo.io/expo-sdk-37-is-now-available-dd5770f066a6)
- upgraded to [React Navigation v4](https://reactnavigation.org/docs/4.x/getting-started)
- upgraded to [Expo SDK 36](https://blog.expo.io/expo-sdk-36-is-now-available-b91897b437fe)
- upgraded to [Expo SDK 35](https://blog.expo.io/expo-sdk-35-is-now-available-beee0dfafbf4)
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

**version 0.0.1**

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
  <img alt="screen grab of netflix clone" src=".gh-assets/expo-netflix-0.0.1.gif" width="320" />
</p>
