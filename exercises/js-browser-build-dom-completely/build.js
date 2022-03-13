const data = [
    { name: 'Sarah', age: 22, height: 188, },
    { name: 'Lin', age: 42, height: 134, },
    { name: 'Samir', age: 21, height: 155, },
    { name: 'Wayne', age: 29, height: 162, },
    { name: 'Eckhart', age: 112, height: 144, },
];

const body = document.getElementById('body');

// create outer div
const div = document.createElement('div');
div.style.background = "#cccccc";

// create a tag
const link = document.createElement('a');
link.href = "https://google.com";
link.target = "_blank";

// create image tag
const image = document.createElement('img');
image.src = "https://i.ytimg.com/vi/yJiVZUKAS84/maxresdefault.jpg";
image.alt = "Me and my sibling";

// create horizontal line
const line = document.createElement('hr');

// create table
const table = document.createElement('table');

const createRow = (name, age, height, header) => {
    // create row
    const row = document.createElement('tr');

    // create columns
    let colType;
    if (header) {
        colType = 'th';
    } else {
        colType = 'td';
    }

    const column1 = document.createElement(colType);
    column1.innerText = name;

    const column2 = document.createElement(colType);
    column2.innerText = age;

    const column3 = document.createElement(colType);
    column3.innerText = height;

    row.append(column1, column2, column3);
    table.appendChild(row);
}

createRow('Name', 'Age', 'Height', true);
data.map(item => createRow(item['name'], item['age'], item['height'], false));

// assemble elements
link.appendChild(image);
div.appendChild(link);
div.appendChild(line);
div.appendChild(table);
body.appendChild(div);

