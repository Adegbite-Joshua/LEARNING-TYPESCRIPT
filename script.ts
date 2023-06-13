let nameOfSDtudent:string = 'adehfh'
let numbers:number = 43
let one:any = document.getElementById('inp1')
let two:any = document.getElementById('inp2')
const addNumbers = ():any =>{
    document.getElementById('output').innerHTML = ''
    for (let i = 0; i < 122; i++) {
        let tr = ''
        for (let j = 0; j < 122; j++) {
            tr += `<td>${i*j}</td>`
        }
        document.getElementById('output').innerHTML += tr
    }
}
let nameArray:object[] = [{namee:'dfff', class:1},{namee:'ehssh', class:2},{namee:'ms,ndj', class:3},{namee:'.dkklkew', class:4} ]
nameArray.map((person)=>{
    document.getElementById('nameDisplay').innerHTML += `<p>${person.namee}</p>`
})
console.log(nameArray);
nameArray.push('wertyu')
