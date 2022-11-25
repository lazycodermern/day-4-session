//step 1:
var request = new XMLHttpRequest();

//step2:
request.open("GET", "https://restcountries.com/v3.1/all", true);

//step3:

request.send();

//step4:

request.onload = function () {
  var data = request.response;
  // console.log(data);

  //to parse the api data json format
  var result = JSON.parse(data);
  //for single values
  console.log(result[0].area);
  console.log(result[0].name.common);

  //for accessing multiple values
  //for loop
  for (var i = 0; i < result.length; i++) {
    console.log(result[i].area, result[i].name.common);
  }
  //for of loop ==>obj
  for (var obj of result) {
    console.log(obj.area, obj.name.common);
  }
  //for in loop ==>obj
  for (var index in result) {
    console.log(result[index].area);
  }
};
