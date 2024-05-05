console.log("Hello, World!");
const postData = {
  key1: "value1",
  key2: "value2",
};

// Create the request options
const requestOptions = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(postData),
};

// Make a POST request to the server
fetch("https://en00910il7ax8xp.x.pipedream.net/", requestOptions)
  .then((response) => {
    // Check if the response is successful (status code 200)
    if (response.ok) {
      // Parse the response JSON data
      return response.json();
    } else {
      // If the response is not successful, throw an error
      throw new Error("Failed to fetch data");
    }
  })
  .then((data) => {
    // Handle the response data here
    console.log(data);
  })
  .catch((error) => {
    // Handle any errors that occur during the fetch request
    console.error("Fetch error:", error);
  });
