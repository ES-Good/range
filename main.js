function range() {
    const rangInput = document.querySelectorAll(".range__input");

    function startPositionRange() {
        for (let i = 0; i < rangInput.length; i++) {
            const element = rangInput[i];
            const val = element.value;
            const min = element.getAttribute('min');
            const max = element.getAttribute('max');
            const step = element.getAttribute('step');
            const position = 100 / (max - step) * (val - step);
            
            element.parentNode.querySelector('.range__track').style.width = position + '%';
        }
    }

    startPositionRange();

    for (let i = 0; i < rangInput.length; i++) {
        let element = rangInput[i];
        element.oninput = function () {
            const val = this.value;
            const min = this.getAttribute('min');
            const max = this.getAttribute('max');
            const step = this.getAttribute('step');
            const position = 100 / (max - step) * (val - step);
            
            this.parentNode.querySelector('.range__track').style.width = position + '%';
        }
        
    }
    
}

range();