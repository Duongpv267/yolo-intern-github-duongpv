let mod = 100000007;
function bienDem(mang1, mang2) {
    let bien = 0;
    let a = mang1.length;
    let b = mang2.length;
    for (i = 0; i <= b - a; i++) {
        let c;
        for (c = 0; c < a; c++) {
            if (mang2[i + c] != mang1[c]) {
                break;
            }
        }
        if (c == a) {
            bien++;
            c = 0;
        }
    }
    return bien;
}
let mang1 = "phanvanduong";
let mang2 = "an";
document.write(bienDem(mang2, mang1));