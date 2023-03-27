const btn = document.querySelector("#clickMe")

function alertUser()
{
    alert("You Clicked!!!");
    // btn.removeEventListener("click", alertUser);
};

btn.addEventListener("click", alertUser, {once: true})

