let nameOfSDtudent:string = 'adehfh'
let numbers:number = 43
const addNumbers = ():any =>{
    let one:any = parseFloat((<HTMLInputElement>document.getElementById('inp1')).value)
    let two:any = parseFloat((<HTMLInputElement>document.getElementById('inp2')).value)
    let operation_type = (<HTMLSelectElement>document.getElementById('operation_type')).value
    document.getElementById('output').innerHTML = ''
    // for (let i = 0; i < one; i++) {
    //     let tr = ''
    //     for (let j = 0; j < two; j++) {
    //         tr += `<td style="width: '100px'">${i*j}</td>`
    //     }
    //     document.getElementById('output').innerHTML += tr
    // }
    if (operation_type=='add') {
        for (let i = 0; i < one; i++) {
            let tr = ''
            for (let j = 0; j < two; j++) {
                tr += `<td style="width: '100px'">${i+j}</td>`
            }
            document.getElementById('output').innerHTML += tr
        }
    } else if (operation_type=='sub') {
        for (let i = 0; i < one; i++) {
            let tr = ''
            for (let j = 0; j < two; j++) {
                tr += `<td style="width: '100px'">${i-j}</td>`
            }
            document.getElementById('output').innerHTML += tr
        }
    } else if (operation_type=='mul') {
        for (let i = 0; i < one; i++) {
            let tr = ''
            for (let j = 0; j < two; j++) {
                tr += `<td style="width: '100px'">${i*j}</td>`
            }
            document.getElementById('output').innerHTML += tr
        }
    } else if (operation_type=='div') {
        for (let i = 0; i < one; i++) {
            let tr = ''
            for (let j = 0; j < two; j++) {
                tr += `<td style="width: '100px'">${i/j}</td>`
            }
            document.getElementById('output').innerHTML += tr
        }
    }
    
    // console.log(one, two);
    
}
let nameArray:object[] = [{namee:'dfff', class:1},{namee:'ehssh', class:2},{namee:'ms,ndj', class:3},{namee:'.dkklkew', class:4} ]
// nameArray.map((person)=>{
//     document.getElementById('nameDisplay').innerHTML += `<p>${person.namee}</p>`
// })
console.log(nameArray);
// nameArray.push('wertyu')
