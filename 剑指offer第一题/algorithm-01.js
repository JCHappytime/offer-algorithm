/**
 * 题目描述：
 * 给定一个数组A[0, 1, ..., N-1],请构建一个数组B[0, 1, ..., n-1],
 * 其中B中的元素B[i]=A[0]*A[1]*...*A[I-1]*A[i+1]*...*A[n-1]，不能使用除法。
 * （注意：规定B[0]=A[1] * A[2]*...*A[N-1]，B[n-1]=A[0]*A[1]*...*A[N-2]）
 * 对于A长度为1的情况，B无意义，故而无法构建，因此该情况不会存在。
 */

function multiply(array)
{
    var bArr = [];
    var left = [];
    var right = [];
    for (var i=0; i<array.length; i++){
        bArr[i] = 1;
        for (var j=0; j<array.length; j++){
            if (i===j){continue}
            bArr[i] *= array[j]
        }
    }
    return bArr;
}


/**
 * 解释：
 * 我看网上一直有小伙伴在问为什么要初始化bArr[i] = 1，请看题目的描述。
 * 按照描述，我们将数组写下来：
 *
 */


