import { useState, useEffect, useCallback } from "react";

import "survey-react/modern.min.css";

import { Survey, StylesManager, Model } from "survey-react";

StylesManager.applyTheme("modern");


function App() {
  const [surveyJson, setSurveyJson] = useState([]);
  let surveyData;

  function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
  }

  // fetch survey from database
  const fetchSurvey = async () => {
    const res = await fetch('http://localhost:3001/survey');
    // get 10 random questions
    await res.json().then(data => surveyData={"elements": getRandom(data, 10)});
    setSurveyJson(surveyData);
  };

  // store results into mongoDB
  const submitSurvey = useCallback((sender) => {
    survey.stopTimer(); // stop counting time
    console.log(survey.timeSpent); // calculate spent time
    const data = sender.data;
    data["timespent"] = survey.timeSpent;
    console.log(data);
    fetch(
      'http://localhost:3001/results', {
          method: "post",
          body: JSON.stringify(data),
          headers: {
              'Content-Type': 'application/json'
          }
      });
  }, []);
  const fetchResults = useCallback(() => {
    fetch('http://localhost:3001/results')
      .then((response) => response.json())
      .then(data => download_csv_file(data));
  }, []);


  function download_csv_file(data) {  
    

    //define the heading for each row of the data  
    let csv = "_id,Q1,Q2,Q3,Q4,Q5,Q6,Q7,Q8,Q9,Q10,timespent\n";  

    // merge the data with CSV  
    data.forEach(row => {
        // console.log(row[0]);
        row = Object.values(row);
        for (let i = 0; i < 12; i++) {
          csv += row[i];
          csv += ",";
        }
        csv += "\n";  
    });  
    
    const blob = new Blob([csv], { type: 'text/csv'});
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('hidden', '');
    a.setAttribute('href', url);
    a.setAttribute('download', 'download.csv');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  } 

  useEffect(() => {
    fetchSurvey();
  }, []);

  const survey = new Model(surveyJson);
  survey.focusFirstQuestionAutomatic = false;

  

  // Start couting the time when the survey renders
  survey.onAfterRenderSurvey.add(() => {
    survey.startTimer();
  });
  
  // survey.onComplete.add(alertResults);
  survey.onComplete.add(submitSurvey);
  survey.onComplete.add(fetchResults);

  return <Survey model={survey} />;
}

export default App;