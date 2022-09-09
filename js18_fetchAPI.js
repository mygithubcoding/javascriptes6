// Javascript Nuggets

// Fetch API - Browser API for HTTP (AJAX) requests
// Default - GET Requests , support other methods as well
// Returns Promise

const url = 'https://www.course-api.com/react-tours-project';

// promise approach
fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

const getData = async () => {
  try {
    const response = await fetch(url);
    console.log(response);
    const data = await response.json();
    console.log(data);
    //return data - data can be returned
  } catch (error) {
    console.log(error);
  }
};

// async-await approach
console.log('async/await approach');
getData();
