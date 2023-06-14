# Mission 2-4  Recognizing Motor Vehicles and Data Analysis

This project focuses on two main prototypes: finding similar cars and utilizing Natural Language Processing (NLP) capabilities.

## Team Contributions
Teammate Jin contributed to the project by developing the NLP prototype (Project 2), demonstrating the capabilities of Azure LUIS in a practical scenario related to Turners' business.

As part of my role in the project, I focused on backend development and implemented an Agile practice known as Test-Driven Development (TDD). Specifically, I created RESTful APIs that are essential components of the insurance purchasing process.

# Description

**The first prototype**, 
Similar Cars Finder, is an application that leverages a cloud-based AI service on Microsoft Azure to recognize motor vehicles based on their type (e.g., sedan vs. hatchback), color, and make. This functionality enables users to quickly identify and compare vehicles based on their visual characteristics.

**The second prototype**, 
NLP Showcase, utilizes Azure Language Understanding Intelligent Service (LUIS) to showcase the potential of Natural Language Processing. The goal is to build a prototype that aligns with the business requirements of Turners, a prominent player in the automotive industry.

**API Details**
<ins>API 1: Car Value Calculation</ins>
One of my primary tasks was to develop an API that converts the "Model" and "Year" of a car into a suggested "Car Value" based on specific business rules. The calculation follows a formula where the car value is determined by summing the positions of the alphabets in the car's name (excluding spaces and other signs), multiplying it by a hundred, and adding the year value. If the input values are invalid, the API returns an error.
For example, if the car model is "Civic" and the year is 2014, the calculated car value would be (3 + 9 + 22 + 9 + 3) * 100 + 2014 = $6,614.

<ins>API 2: Risk Rating Calculation</ins>
In addition to the Car Value Calculation API, Jin developed an API that converts "Claim History" into a "Risk Rating." The exact details of this API and its implementation are part of Jin's contribution to the project.

**Development Practices**
Throughout the project,  adhered to best development practices to ensure quality and efficiency. Some of the notable practices include:
<ins>Test-Driven Development (TDD)</ins>: 
I followed an Agile approach to development, focusing on writing tests before implementing the code. This practice helped ensure robustness and reliability in the APIs I developed.
<ins>DevOps Pipeline</ins>: 
To streamline the development and deployment process, I built a DevOps pipeline using GitHub Actions. This pipeline automatically deploys the latest code changes to Microsoft Azure as soon as a new version is pushed to the GitHub repository. This allows for seamless integration and availability of the updated APIs in the cloud environment.
