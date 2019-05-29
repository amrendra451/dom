window.addEventListener("load", loadTableData);
document.getElementById("sort").addEventListener("click", sortTableData);
document.getElementById("start").addEventListener("click", startRandom);
document.getElementById("stop").addEventListener("click", stopRandom);

function loadTableData() {
    for(let i = 0; i < TABLE_DATA.length; i++) {
        let row = document.getElementsByTagName("tbody")[0].insertRow(0);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);

        cell1.innerHTML = TABLE_DATA[i].id;
        cell3.innerHTML = '<img src='+ TABLE_DATA[i].thumbnailUrl+' alt="Image"/>';
        cell2.innerHTML = TABLE_DATA[i].name;
        cell4.innerHTML = TABLE_DATA[i].price;
    }
}

function sortTableData() {
    removeRow();
    TABLE_DATA = TABLE_DATA.sort((a, b) => {
        if (a.price != b.price) {
            return a.price - b.price;
        } else {
            return b.id - a.id;
        }
    });
    loadTableData();
}

function removeRow() {
    let tbody = document.getElementsByTagName("tbody")[0];
    while(tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }
}

var TIMER = null;

function startRandom() {
    TIMER = setInterval(() => {
        removeRow();
        for (let i = TABLE_DATA.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
            [TABLE_DATA[i], TABLE_DATA[j]] = [TABLE_DATA[j], TABLE_DATA[i]]; // swap elements
        }
        loadTableData();
    }, 1000);
}

function stopRandom() {
    clearInterval(TIMER);
}

