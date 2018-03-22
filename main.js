let elements = document.getElementsByTagName('input');
console.log(elements);

function addEvent(element, type, handler){
    if(element.attachEvent){
        element.attachEvent('on' + type, handler);
    } else {
        element.addEventListener(type, handler);
    }
}

for(var i = 0; i < elements.length; i++) {
    addEvent(elements[i], 'change', () => console.log(elements[i].value));
}