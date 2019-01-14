import shopTools from "../util/cartTools"

export default function (state={},action) {
    const goods = action.data;
    switch (action.type) {
        case "cart_add":
            shopTools.addUpdate(goods);
            return shopTools.getShops();
        case "cart_del":
            shopTools.shopDel(goods.id);
            return shopTools.getShops();
        case "cart_num":
            let newState = Object.assign({},state,goods);
            return newState;
        default :
            return shopTools.getShops()
    }
}