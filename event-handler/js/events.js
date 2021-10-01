function transformUppercase(_val){
    return _val.toUpperCase();
}

//DOM Event Listener
let elNamaPengguna = document.getElementById("namaPengguna")
elNamaPengguna.addEventListener("keyup", function(){
    elNamaPengguna.value = transformUppercase(elNamaPengguna.value)
})

function checkPassword(){
    let elkataLaluan = document.getElementById("kataLaluan")
    let pass_val = elkataLaluan.value

    if(pass_val.length>5){
        alert("Password check...ok!")
    }
    else{
        alert("Password too short!")
    }
}


//traditional DOM Event handler
let elKL = document.getElementById("kataLaluan")
elKL.onblur = checkPassword