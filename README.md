# Fruity App 🍓🍌🍎

Fruity App is a React and TypeScript-based web application that displays a comprehensive list of fruits fetched from the [Fruityvice API](https://www.fruityvice.com/doc/index.html#api-GET). Users can view fruits grouped by various categories, toggle between different views, add fruits to a jar, and visualize their selection with a dynamic pie chart.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Screenshots](#screenshots)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Integration](#api-integration)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Demo


[Live Demo](https://66f56c7519b2c004b5333b4b--mellow-frangollo-d39e45.netlify.app/)

*To ensure smooth API requests, please visit the https://cors-anywhere.herokuapp.com/corsdemo proxy server and grant temporary access.*

## Features

- **Data Fetching:** Retrieves a list of fruits from the Fruityvice API.
- **Grouping:** Allows grouping fruits by **None**, **Family**, **Order**, or **Genus**.
- **Views:** Toggle between **Table** and **List** views for better data presentation.
- **Add to Jar:** Add individual fruits or entire groups to a jar.
- **Jar Overview:**
  - Displays a list of added fruits with quantities.
  - Calculates and shows the total calories.
  - Visualizes caloric distribution using a pie chart.
- **Responsive Design:** Optimized for various screen sizes and devices.
- **Error Handling:** Gracefully handles API errors and displays user-friendly messages.

## Screenshots

### Home Page

<img width="955" alt="Screenshot 2024-09-26 152440" src="https://github.com/user-attachments/assets/e42b480e-2db1-428c-9fa8-9b5f1b2bb6d6">

### Grouped by Genus

![Screenshot 2024-09-26 152729](https://github.com/user-attachments/assets/702d193e-18fd-41db-ab57-b05622654fdc)

### Fruits displayed in a table format with relevant details.

<img width="953" alt="1" src="https://github.com/user-attachments/assets/837ea66e-a949-474a-8465-a8b2f407eef6">


## Technologies Used

- **React:** Front-end library for building user interfaces.
- **TypeScript:** Adds static typing to JavaScript for better code quality.
- **Axios:** Promise-based HTTP client for making API requests.
- **Styled-Components:** For writing CSS-in-JS, enabling component-scoped styling.
- **Chart.js & React Chart.js 2:** For rendering dynamic and responsive pie charts.
- **Git & GitHub:** Version control and repository hosting.
- **Netlify/Vercel:** Deployment platforms for hosting the live application.

## Installation

Follow these steps to set up the Fruity App locally on your machine.


### Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/fruity-app.git
   cd fruity-app
   npm start
