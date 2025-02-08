# wingmen-builds

A tool designed for Wingmen to track builds and manage the items required for
each build.

Users can:

- Search for items and specify the quantity they need.

- Add items to their build list and track required materials.

- Automatically account for dependencies (items needed to craft another item).

Additionally, others can view public build lists and offer help by gathering
required items.

## Features

- Detailed item requirement tree showing dependencies for crafted items.

- Dynamic requirements (Clicking an item will display the items required to
  craft the desired quantity of the item).

- Track item gathering progress by updating how much items you have already
  gathered.

- Suggested sources for items (e.g., farms or locations).

## Roadmap

This section outlines planned milestones for the project:

### Core Features:

- Implement item tree functionality (dependency management).

- Add item sources (suggestions for obtaining items).

- Display public build lists.

### Enhancements:

- Allow users to suggest new item recipes.

- Allow users to suggest new item sources.

## Deployment

Since this is an early-stage project, the repository is currently under
development. Once the initial version is ready, this section will be updated
with instructions on how to:

### Run the dev server

```sh
npm run dev
```

### Deploy app for production

Build the app

```sh
npm run build
```

Run the app in production mode

```sh
npm start
```

## Authors

- [@luxargentum](https://www.github.com/luxargentum)
