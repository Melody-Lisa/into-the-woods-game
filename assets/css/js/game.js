/* I followed a walkthrough by web dev simplified for the basic structure for the game */
const textElement = document.getElementById('text')
const endElement = document.getElementById('ending')
const inventoryElement = document.getElementById('inventory-items')
const achievementElement = document.getElementById('achievements')
const optionButtonsElement = document.getElementById('option-buttons')

let inventory = {}
let endCollection = {}


/* Start's the game */
function startGame() {
    inventory = {}
    inventoryElement.innerHTML = ''
    showTextNode(1)
}

function getCumulativeHeight(element) {
    return element.scrollHeight;
}

/* Function for showing the text in the game container */
function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex);
    textElement.innerHTML = '';
    endElement.innerHTML = '';

    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild);
    }

    if (textNode.text) {
        textElement.innerHTML = textNode.text;

        const cumulativeHeight = getCumulativeHeight(textElement, endElement);
        optionButtonsElement.style.top = `max(${cumulativeHeight + 10}px, 10px)`;
    }

    /* Show ending text within the game container */
    if (textNode.end) {
        endElement.innerHTML = textNode.end;
    }

    /* Show inventory items within the side container */
    if (textNode.inventory) {
        inventoryElement.innerHTML += textNode.inventory;

    }

    /* Show achievements within the side container */
    if (textNode.achieved && !achievementElement.innerHTML.includes(textNode.achieved)) {
        achievementElement.innerHTML += textNode.achieved;
    }

    /* Show option buttons */
    textNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('btn')
            button.addEventListener('click', () => selectOption(option))
            optionButtonsElement.appendChild(button)
        }
    })
}

/* Function to show certain options based on the items you have in your inventory */
function showOption(option) {
    return option.requiredInventory == null || option.requiredInventory(inventory)
}

/* Function to select options */
function selectOption(option) {
    const nextTextNodeId = option.nextText
    if (nextTextNodeId <= 0) {
        return startGame()
    }
    state = Object.assign(inventory, option.setInventory)
    showTextNode(nextTextNodeId)
}

startGame()

/* Typing function just in case
/* Typing effect from medium.com - I asked chatgpt to convert into vanilla js
async function typeSentence(sentence, eleRef, delay = 50) {
    const letters = sentence.split("");
    let i = 0;
    while (i < letters.length) {
        await waitForMs(delay);
        eleRef.innerHTML += letters[i];
        i++;
    }
}

function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async */