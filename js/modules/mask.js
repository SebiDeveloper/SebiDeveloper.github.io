const mask = () => {

    // Text name

    const txtInputs = document.querySelectorAll("[name='name']");

    txtInputs.forEach(input => {
        input.addEventListener("keypress", function(e) {
            if (e.key.match(/[^a-z 0-9]/ig)) {
                e.preventDefault();
            }
        });
        input.addEventListener("input", function() {
            input.value = input.value.replace(/[^a-z 0-9]/ig, "");
        });
    });

    // Phone

    let setCursorPosition = (pos, elem) => {
        elem.focus();
        
        if (elem.setSelectionRange) {
            elem.setSelectionRange(pos, pos);
        } else if (elem.createTextRange) {
            let range = elem.createTextRange();

            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    };

    function createMask(event) {
        let matrix = '+373 (__) ___-___',
            i = 0,
            def = matrix.replace(/\D/g, ''),
            val = this.value.replace(/\D/g, '');

        if (def.length >= val.length) {
            val = def;
        }

        this.value = matrix.replace(/./g, function(a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
        });

        if (event.type === 'blur') {
            if (this.value.length == 2) {
                this.value = '';
            }
        } else {
            setCursorPosition(this.value.length, this);
        }
    }

    let inputs = document.querySelectorAll("#phone");

    inputs.forEach(input => {
        input.addEventListener('input', createMask);
        input.addEventListener('keypress', createMask);
        input.addEventListener('focus', createMask);
        input.addEventListener('blur', createMask);
    });

    // Mail

    const emailInput = document.getElementById('email');
    
    emailInput.addEventListener('input', function() {
        const emailValue = this.value.trim();
        const isValid = /.+@mail\.ru$/i.test(emailValue);
        
        if (!isValid) {
            this.setCustomValidity('Пожалуйста, введите email с доменом @mail.ru');
        } else {
            this.setCustomValidity('');
        }
    });
};



export default mask;