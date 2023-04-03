// const btn = document.querySelector("#clickMe")

// function alertUser()
// {
//     alert("You Clicked!!!");
//     // btn.removeEventListener("click", alertUser);
// };

// function changeBackground()
// {
//    document.body.classList.add("pinkBG")
// }

// function textChange()
// {
//     if (btn.textContent === "Click Me!!!")
//     {
//         btn.textContent = "Clicked!";
//     }
//     else {
//         btn.textContent = "Click Me!!!";
//     }
// };

// btn.addEventListener("click", alertUser)
// btn.addEventListener("click", changeBackground)
// btn.addEventListener("click", textChange)

// function updateImage(event)
// {
//     console.log(event);
//     const image = document.querySelector("#shoppingCart");
//     image.setAttribute("src", "image/263142.png");
//     image.setAttribute("alt", "shopping cart icon");
//     image.setAttribute("width", "50");
//     image.setAttribute("height", "50");
// }

// btn.addEventListener("click", updateImage);




// 1. find the element
const btnContainer = document.querySelector(".button-container");


// 2. define a function to respond to the event
function changeBGGreen(event)
{
    if (event.target.tagName === "BUTTON")
    {
        event.target.classList.add("greenBG")
    }
    else
    {
        event.target.classList.add("aquaBG")
    }
}

function changeTextColor(e)
{
    const clickedBtn = e.target
    const color = clickedBtn.textContent
    if (clickedBtn.tagName === "BUTTON") {
    clickedBtn.style.color = color
    }
}

// 3. use addEventListner
btnContainer.addEventListener("click", changeBGGreen)
btnContainer.addEventListener("click", changeTextColor)


btnContainer.classList.add("aquaBG");