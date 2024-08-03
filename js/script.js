document.querySelectorAll('.toolbar button').forEach(button => {
    button.addEventListener('click', () => {
        const command = button.getAttribute('data-command');
        document.execCommand(command, false, null);
        updateToolbar();
    });
});

function updateToolbar() {
    document.querySelectorAll('.toolbar button').forEach(button => {
        const command = button.getAttribute('data-command');
        const isActive = document.queryCommandState(command);
        button.classList.toggle('active', isActive);
    });
}

// Update toolbar state on page load and on typing
document.addEventListener('DOMContentLoaded', updateToolbar);
document.addEventListener('keyup', updateToolbar);

function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}
function myFunction2() {
    var x = document.getElementById("myInputReset");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}