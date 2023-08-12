````markdown
# React DataTable Example

This is a simple example application that demonstrates how to use the `react-data-table-component` library to create a table with selectable rows. The app allows you to select rows in the table and navigate to different components to either cancel or create something based on the selected rows.

## Getting Started

1. Clone the repository:

   ```sh
   git clone https://github.com/prajulaaditya007/datatableproperties.git
   ```
````

2. Navigate to the project directory:

   ```sh
   cd datatableproperties
   ```

3. Install the dependencies:

   ```sh
   npm install
   ```

4. Start the development server:

   ```sh
   npm start
   ```

5. Open your browser and go to `http://localhost:3000` to see the app in action.

## Features

- Selectable rows using `react-data-table-component`.
- Navigation between different components using `react-router-dom`.
- Display selected rows in the `Cancel` and `Create` components.

## Components

- **Selection**: Displays a table with selectable rows. Provides "Cancel" and "Create" buttons to navigate to the respective components.
- **Cancel**: Displays the selected rows in a table. Simulates a "cancel" action based on the selected rows.
- **Create**: Displays the selected rows in a table. Simulates a "create" action based on the selected rows.

## Dependencies

- React
- react-data-table-component
- react-router-dom
