function updateProgressBars() {
    const circles = document.querySelectorAll('.progress-circle-fg');
    const texts = document.querySelectorAll('.progress-text');

    circles.forEach((circle, index) => {
        const radius = circle.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;
        const percent = parseInt(circle.getAttribute('data-progress'), 10);
        const offset = circumference - (percent / 100) * circumference;

        // Update circle and text
        circle.style.strokeDashoffset = offset;
        texts[index].textContent = `${percent}%`;

        // Change color based on percentage
        if (percent === 100) {
            circle.style.stroke = 'rgba(40, 217, 58, 1)'; // Preferred green color
            texts[index].style.fill = 'rgba(40, 217, 58, 1)'; // Same green color for text
        } else {
            circle.style.stroke = 'rgba(255, 54, 57, 1)'; // Default color
            texts[index].style.fill = 'rgba(255, 54, 57, 1)'; // Default color for text
        }
    });
}

// Call the function to update all progress bars
updateProgressBars();

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

