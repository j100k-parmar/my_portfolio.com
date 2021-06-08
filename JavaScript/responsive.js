let items = document.querySelectorAll('.btn_project');
let active = document.querySelectorAll('.Active');
let pictures = document.querySelectorAll('.gallary img');

items.forEach(button => {
    button.onclick = function() {
        items.forEach(button => {
            button.className = "";
        })
        button.className = "Active";

        let value = button.textContent;
        pictures.forEach(img => {
            img.style.display = 'none';
            if (img.getAttribute('data-filter') == value.toLowerCase() || value == "All") {
                img.style.display = 'block';
                img.style.float = 'left';
            }
        })
    }
});

function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}
// function myFunction() {
//     var x = document.getElementById("menu");
//     if (x.style.display === "block") {
//         x.style.display = "none";
//         x.style.width = "60%";
//         x.style.overflow = "none";
//     } else {
//         x.style.display = "block";
//     }

// }



// function demo(x) {
//     x.classList.toggle("change");
//     document.querySelector("#menu").classList.toggle('out');
// }