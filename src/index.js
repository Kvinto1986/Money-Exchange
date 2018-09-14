// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var exchange={};
    var coins=["H","Q","D","N","P"];
    var change=[50,25,10,5,1];
    var money=[change.length];
    var count=currency;
    for(var i=0;i<change.length;i++){
        if(count==0)
            money[i]=0;
        money[i]=Math.floor(count/change[i]);
        count=count-change[i]*money[i];
    }


    for (var i=0;i<money.length;i++) {
        if(money[i]>0)
            exchange[coins[i]]=money[i];
    }

    var too_rich={
        error:"You are rich, my friend! We don't have so much coins for exchange"
    }

    if(currency>10000){
        return too_rich;
    }

    else return exchange;
}
