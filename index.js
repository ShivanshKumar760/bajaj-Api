// Importing required modules
const express = require("express");

const app = express();

// Using body parsers to parse json data

app.use(express.json());

function checkString(string) {
  return /^[0-9]*$/.test(string);
}

app.get("/", (req, res) => {
    res.send("This is base route for the all api's")
});

// Declaring post method on bhfl route

app.post("/bhfl", (req, res) => {
  //    Declaring try catch block to handle error cases
  try {
    // Handling the cases if no data is being provided in json format
    if(!req.body.data){
        return res.status(404).json({
            "is_success":false,
             "user_id" : "Rishi_Dhingra_18072002",
             "roll_number": "RA2011026030097",
             "email" : "rd8744@srmist.edu.in",
        })
    }

    // Handling the cases when proper data is provided
    const data = req.body.data
    const numbers = []
    const alphabets= []
    let highest_alphabet=''
    let ans=[];
    for(let i=0;i<data.length;i++){
       
      // Check if string is numeric
      console.log(data[i],checkString(data[i]))
      if(checkString(data[i])){
          numbers.push(data[i]);
      }else{
          alphabets.push(data[i]);
  
          // Handling logic for finding highest alphabet
          const lowercase_string= data[i].toLowerCase()
          const char = lowercase_string[0];

            if (highest_alphabet === null || char > highest_alphabet) {
              highest_alphabet = char
              ans = [data[i][0]]
        }
        
      }
    }
    res.status(200).json({
      "is_success":true,
      "user_id" : "Rishi_Dhingra_18072002",
      "email" : "rd8744@srmist.edu.in",
      "roll_number": "RA2011026030097",
      "numbers" : numbers,
      "alphabets" : alphabets,
      "highest_alphabet": ans
    })


    // Storing data in new arrays and highest alphabet
     
    
  } catch (error) {
    console.log(error);
    return res.status(404).json({
            "is_success":false,
             "user_id" : "Rishi_Dhingra_18072002",
             "roll_number": "RA2011026030097",
             "email" : "rd8744@srmist.edu.in",
             "message" : "Some Error Occured"
    })
  }
});

// Declaring get method on bhfl route

app.get("/bhfl", (req, res) => {
  // Returning status code of 200 along with the operation code

  return res.status(200).json({
    operation_code: 1,
  });
});

app.listen(3000, () => {
  console.log("Listening on Port: 3000");
});
