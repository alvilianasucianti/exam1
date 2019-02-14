var arrJenis = [1, 2, 3];

let fn0=()=>{
    let jenis =parseInt(document.getElementById("jenis").value); 
    let size =parseInt(document.getElementById("ukuran").value);

    
    if(jenis==1){
        let z='';
        for (let i=0; i<size; i++){
            for (let j=0; j<size ;j++){ 
                z += ' * '
        }
            z += '\n'
        }
    console.log(z)
    } 
    else if(jenis==2){
        let y = ''
        for (a = 1;a <= size ; a++){
            for (b=1; b<=a; b++){
                y += '*'
            }
            y += '\n'
        }
        console.log(y)
    }
    else if(jenis==3) {
        let x = ''
        for (c = 1; c <= size; c++){
            for (d=c; d <= size; d++){
                x += ' '
            }
            for (e=1; e<=c; e++){
                x += '*'
            }
            x += '\n'
        }
        console.log(x)
    }

}



