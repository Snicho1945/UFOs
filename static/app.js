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
}