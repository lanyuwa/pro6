export function addCart(data) {
    return {
        type:"cart_add",
        data
    }
}
export function delShops(data) {
    return{
        type:"cart_del",
        data
    }
}
export function getGoodsNum(data) {
    return{
        type:"cart_num",
        data
    }
}