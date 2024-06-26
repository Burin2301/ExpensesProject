/**
 * 
 * @param {Array} items array of items item/outcome
 * @returns {number} total of income/outcome
 */

export function totalAmount(items){
    let sum = 0

    items.forEach(element => {
        sum += element.amount
    });
    return sum
}