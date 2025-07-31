# Grid Preview Application

This is a web application designed to visualize CSS Grid layouts based on JSON configurations. It provides a dynamic and interactive way to preview how different `GridLayoutConfig` settings translate into a visual grid, making it an invaluable tool for designing and debugging grid-based UIs.

## Features

-   **Dynamic Grid Rendering:** Renders complex CSS Grid layouts directly from a user-provided JSON configuration.
-   **Visual Grid Cues:** Each widget on the grid displays its `colStart`, `rowStart`, `colSpan`, and `rowSpan` values, offering immediate visual feedback on its positioning and size.
-   **On-Demand JSON Input:** A toggleable, absolutely positioned input area allows users to paste and load custom JSON data without disrupting the main page layout.
-   **Responsive Design:** The grid and input area adapt gracefully to various screen sizes, ensuring a consistent experience across desktops, tablets, and mobile devices.
-   **Modular Codebase:** Built with React and Vite, the application follows good coding practices with a modular structure, including dedicated components and utility functions.
-   **Robust Error Handling:** Provides clear feedback for invalid JSON input.

## Live Demo

You can access the live deployed version of this application on GitHub Pages:
[https://satheesh66.github.io/grid_preview](https://satheesh66.github.io/grid_preview)

## Getting Started (Local Development)

To run this project locally on your machine, follow these steps:

### Prerequisites

Make sure you have the following installed:
-   [Node.js](https://nodejs.org/en/) (LTS version recommended)
-   [npm](https://www.npmjs.com/)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/satheesh66/grid_preview.git
    cd grid_preview
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```
    The application will typically be available at `http://localhost:5173`.

## Project Structure

-   `src/App.jsx`: The main application component, responsible for managing data and rendering the grid.
-   `src/components/`: Contains reusable React components like `Widget.jsx`.
-   `src/utils/`: Houses utility functions for styling (`styleUtils.js`) and grid calculations (`gridUtils.js`).
-   `src/data.json`: The default JSON configuration data used to render the initial grid layout.
-   `src/App.css`, `src/index.css`: Global and component-specific styles.

## Deployment

This application is configured for easy deployment to GitHub Pages. The `package.json` includes `predeploy` and `deploy` scripts:

-   `npm run build`: Builds the production-ready application into the `dist` directory.
-   `npm run deploy`: Uses `gh-pages` to push the `dist` directory content to the `gh-pages` branch of the repository, which GitHub Pages then serves.

## AI-Assisted Development

This project was developed with the significant assistance of an AI agent (Gemini). The development process was highly iterative, with the AI generating code, refactoring existing sections, debugging issues, and implementing features based on detailed prompts and continuous guidance provided by the user. This collaborative approach allowed for rapid prototyping and refinement of the application.

## License

This project is licensed under the MIT License.