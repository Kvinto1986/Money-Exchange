// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let exchange = {};
    const COINS = ["H", "Q", "D", "N", "P"];
    const CHANGE = [50, 25, 10, 5, 1];
    let money = [CHANGE.length];
    let count = currency;
    for (let i = 0; i < CHANGE.length; i++) {
        if (count === 0)
            money[i] = 0;
        money[i] = Math.floor(count / CHANGE[i]);
        count = count - CHANGE[i] * money[i];
    }


    for (let i = 0; i < money.length; i++) {
        if (money[i] > 0)
            exchange[COINS[i]] = money[i];
    }

    const TOO_RICH = {
        error: "You are rich, my friend! We don't have so much coins for exchange"
    }

    if (currency > 10000)
        return TOO_RICH;

    else return exchange;
}
