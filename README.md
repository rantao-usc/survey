# Survey Web Application

This project revolves around the development of a web-based survey application with robust functionalities. The app facilitates questionnaire generation, response collection, data storage, and result visualization.

## Features:

1. **Question Storage**: The application stores a pool of 36 questions in MongoDB, ensuring efficient retrieval and scalability. ![Question Storage](https://user-images.githubusercontent.com/78400414/162368181-af98bdc3-e512-4bbb-9a35-c426d3ab8d6e.png)

2. **Dynamic Questionnaire Generation**: It randomly selects 10 questions from the database and presents them on the frontend for the user. ![Random Question Display](https://user-images.githubusercontent.com/78400414/162368393-e0209151-ef0d-409c-be4c-25d72563b836.png)

3. **Response Tracking and Validation**: The application visually tracks completed questions by highlighting their titles in green. Unanswered questions are marked in red if a user tries to complete the survey prematurely, ensuring all questions are answered before submission. ![Question Completion Tracking](https://user-images.githubusercontent.com/78400414/162368472-0b7fd59f-7560-4a9f-b2b3-2d5311efd3e5.png)

4. **Data Storage and Download**: Upon survey completion, results along with the time taken are stored in MongoDB. Users can download all stored results as a CSV file, enabling easy data analysis. ![Results and Time Logging](https://user-images.githubusercontent.com/78400414/162368504-9f800f8a-f9e6-4fa6-853f-704e8a6fd75e.png)

5. **Results in MongoDB**: All user responses along with the completion time are stored in MongoDB for persistent storage and further analysis. ![Results in MongoDB](https://user-images.githubusercontent.com/78400414/162368522-f4749ec7-a7a5-4536-993c-d4cfbb6c398c.png)

6. **Downloadable CSV File**: Results stored in MongoDB can be downloaded as a CSV file, allowing users to analyze data using their preferred tools. ![Downloadable CSV File](https://user-images.githubusercontent.com/78400414/162368540-46649e36-8243-4676-b3fa-1d5ab07b53ae.png)

## Technologies Used:

- MongoDB
- JavaScript
- HTML/CSS
- Node.js

## Usage:

Please follow the instructions in the [code](https://github.com/your-repo-link) to run the web application locally.

## License:

The project is open-source under the [MIT license](LICENSE).

## Contact:

Feel free to contact me for any queries or suggestions related to this project.
