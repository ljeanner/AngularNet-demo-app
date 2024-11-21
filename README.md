# AngularNet Demo App

This project is a full stack application designed to demonstrate GitHub Copilot features such as documentation, refactoring, and more.

## Features Demonstrated
- Documentation
- Refactoring
- Code completion
- Code generation

Scenario for the Demo
Visual Studio
Setup GitHub Copilot Extension

Install the GitHub Copilot extension in Visual Studio.
Verify GitHub Copilot is functioning by signing in with your GitHub account.
Code Generation and Assistance

Generate code from a comment in an existing file. For example, use the comment // Create a function that returns forecast for a specific day.
GitHub Copilot Chat

Open GitHub Copilot Chat from a file or view.
Ask GitHub Copilot to generate a controller and associated model: Generate a controller that gets historical weather data and the model associated.
Documentation Generation

Use GitHub Copilot Chat to generate technical documentation for the controllers in the application.
Visual Studio Code
Explain Application Context

Use GitHub Copilot Chat to explain the context of the application.
Method Explanation

Right-click on a method and use GitHub Copilot Chat to explain it. For example, Can you provide an example of how to call the calcAvgTemp function with an array of temperatures?.
Code Refactoring

Ask GitHub Copilot Chat to improve the efficiency of a function or refactor it according to clean code principles.
Unit Test Generation

Generate unit tests for a function, such as calcAvgTemp.
Mock Data Generation

Generate mock data based on the model provided.
Additional Tasks
Explain File Purpose

Use GitHub Copilot to explain the purpose of a specific file.
Code Suggestions

Type in the IDE to show code suggestions provided by GitHub Copilot.
Function Creation

Create a function that returns a single weather forecast for a given date.
HTML and Regex Explanation

Use GitHub Copilot to explain an entire HTML file or a mysterious regex.
Clean Code and PR Reviews

Refactor a function to adhere to clean code principles, removing magic numbers and ensuring meaningful names.
Testing

Generate unit tests and mock data for testing purposes.

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/ljeanner/AngularNet-demo-app.git
   ```
2. Navigate to the project directory:
   ```
   cd AngularNet-demo-app
   ```
3. Install the dependencies for both the backend and frontend:
   ```
   cd backend
   dotnet restore
   cd ../frontend
   npm install
   ```

## Usage

1. Start the backend server:
   ```
   cd backend
   dotnet run
   ```
2. Start the frontend server:
   ```
   cd ../frontend
   ng serve
   ```
3. Open your browser and navigate to `http://localhost:4200` to see the application in action.

## Contributing

We welcome contributions! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

---

Feel free to review and refine the draft content before committing it to your repository.
