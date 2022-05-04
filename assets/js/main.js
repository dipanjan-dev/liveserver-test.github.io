var preloader = document.getElementById('preloader');
function body_preloader(){
    preloader.style.display = 'none'
}



function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
}

let copyrightYear = new Date().getFullYear();
console.log(copyrightYear)
document.getElementById("copyright_year").innerHTML = copyrightYear;

