document.addEventListener('DOMContentLoaded', function() {
    const redInput = document.getElementById('red');
    const greenInput = document.getElementById('green');
    const blueInput = document.getElementById('blue');
    const redValue = document.getElementById('redValue');
    const greenValue = document.getElementById('greenValue');
    const blueValue = document.getElementById('blueValue');
    const colorDisplay = document.getElementById('colorDisplay');
    const hexCode = document.getElementById('hexCode');
    const colorPicker = document.getElementById('colorPicker');

    function updateColor() {
        const r = redInput.value;
        const g = greenInput.value;
        const b = blueInput.value;

        // Update the color display
        colorDisplay.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        
        // Convert RGB to Hex
        const hex = `#${((1 << 24) + (parseInt(r) << 16) + (parseInt(g) << 8) + parseInt(b)).toString(16).slice(1)}`;
        hexCode.textContent = hex;
    }

    // Add event listeners to the inputs
    redInput.addEventListener('input', function() {
        redValue.value = redInput.value;
        updateColor();
    });
    greenInput.addEventListener('input', function() {
        greenValue.value = greenInput.value;
        updateColor();
    });
    blueInput.addEventListener('input', function() {
        blueValue.value = blueInput.value;
        updateColor();
    });

    redValue.addEventListener('input', function() {
        redInput.value = redValue.value;
        updateColor();
    });
    greenValue.addEventListener('input', function() {
        greenInput.value = greenValue.value;
        updateColor();
    });
    blueValue.addEventListener('input', function() {
        blueInput.value = blueValue.value;
        updateColor();
    });

    // Add event listener for the color picker
    colorPicker.addEventListener('input', function() {
        const color = colorPicker.value;
        const rgb = hexToRgb(color);
        redInput.value = rgb.r;
        greenInput.value = rgb.g;
        blueInput.value = rgb.b;
        redValue.value = rgb.r;
        greenValue.value = rgb.g;
        blueValue.value = rgb.b;
        updateColor();
    });

    // Function to convert hex to RGB
    function hexToRgb(hex) {
        let r = 0, g = 0, b = 0;
        // 3 digits
        if (hex.length === 4) {
            r = parseInt(hex[1] + hex[1], 16);
            g = parseInt(hex[2] + hex[2], 16);
            b = parseInt(hex[3] + hex[3], 16);
        }
        // 6 digits
        else if (hex.length === 7) {
            r = parseInt(hex[1] + hex[2], 16);
            g = parseInt(hex[3] + hex[4], 16);
            b = parseInt(hex[5] + hex[6], 16);
        }
        return { r, g, b };
    }

    // Initialize the color display
    updateColor();
});
