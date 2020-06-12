import moneyMath  from 'money-math'
import accounting from 'accounting'

var libsMoney = {
    Money: moneyMath,
    accounting: accounting
};



export default class Moeda {

        static create(value){
            return new Moeda(value);
        }

        static isFormated(value) {

            if(Moeda.isNumber(value)) return false;
            if(typeof value == "object") return false;
            if(typeof value == "function") return false;

            if(typeof value == "string"){
                let length = value.length;
                let indexCaracter = length - 3;
                return value[indexCaracter] == ',';
            }

            return false;

        }

        static isNumber(value) {
            return typeof value === "number";
        }

        static isMoeda(value){
            if(value && typeof value == "object"){
                return !!(value.isMoeda && value.formatted && value.ammount);
            }
            return false;
        }

        constructor(value) {



            if(value && typeof value !== "string" && value.length){
                throw new Error("Value can not be an array, just number or string");
            }

            this.formatted = undefined;
            this.ammount = undefined;
            this.value = value;

            if(!value){
                this.formatted = "0,00";
                this.ammount = "0.00";
                this.value = 0;
            }else if (Moeda.isFormated(value)) {
                value = value.replace("R$","").replace(" ", '');
                this.formatted = value;
                this.ammount = libsMoney.Money.floatToAmount(libsMoney.accounting.unformat(value, ","));
            } else if (Moeda.isNumber(value)) {
                this.formatted = libsMoney.accounting.formatMoney(value, "", 2, ".", ",");
                this.ammount = libsMoney.Money.floatToAmount(value);
            } else if(Moeda.isMoeda(value)){
                this.formatted = value.formatted;
                this.ammount = value.ammount;
                this.value = value.value;
            } else {
                this.formatted = libsMoney.accounting.formatMoney(parseFloat(value), "", 2, ".", ",");
                this.ammount = value;
            }
            this.isMoeda = true;
        }

        add(value){
            let moeda = value;
            if(!Moeda.isMoeda(value)){
                moeda = new Moeda(moeda);
            }
            let addedValue = libsMoney.Money.add(this.ammount, moeda.ammount);
            return new Moeda(addedValue);
        }

        subtract(value){
            let moeda = value;
            if(!Moeda.isMoeda(value)){
                moeda = new Moeda(moeda);
            }
            let addedValue = libsMoney.Money.subtract(this.ammount, moeda.ammount);
            return new Moeda(addedValue);
        }

        mul(value){
            let moeda = value;
            if(!Moeda.isMoeda(value)){
                moeda = new Moeda(moeda);
            }
            let addedValue = libsMoney.Money.mul(this.ammount, moeda.ammount);
            return new Moeda(addedValue);
        }

        div(value){
            let moeda = value;
            if(!Moeda.isMoeda(value)){
                moeda = new Moeda(moeda);
            }
            let addedValue = libsMoney.Money.div(this.ammount, moeda.ammount);
            return new Moeda(addedValue);
        }

        percent(value){
            let moeda = value;
            if(!Moeda.isMoeda(value)){
                moeda = new Moeda(moeda);
            }
            let addedValue = libsMoney.Money.percent(this.ammount, moeda.ammount);
            return new Moeda(addedValue);
        }

        cmp(value){
            let moeda = value;
            if(!Moeda.isMoeda(value)){
                moeda = new Moeda(moeda);
            }
            return libsMoney.Money.cmp(this.ammount, moeda.ammount);
        }

        isGreaterThan(value){
            let moeda = value;
            if(!Moeda.isMoeda(value)){
                moeda = new Moeda(moeda);
            }
            return parseFloat(this.ammount) > parseFloat(moeda.ammount);
        }

        isGreaterOrEqualThan(value){
            let moeda = value;
            if(!Moeda.isMoeda(value)){
                moeda = new Moeda(moeda);
            }
            return parseFloat(this.ammount) >= parseFloat(moeda.ammount);
        }

        isLessThan(value){
            let moeda = value;
            if(!Moeda.isMoeda(value)){
                moeda = new Moeda(moeda);
            }
            return parseFloat(this.ammount) < parseFloat(moeda.ammount);
        }

        isLessOrEqualThan(value){
            let moeda = value;
            if(!Moeda.isMoeda(value)){
                moeda = new Moeda(moeda);
            }
            return parseFloat(this.ammount) <= parseFloat(moeda.ammount);
        }

        isEqual(value){
            let moeda = value;
            if(!Moeda.isMoeda(value)){
                moeda = new Moeda(moeda);
            }
            return libsMoney.Money.isEqual(this.ammount, moeda.ammount);
        }

        isZero(){
            return libsMoney.Money.isZero(this.ammount);
        }

        isNegative(){
            return libsMoney.Money.isNegative(this.ammount);
        }

        isPositive(){
            return libsMoney.Money.isPositive(this.ammount);
        }

        format(){
            return `R$ ${this.formatted}`;
        }

        mount(){
            return this.ammount;
        }

        toValue(){
            return this.value;
        }

        toJSON(){
            return {
                ammount: this.mount(),
                value: this.toValue(),
                formatted: this.format(),
                isMoeda: true
            }
        }

    }