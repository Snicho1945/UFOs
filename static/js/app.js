// import data from data.js
const tableData = data;

// reference the HTML table using d3
var tbody = d3.select("tbody");

// build table data
function buildTable(data) {
    // clear existing data
    tbody.html("");

    // looping through each object in data
    // adding append a row and cells for each value
    data.forEach((dataRow) => {
        // append row to table
        let row = tbody.append("tr");
        // loop through each field in dataRow adding each value as cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });
    });
};

// Keep track of all filters
var filters = {};

// This function will replace your handleClick function
function updateFilters() {

  // Save the element, value, and id of the filter that was changed
    var savedelem = d3.select(this);
    var savedval = savedelem.property("value");
    var savedid = savedelem.attr('id');

  // If a filter value was entered then add that filterId and value
  // to the filters list. Otherwise, clear that filter from the filters object
    if (savedelem) {
        filters[savedid] = savedval;
    
    } else {
        delete filters[savedid];
    };
  // Call function to apply all filters and rebuild the table
  filterTable();
};

function filterTable() {

  // Set the filteredData to the tableData
    let filteredData = tableData;
  // Loop through all of the filters and keep any data that
  // matches the filter values
  Object.entries(filters).forEach(([key, value]) => {
    if (value) {
      filteredData = filteredData.filter(row => row[key] === value);
    };
  });
  // Finally, rebuild the table using the filtered Data
  buildTable(filteredData);
};

// Attach an event to listen for changes to each filter
// Hint: You'll need to select the event and what it is listening for within each set of parenthesis
d3.selectAll("input").on("change", updateFilters);

// Build the table when the page loads
buildTable(tableData);
