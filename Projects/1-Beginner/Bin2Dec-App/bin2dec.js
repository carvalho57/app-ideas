(function(){ 
    'use strict';

    function init() {
        var botaoConvert = document.querySelector('[data-js="convert"]')
        botaoConvert.addEventListener('click',handleClickConvert,false);

        function handleClickConvert() {
            var entrada = document.querySelector('[data-js="inputToConvert"]').value;
            if(isInputOk(entrada)) {
                var numeroDecimal = converBinToDec(entrada);
                document.querySelector('[data-js="result"]').value = numeroDecimal;
                return;
            }
            return inputIsNotOK();
        }
        function isInputOk(binario){
            var apenasNumerosBinarios = binario.match(/^[01]+$/g);
            return apenasNumerosBinarios != null;
        }

        function inputIsNotOK() {
            alert("Algo de errado não esta certo, verifique o campo e confira se o valor inserido atende a regex /[01]{10}/g");
            document.querySelector('[data-js="inputToConvert"]').textContent = "";
        }
    
        function converBinToDec(input) {
            var decimal = 0;
            for(var i = input.length - 1,expoente = 0; i >=0 ; i--,expoente++) {
                var casa = input[i];
                if(!!Number(casa)) {
                    decimal += pow(2,expoente);
                } 
            }
            return decimal;
        }
       
        function pow(base,expoente) {
            if(expoente === 0) {
                return 1;
            }
            return base * pow(base,expoente - 1);            
        }
    }

    window.addEventListener('load',init, false);
})(); 