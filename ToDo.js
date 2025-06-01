let ul1 = document.getElementById("tasks");
let btn1 = document.getElementById("add");
let inp1 = document.getElementById("inp");

btn1.addEventListener("click", function() {
    let task = inp1.value;
    let p1 = document.createElement('p');
    p1.innerText = task

    let li1 = document.createElement('li');
    li1.append(p1);

    let btn2 = document.createElement('button');
    btn2.innerHTML = "X";
    btn2.classList = 'del';
    li1.append(btn2);

    ul1.append(li1);
    inp1.value = "";
});

ul1.addEventListener("click", function(event) {
    if (event.target.classList.contains('del')) {
        event.target.parentElement.remove();
    }
});

// Features to be added: ✌️
// 1. Data Management using Arrays and using load event for showing the list of tasks even after closing the website !
// 2. Importance - Urgency Tabled Tasks 