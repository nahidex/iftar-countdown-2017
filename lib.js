var Patch = (function(d){
    var mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var mS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

    d.prototype.getLongMonth = d.getLongMonth = function getLongMonth (inMonth) {
        return gM.call(this, inMonth, mL);
    }

    d.prototype.getShortMonth = d.getShortMonth = function getShortMonth (inMonth) {
        return gM.call(this, inMonth, mS);
    }

    function gM(inMonth, arr){
        var m;

        if(this instanceof d){
            m = this.getMonth();
        }
        else if(typeof inMonth !== 'undefined') {
            m = parseInt(inMonth,10) - 1; // Subtract 1 to start January at zero
        }

        return arr[m];
    }
})(Date);


module.exports = Patch;