// Define a function to search the table entries
function searchTable() {
    // Get the search input value
    const searchInput = document.getElementById('searchInput').value.toUpperCase();

    // Get the table rows
    const table = document.getElementById('collectionTable');
    const rows = table.getElementsByTagName('tr');

    // Loop through all table rows, hide those that don't match the search query
    for (let i = 1; i < rows.length; i++) {
        const rowData = rows[i].getElementsByTagName('td');
        let found = false;
        for (let j = 0; j < rowData.length; j++) {
            if (rowData[j]) {
                const cellData = rowData[j].textContent.toUpperCase();
                if (cellData.indexOf(searchInput) > -1) {
                    found = true;
                    break;
                }
            }
        }
        if (found) {
            rows[i].style.display = '';
        } else {
            rows[i].style.display = 'none';
        }
    }
}

document.getElementById('milkForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const cowID = document.getElementById('cowID').value;
    const quantity = parseFloat(document.getElementById('quantity').value);
    const fatContent = parseFloat(document.getElementById('fatContent').value);
    const collectionDate = document.getElementById('collectionDate').value;
    const price = calculatePrice(quantity, fatContent); // Calculate price based on quantity and fat content

    // Insert data into the table
    const table = document.getElementById('collectionTable');
    const row = table.insertRow(-1);
    const cellCowID = row.insertCell(0);
    const cellQuantity = row.insertCell(1);
    const cellFatContent = row.insertCell(2);
    const cellCollectionDate = row.insertCell(3);
    const cellPrice = row.insertCell(4);

    cellCowID.textContent = cowID;
    cellQuantity.textContent = quantity;
    cellFatContent.textContent = fatContent;
    cellCollectionDate.textContent = collectionDate;
    cellPrice.textContent = '₹' + price.toFixed(2); // Display price with 2 decimal places
});

function calculatePrice(quantity, fatContent) {
    const basePricePerLiter = 25; // Base price per liter of milk
    const fatContentFactor = 0.5; // Price factor based on fat content

    // Calculate price based on quantity and fat content
    const price = (basePricePerLiter * quantity) + (fatContentFactor * fatContent);
    return price;
}
