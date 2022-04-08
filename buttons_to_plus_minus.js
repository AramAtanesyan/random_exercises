const activatePlusMinusButtons = function() {

    let input = document.getElementById('input');
    let plus = document.getElementById('plus-button');
    let minus = document.getElementById('minus-button');

    let plusInterval;
    let minusInterval;
    let plusTimeout;
    let minusTimeout;
    let afterHold = false;
    let holdEvent = false;
    let tempIndex;

    input.addEventListener('input', inputOnlyCorrectValue);

    [plus, minus].forEach((button, i)=> {

        button.addEventListener('click', (e)=> {
            if(!afterHold) {
                e.stopPropagation();
                e.preventDefault();
                i === 0 ? clearTimeout(plusTimeout) : clearTimeout(minusTimeout);
                i === 0 ? +(input.value)++ : +(input.value)--;

                inputOnlyCorrectValue();
            }
            afterHold = false;
        });

        button.addEventListener('mousedown', (e)=> {
            holdEvent = false;
            e.stopPropagation();
            e.preventDefault();
            if(i === 0) {
                plusTimeout = setTimeout(() => {
                    plusInterval = setInterval(()=> {
                        +(input.value)++;
                        holdEvent = true;
                        tempIndex = i;
                        inputOnlyCorrectValue();
                    }, 100);
                }, 100);
            }else {
                minusTimeout = setTimeout(() => {
                    minusInterval = setInterval(()=> {
                        +(input.value)--;
                        holdEvent = true;
                        tempIndex = i;
                        inputOnlyCorrectValue();
                    }, 100);
                }, 100);
            }

        });


        ['mouseup', 'mouseleave'].forEach((evt, index) => {
            button.addEventListener(evt, (e)=> {
                e.stopPropagation();
                e.preventDefault();
                i === 0 ? clearInterval(plusInterval) : clearInterval(minusInterval);

                if(tempIndex === i) {
                    if(holdEvent && index === 0) {
                        afterHold = true;
                    }
                }
            });
        })
    });

    function inputOnlyCorrectValue() {
        input.value = Math.abs(input.value) > 0 ? Math.abs(input.value) : 1;
    }

};

activatePlusMinusButtons();