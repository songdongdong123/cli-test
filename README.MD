# cra-per-react-project
This is a scaffolding based on create-react-app. On this basis, the following capabilities have been implemented:

1. Providing a unified code standard configuration that automatically formats when saved;
2. Using craco to extend the webpack configuration to achieve local mock service configuration;
3. Creating code snippets for functional components;
4. Unified git commit standard.

### Environment Requirements
> node >= v16.20.1

## Installation

To install `cra-per-react-project`, run the following command:

```bash
npm install -g cra-per-react-project
```

This will install the package globally on your system, allowing you to use the cra-per-react-project command from anywhere.

## Creating a Project

To create a new project using `cra-per-react-project`, run the following command:
```bash
create-app create my-app --template ts
```
This will create a new React project named my-app using the TypeScript template.

## Running the Project
To run the project, navigate to the project directory and run the following command:

```bash
cd my-app && yarn start
```

This will start the development server and open the project in your default web browser.

Feel free to customize this README.md file with additional information about your package as needed.

## Creating functional components using code snippets.

Type in "FC" and press enter to create a simple functional component as follows:

```jsx
// demo.tsx
import React, { FC } from 'react';
const Demo: FC = props => {
  return <></>;
};
export default Demo;
  
```
