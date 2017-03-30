const versionCompare = (vers1, vers2) => {
    let v1 = vers1.toString();
    let v2 = vers2.toString();
    let v1Gtv2 = false;
    let tempV1 = v1.split(".");
    let tempV2 = v2.split(".");
    let len = tempV1.length > tempV2.length ? tempV2.length : tempV1.length;
    let promise = new Promise((resolve, reject) => {
        try {
            for (let i = 0; i < len; i++) {
                if (tempV1[i] > tempV2[i]) {
                    v1Gtv2 = true;
                    break;
                } else if (tempV1[i] < tempV2[i]) {
                    v1Gtv2 = false;
                    break;
                } else if (i === len-1) {
                    resolve("same");
                }
            }
            if (v1Gtv2) {
                resolve(v1);
            } else {
                resolve(v2);
            }
        } catch (e) {
            reject(e);
        }
    })
    return promise;
}
versionCompare("1.0.0","1.0.0").then(function(res){
    console.log(res)
})