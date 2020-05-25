// from data.js
var tableData = data;

// YOUR CODE HERE!
console.log(data);

//var tbody = d3.select("tbody");

// Function to display all the data from the "data.js" file
function FetchAllData(ufosightings){
    var tbody = d3.select("tbody");
    ufosightings.forEach((uforecord) => {
    var row = tbody.append("tr");
    Object.entries(uforecord).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.html(value);
   });
 });
};

// Initialize the data by calling the above function
FetchAllData(tableData);

function deleteData() {
    d3.select("tbody")
      .selectAll("tr").remove()
      .selectAll("td").remove();
  };

// Select the button
var filter_button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form")

// Create the event handlers
filter_button.on("click", runEnter);
form.on("submit", runEnter);

// Creating the function to execute on the event
function runEnter() {
    d3.event.preventDefault();
    //Delete previous data
    deleteData();
// Gathering the html nodes for user inputs
var dateInput = d3.select("#datetime");
var dateInputValue = dateInput.property("value");

if (dateInputValue.trim() ===""){
    var filteredData = tableData;
}
else{
    var filteredData = tableData.filter(ufosightings => ufosightings.datetime === dateInputValue.trim());
};

if (filteredData.lenght == 0){
    d3.select("tbody")
    .append("tr")
    .append("td")
      .attr("colspan", 7)
      .html("<h4>No Records Found</h4>");
};

FetchAllData(filteredData);
};

