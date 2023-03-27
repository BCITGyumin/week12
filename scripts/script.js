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

function updateImage()
{
    const image = document.querySelector("#shoppingCart");
    image.setAttribute("src", "image/263142.png");
    image.setAttribute("alt", "shopping cart icon");
    image.setAttribute("width", "50");
    image.setAttribute("height", "50");
}

btn.addEventListener("click", updateImage);