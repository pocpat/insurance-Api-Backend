#  Convert "Model" and "Year" of a car to a suggested "Car Value"  (Mission 4)
This project aims to provide a reliable and accurate estimation of a car's value based on its "Model" and "Year" using RESTful APIs and employing a Test-Driven Development (TDD) approach with comprehensive unit tests. Then build a DevOps pipeline to deploy it automatically.

This project was developed as part of Full-Stack Development studies and serves as a study project for learning and applying various concepts and technologies.

# Features
* Car Value Estimation: Given the "Model" and "Year" of a car, the system suggests an estimated value.
* RESTful APIs: The project implements a set of well-designed APIs to enable seamless integration with other systems and applications.
* Test-Driven Development (TDD): The development process adheres to TDD principles, ensuring robustness and correctness through comprehensive unit tests.
* DevOps pipeline for the API:  using Github Actions on "git push" the app  automatically get deployed to Microsoft Azure

# Business Rules for Car Value Calculation
Car_value is calculated by adding up the positions of alphabets of the letters in the name, times a hundred, and add the year value.  Position of alphabet means the letter in the order of alphabets (e.g. A is the first letter, so it is 1.  Z is the last letter, so it is 26).  Space and any other signs are ignored.   For example, a "Civic" in year 2014 will be worth (3 + 9 + 22 + 9 + 3) * 100 + 2014 = $6,614.  If input values are not valid, return an error.

# Technologies Used
* Programming Language: TypeScript
* Frameworks/Libraries: Node.js, React, Express
* Testing Framework: Jest
* Tools: Supertest (for API testing)
* DevOps Pipeline and Deployment: CI/CD with  GitHub Actions and Cloud Run

# Installation and Usage

Clone the repository:  ``` git clone https://github.com/pocpat/insuranceApiBackend ```

cd <project_folder>

npm run build

npm install

npm run start

Since the task was backend only, there is no frontend involved. To access the car value calculation, make a POST request to the following endpoint:
http://localhost:4000/carValueRouter.
Use the following format for the request body:
```console
{
    "model": "BMW",
    "year": 2020
}
```
To retrieve the calculated result, make a GET request to the following endpoint: http://localhost:4000/carValueRouter.

