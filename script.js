var nameOfSDtudent = 'adehfh';
var numbers = 43;
var addNumbers = function () {
    var one = parseFloat(document.getElementById('inp1').value);
    var two = parseFloat(document.getElementById('inp2').value);
    var operation_type = document.getElementById('operation_type').value;
    document.getElementById('output').innerHTML = '';
    // for (let i = 0; i < one; i++) {
    //     let tr = ''
    //     for (let j = 0; j < two; j++) {
    //         tr += `<td style="width: '100px'">${i*j}</td>`
    //     }
    //     document.getElementById('output').innerHTML += tr
    // }
    if (operation_type == 'add') {
        for (var i = 0; i < one; i++) {
            var tr = '';
            for (var j = 0; j < two; j++) {
                tr += "<td style=\"width: '100px'\">".concat(i + j, "</td>");
            }
            document.getElementById('output').innerHTML += tr;
        }
    }
    else if (operation_type == 'sub') {
        for (var i = 0; i < one; i++) {
            var tr = '';
            for (var j = 0; j < two; j++) {
                tr += "<td style=\"width: '100px'\">".concat(i - j, "</td>");
            }
            document.getElementById('output').innerHTML += tr;
        }
    }
    else if (operation_type == 'mul') {
        for (var i = 0; i < one; i++) {
            var tr = '';
            for (var j = 0; j < two; j++) {
                tr += "<td style=\"width: '100px'\">".concat(i * j, "</td>");
            }
            document.getElementById('output').innerHTML += tr;
        }
    }
    else if (operation_type == 'div') {
        for (var i = 0; i < one; i++) {
            var tr = '';
            for (var j = 0; j < two; j++) {
                tr += "<td style=\"width: '100px'\">".concat(i / j, "</td>");
            }
            document.getElementById('output').innerHTML += tr;
        }
    }
    // console.log(one, two);
};
var nameArray = [{ namee: 'dfff', class: 1 }, { namee: 'ehssh', class: 2 }, { namee: 'ms,ndj', class: 3 }, { namee: '.dkklkew', class: 4 }];
// nameArray.map((person)=>{
//     document.getElementById('nameDisplay').innerHTML += `<p>${person.namee}</p>`
// })
var peopleArray = [
    { name: 'Ade', number: '090' },
    { name: 'Kola', number: '070' }
];
var showPeople = function () {
    document.getElementById('nameDisplay').innerHTML = '';
    peopleArray.map(function (_a) {
        var name = _a.name, number = _a.number;
        document.getElementById('nameDisplay').innerHTML += "\n        <p>The user with name ".concat(name, " has number ").concat(number, "</p>\n        ");
    });
};
showPeople();
console.log(nameArray);
// nameArray.push('wertyu')
