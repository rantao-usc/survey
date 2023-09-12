Sure, here is a revised version of the README file:

# Web-Based Survey Application

This repository contains the code for a robust web-based survey application designed to streamline the process of questionnaire generation, response collection, data storage, and result visualization.

## Key Features:

1. **Question Repository**: Efficiently stores a collection of 36 questions in a MongoDB database, ensuring quick retrieval and scalability. 
![Question Storage](https://user-images.githubusercontent.com/78400414/162368181-af98bdc3-e512-4bbb-9a35-c426d3ab8d6e.png)

2. **Dynamic Questionnaire Assembly**: Randomly selects 10 questions from the repository and displays them on the frontend for user response. 
![Random Question Display](https://user-images.githubusercontent.com/78400414/162368393-e0209151-ef0d-409c-be4c-25d72563b836.png)

3. **Response Monitoring and Validation**: Visually tracks completed questions by highlighting their titles in green. Flags unanswered questions in red if a user attempts to submit the survey prematurely, ensuring all questions are addressed before submission. 
![Question Completion Tracking](https://user-images.githubusercontent.com/78400414/162368472-0b7fd59f-7560-4a9f-b2b3-2d5311efd3e5.png)

4. **Result Storage and Export**: Stores the survey results and completion time in MongoDB upon survey completion. Enables users to download all stored results as a CSV file for convenient data analysis. 
![Results and Time Logging](https://user-images.githubusercontent.com/78400414/162368504-9f800f8a-f9e6-4fa6-853f-704e8a6fd75e.png)

5. **Persistent Result Storage**: Safely stores all user responses and completion times in MongoDB for ongoing storage and subsequent analysis. 
![Results in MongoDB](https://user-images.githubusercontent.com/78400414/162368522-f4749ec7-a7a5-4536-993c-d4cfbb6c398c.png)

6. **Exportable CSV File**: Allows users to download stored results from MongoDB as a CSV file, facilitating data analysis with their preferred tools. 
![Downloadable CSV File](https://user-images.githubusercontent.com/78400414/162368540-46649e36-8243-4676-b3fa-1d5ab07b53ae.png)

## Technologies Utilized:

- MongoDB
- JavaScript
- HTML/CSS
- Node.js

## Instructions for Use:

To run the web application locally, please follow the instructions detailed in the [code repository](https://github.com/your-repo-link).

## Licensing:

This project is openly available under the [MIT license](LICENSE).

## Get in Touch:

For any questions, feedback, or suggestions related to this project, please feel free to reach out.


