const mutationObserver = new MutationObserver(entries => {
    console.log(entries)
})

const parent = document.querySelector(".parent")

mutationObserver.observe(parent, { childList: true, attributes: true, attributeOldValue: true, attributeFilter: ["id"] })
mutationObserver.observe(parent.children[0].childNodes[0], { characterData: true, characterDataOldValue: true })
mutationObserver.observe(parent, {
    subtree: true,
    characterData: true,
    characterDataOldValue: true
})


parent.children[1].remove()
setTimeout(() => {
    parent.appendChild(document.createElement("div")).classList.add("child")
}, 100)

parent.id = "New Id"
