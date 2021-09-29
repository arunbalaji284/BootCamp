
async function getData() {
    var namein = document.getElementById("myText").value;
    const response = await fetch("https://api.nationalize.io/?name="+ namein);
    data = await response.json();
    return data;
}

async function fetchdata() {
    try {
        let res = await getData();

       let table_ = document.createElement("TABLE")
       div.appendChild(table_)
       row1 = table_.insertRow();
       cell = row1.insertCell();
       cell.innerHTML = "Name";

       cell = row1.insertCell();
       cell2.innerHTML = "Countries"

       cell = row1.insertCell();
       cell.innerHTML = "Probabilities"

       row2 = table_.insertRow();
       cell = row2.insertCell();
        cell.innerHTML = res.name;

       cell = row2.insertCell();
        cell.innerHTML = res.country[0].country_id;

       cell = row2.insertCell();
       cell.innerHTML = res.country[0].probability;
       
       row3 = table_.insertRow();
       cell = row3.insertCell();
       cell = row3.insertCell();
       cell.innerHTML = res.country[1].country_id;

       cell= row3.insertCell();
       cell.innerHTML = res.country[1].probability;

    } catch (err) {
        console.error(err);
    }
}

let div = document.createElement("div")
document.body.appendChild(div);

let btn = document.createElement("BUTTON");
div.appendChild(btn);

btn.setAttribute("onclick","getCountry()");