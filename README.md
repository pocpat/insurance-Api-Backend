#  Convert "Model" and "Year" of a car to a suggested "Car Value"  (Mission 3)
This project aims to provide a reliable and accurate estimation of a car's value based on its "Model" and "Year" using RESTful APIs and employing a Test-Driven Development (TDD) approach with comprehensive unit tests.

This project was developed as part of Full-Stack Development studies and serves as a study project for learning and applying various concepts and technologies.

# Features
* Car Value Estimation: Given the "Model" and "Year" of a car, the system suggests an estimated value.
* RESTful APIs: The project implements a set of well-designed APIs to enable seamless integration with other systems and applications.
* Test-Driven Development (TDD): The development process adheres to TDD principles, ensuring robustness and correctness through comprehensive unit tests.

# Technologies Used
* Programming Language: TypeScript
* Frameworks/Libraries: Node.js, React, Express
* Testing Framework: Jest
* Tools: Supertest (for API testing)

# Installation and Usage

Clone the repository:  ```consolegit clone https://github.com/pocpat/insuranceApiBackend ```
cd <project_folder>
npm run build
npm install
npm run start
Since the task was backend only, there is no frontend involved. To access the car value calculation, make a POST request to the following endpoint: http://localhost:4000/carValueRouter.
Use the following format for the request body:
```console
{
    "model": "BMW",
    "year": 2020
}
```
To retrieve the calculated result, make a GET request to the following endpoint: http://localhost:4000/carValueRouter.

