function transformUppercase(_val){
    return _val.toUpperCase();
}

let elNamaPengguna = document.getElementbyId("namaPengguna")
elNamaPengguna.addEventListener("keyup", function(){
    elNamaPengguna.value = transformUppercase(elNamaPengguna.value)
})
