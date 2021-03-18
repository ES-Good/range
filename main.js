function range() {
    let rangInput = document.querySelectorAll(".range__input");

    for (let i = 0; i < rangInput.length; i++) {
        const element = rangInput[i];
        element.oninput = function () {
            let val = this.value;
            let min = this.getAttribute('min');
            let max = this.getAttribute('max');
            let step = this.getAttribute('step');
            let position = 100 / (max - step) * (val - step);
            
            this.parentNode.querySelector('.range__track').style.width = position + '%';
        }
        
    }
    
}

range();