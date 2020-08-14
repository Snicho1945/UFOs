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

function handleClick() {
    // get datetime vaule from filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    // check if a date was entered and filter data using the date 
    if (date) {
        // apply 'filter' to the data only keeping rows that datetime values match
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // rebuild the table using the filtered data
    buildTable(filteredData);
};

// attach an event to "listen" for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// build the table when the page loads
buildTable(tableData);