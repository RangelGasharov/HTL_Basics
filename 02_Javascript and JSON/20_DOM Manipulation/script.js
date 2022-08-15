const body = document.body
body.append("Text appended to body")

const div1 = document.createElement("div")
div1.innerText = "Text appended to div"
div1.textContent = "Text appended to div"
body.append(div1)

const div2 = document.querySelector(".testdiv")
console.log("Text Content: " + div2.textContent)
console.log("Inner Text: " + div2.innerText)
spanHi = document.querySelector("#hi")
spanBye = document.querySelector("#bye")

spanBye.remove()
div2.append(spanBye)
div2.removeChild(spanHi)
div2.append(spanHi)

console.log(spanHi.getAttribute("id"))
console.log(spanHi.getAttribute("title"))
console.log(spanHi.title)

spanHi.setAttribute("id", "custom")
spanHi.removeAttribute("id")
spanHi.removeAttribute("title")

console.log(spanBye.dataset)
console.log(spanBye.dataset.test)
console.log(spanBye.dataset.longerName)

spanBye.dataset.newName = "hi"

spanHi.classList.remove("hi1")
spanHi.classList.add("new-class")
spanHi.classList.toggle("hi3")
spanHi.classList.toggle("hi4", false)

spanHi.style.color = "blue"
spanHi.style.backgroundColor = "black"

const div3 = document.createElement("div")
div3.innerHTML = "<strong> Inner HTML </strong>"
body.append(div3)

const strong = document.createElement("strong")
strong.innerText = "Strong Text"
body.append(strong)

