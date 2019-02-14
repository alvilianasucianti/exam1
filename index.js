let arrManusia = [
    {nama: 'Alex', umur: 22,kelamin:'Wanita', job: 'Dev'},
    {nama: 'Charlee', umur: 27,kelamin:'Pria', job: 'CTO'},
    {nama: 'Alicia', umur: 32,kelamin:'Wanita', job: 'Dev'},
    {nama: 'Batios', umur: 33,kelamin:'Pria', job: 'CEO'},
    {nama: 'Alona', umur: 26,kelamin:'Wanita', job: 'Dev'},
    {nama: 'Bakhti', umur: 38,kelamin:'Pria', job: 'PM'}
];
let arrJob = [
    'All' ,'Dev', 'CEO', 'PM', 'CTO'
];

let fn0 = () => {  //Show list table
    let listHuman =''
    for(let i=0;i<arrManusia.length;i++){
        listHuman += 
        `<tr>
            <td>${arrManusia[i].nama}</td>
            <td>${arrManusia[i].umur}</td>
            <td>${arrManusia[i].kelamin}</td>
            <td>${arrManusia[i].job}</td>
        </tr>`;
        
    }
    document.getElementById("here").innerHTML = listHuman

    
    var z = arrJob.map((val) =>
        `<option value="${val}">${val}</option>`
    );

    document.getElementById('job').innerHTML = z.join('');
    
}

// ADD DATA
let fn1 = () => {
    let nama = document.getElementById("nama").value;
    let umur = document.getElementById("umur").value;
    let job = document.getElementById("jobT").value;
    let kelamin = document.querySelector("input[name=iGender]:checked").value;
    
    let listHuman ='';

    arrManusia.push({nama,umur,kelamin,job})

    for(let i=0;i<arrManusia.length;i++){
        listHuman += 
        `<tr>
            <td>${arrManusia[i].nama}</td>
            <td>${arrManusia[i].umur}</td>
            <td>${arrManusia[i].kelamin}</td>
            <td>${arrManusia[i].job}</td>

        </tr>`;
    }
    document.getElementById("here").innerHTML = listHuman
    

    if (arrJob.includes(job) == false) {
        arrJob.push(job);
    }

    var z = arrJob.map((val) =>
        `<option value="${val}">${val}</option>`
    );
    
    
    document.getElementById('job').innerHTML = z.join('');
}

// FILTER NAME
var fn2 = () => {
    var filter, table, tr, td, i;

    filter = document.getElementById("search").value.toUpperCase();
    
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr"); //HTMLCollection [tr,tr, ..]
    
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        
        if (td) {
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }

}

// FILTER UMUR
var fn3 = () => {
    var table, tr, td, i, num1, num2;

    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    num1 = document.getElementById('num1').value; // 2
    num2 = document.getElementById('num2').value; // 2

    if (num1 == '' || num2 == '') {
        num1 = 0;
        num2 = 999;
    }

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            if (parseInt(td.innerHTML) >= num1 && parseInt(td.innerHTML) <= num2) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }

}

// FILTER JOB
var fn4 = () => {
    var table, tr, opt, i;

    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    let sel = document.getElementsByTagName('option'); //HTMLCollection[option, option, ...]
    for (let i = 0; i < sel.length; i++) {
        if(sel[i].value == 'All'){
            opt = 'All';
        } else if (sel[i].selected == true) {
            opt = sel[i].value;
        }

    }

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[3];//index kolom job
        if (td) {
            if (td.innerHTML == opt || opt == 'All') {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }

}

// FILTER GENDER
var fn5 = () => {
    var filter, table, tr, td, i;

    filter = document.querySelector("input[name=gender]:checked").value;
    console.log(filter)
    
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr"); //HTMLCollection [tr,tr, ..]
    
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[2];
        console.log(td)
        
        if (td) {
            if (td.innerHTML.indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }

}

//SORTIR DATA
let sort1 =()=>{
    arrManusia.sort(namaAsc);
    fn0()
    
}

let sort2 =()=>{
    arrManusia.sort(umurAsc);
    fn0()
    
}

let sort3 =()=>{
    arrManusia.sort(genderAsc);
    fn0()
    
}

let sort4 =()=>{
    arrManusia.sort(jobAsc);
    fn0()
    
}

function namaAsc(a,b){
    if(a.nama > b.nama){
        return 1;
    } else {
        return -1
    }
}
function umurAsc(a,b){
    if(a.umur > b.umur){
        return 1;
    } else {
        return -1
    }
}
function genderAsc(a,b){
    if(a.kelamin > b.kelamin){
        return 1;
    } else {
        return -1
    }
}
function jobAsc(a,b){
    if(a.job > b.job){
        return 1;
    } else {
        return -1
    }
}