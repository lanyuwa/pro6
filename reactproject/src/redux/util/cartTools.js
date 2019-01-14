const shopTools = {};
const shop = JSON.parse(window.localStorage.getItem("shopInfo")||"{}");

// 更新
shopTools.addUpdate=function (goods) {
    if(shop[goods.id]){
        shop[goods.id] += goods.num;
    }else{
        shop[goods.id] = goods.num;
    }
    shopTools.saveShops();
};
// 删除
shopTools.shopDel=function (id) {
    delete shop[id];
    shopTools.saveShops();
};
// 获取
shopTools.getShops=function () {
    return JSON.parse(window.localStorage.getItem("shopInfo")||"{}");
};
// 保存
shopTools.saveShops=function () {
    window.localStorage.setItem("shopInfo",JSON.stringify(shop))
};





export default shopTools