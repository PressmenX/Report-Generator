
function elementId(id) {
    return document.getElementById(id)
}

function saveData(key, data){
    localStorage.setItem(key, JSON.stringify(data))
}

function loadData(key){
    const result = localStorage.getItem(key)
    return result ? JSON.parse(result) : null
}

export {elementId, saveData, loadData}