const btn = document.querySelector("#clickMe")

function alertUser()
{
    alert("You Clicked!!!");
    // btn.removeEventListener("click", alertUser);
};

function changeBackground()
{
   document.body.classList.add("pink_background")
}

function textChange()
{
    if (btn.textContent === "Click Me!!!")
    {
        btn.textContent = "Clicked!";
    }
    else {
        btn.textContent = "Click Me!!!";
    }
};

btn.addEventListener("click", alertUser)
btn.addEventListener("click", changeBackground)
btn.addEventListener("click", textChange)