# Expo Netflix

quick prototype of netflix's native app

---

- [Install & Build](#install--build)
- [Linting](#linting)
- [Release Notes](#release-notes)

---

#### Install & Build

Install: `yarn install`

Expo CLI: `npm install -g expo-cli` (if not already installed)

Run Project Locally: `expo start`

---

#### Linting

- prettier and airbnb config
- make sure you have [prettier package](https://atom.io/packages/prettier-atom) installed on your atom/vscode editor
- then make sure to enable these options (packages → prettier):
  - eslint integration
  - stylelint integration
  - automatic format on save (toggle format on save)
- be aware of the `.prettierignore` file

---

#### Release Notes

**version 0.0.2 (current)**

- home nav top bar
  - show/hide on scroll
  - start of stack navigation in nav bar
  - TV Shows, Movies and My List screens
- ScrollView no longer "[bounces](https://facebook.github.io/react-native/docs/scrollview#bounces)" at start and end of scrollable content

---

**version 0.0.1**

<p align="left">
  <img src="creative/releases/expo-netflix-0.0.1.gif?raw=true" width="320" />
</p>

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
