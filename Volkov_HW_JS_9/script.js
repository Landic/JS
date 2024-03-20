function CustomMarker(paint, level) {
    this.paint = paint;
    this.level = level;
}

CustomMarker.prototype.draw = function(text) {
    let drawnText = "";
    for (let character of text) {
        if (character !== " ") {
            if (this.level >= 1) {
                drawnText += character;
                this.level -= 1;
            } else {
                alert("Краска закончилась!");
                break;
            }
        } else {
            drawnText += character;
        }
    }
    document.getElementById('drawingArea').innerText = drawnText;
};

function RefillableCustomMarker(paint, level) { 
    CustomMarker.call(this, paint, level); 
}

RefillableCustomMarker.prototype = Object.create(CustomMarker.prototype);
RefillableCustomMarker.prototype.refillPaint = function() { 
    this.level = 100; 
};

document.getElementById('drawButton').addEventListener('click', function() {
    const paintInput = document.getElementById('paintInput').value.trim();
    const paintRegex = /^#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})$|^([a-zA-Z]+)$/;
    if (paintRegex.test(paintInput)) {
        document.getElementById('paintBox').style.backgroundColor = paintInput;
        document.getElementById('drawingArea').style.color = paintInput;
    } else {
        alert('Цвет ведден не верно!');
    }

    const text = document.getElementById('textInput').value.trim();
    if (text !== "") {
        marker.draw(text);
    } else {
        alert("Текст не введен!");
    }
});

document.getElementById('checkLevelButton').addEventListener('click', function() {
    document.getElementById('drawingArea').innerText = `Уровень заправки маркера: ${marker.level}%`;
});

document.getElementById('refillButton').addEventListener('click', function() {
    marker.refillPaint();
    document.getElementById('drawingArea').innerText = 'Маркер заправлен';
});

document.getElementById('clearButton').addEventListener('click', function() {
    document.getElementById('drawingArea').innerText = '';
});

const marker = new RefillableCustomMarker('black', 100);
