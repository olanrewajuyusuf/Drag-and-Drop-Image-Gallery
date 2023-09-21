# Drag-and-Drop Image Gallery

A fully functional and responsive image gallery with drag-and-drop functionality.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Requirements](#requirements)
- [Getting Started](#getting-started)
  - [Authentication](#authentication)
  - [Image Display](#image-display)
  - [Loading State](#loading-state)
  - [Search Functionality](#search-functionality)
  - [Drag-and-Drop](#drag-and-drop)
- [Styling and User Experience](#styling-and-user-experience)
- [Known Issues](#known-issues)
- [Contributing](#contributing)
- [License](#license)

## Overview

This application is a drag-and-drop image gallery that allows authenticated users to arrange and manage a collection of images. It provides a visually appealing way to showcase images with features such as authentication, responsive design, search functionality, and smooth drag-and-drop interactions.

## Features

- **Simple Authentication:** Users can log in using their email and password.
- **Image Display:** Images are displayed in a visually appealing grid layout with tags.
- **Loading State:** A loading state is displayed when images are not ready.
- **Search Functionality:** Users can search for images based on tags.
- **Drag-and-Drop:** Users can rearrange images within the gallery using drag-and-drop.
- **Styling and User Experience:** The application offers a user-friendly and visually appealing design.

## Requirements

Before running the application, make sure you have the following:

- Node.js and npm (or yarn) installed.
- Firebase or another authentication solution set up (with a user account for testing).

## Getting Started

Follow these steps to set up and run the application:

### Authentication

1. Configure Firebase for authentication using your Firebase project. Update the Firebase configuration in the `firebase/config.js` file.

2. Add user accounts to your Firebase project for testing. You can use the provided login credentials:
   - **Email:** user@example.com
   - **Password:** 1Password

### Image Display

1. Prepare a collection of images or pictures that you want to showcase in the gallery.

2. Define the image data in the `ImageDatas.js` file.

### Loading State

- The application will display a loading state when images are not ready. You can customize the loading indicator in the UI components.

### Search Functionality

- The search field filters images based on tags. Ensure that each image in the `ImageDatas.js` file has associated tags.

### Drag-and-Drop

- Implement drag-and-drop functionality using `Events` and `Draggable` element. Ensure that the `onDragStart`, `onDrop`, and `onDragOver` components are correctly used in your components.

## Styling and User Experience

Customize the styling and user experience of the application according to your preferences. You have the creative freedom to design a unique and visually appealing gallery.

## Known Issues

- Still trying to fix the drop zone.

## Contributing

Contributions to this project are welcome! If you have any suggestions, bug fixes, or improvements, please open an issue or submit a pull request.

---

Enjoy using the Drag-and-Drop Image Gallery! If you have any questions or need further assistance, please feel free to reach out.
