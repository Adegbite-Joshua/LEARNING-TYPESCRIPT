var nameOfSDtudent = 'adehfh';
var numbers = 43;
var one = document.getElementById('inp1');
var two = document.getElementById('inp2');
var addNumbers = function () {
    document.getElementById('output').innerHTML = '';
    for (var i = 0; i < 122; i++) {
        var tr = '';
        for (var j = 0; j < 122; j++) {
            tr += "<td>".concat(i * j, "</td>");
        }
        document.getElementById('output').innerHTML += tr;
    }
};
var nameArray = [{ namee: 'dfff', class: 1 }, { namee: 'ehssh', class: 2 }, { namee: 'ms,ndj', class: 3 }, { namee: '.dkklkew', class: 4 }];
nameArray.map(function (person) {
    document.getElementById('nameDisplay').innerHTML += "<p>".concat(person.namee, "</p>");
});
nameArray.push('wertyu');
console.log(nameArray);
