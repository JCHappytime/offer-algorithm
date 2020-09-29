/**
 * 题目描述：
 * 大家都知道斐波那契数列，现在要求输入一个整数n，请你输出斐波那契数列的第n项（从0开始，第0项为0，第1项是1）。
 * n<=39
 */

// 解法一
function fabonacci(n) {
  if (n === 0 || n === 1) {
  return n;
  }
  return this.fabonacci(n-1) + this.fabonacci(n-2);
  }


// <<<<<===================  解释  ===================>>>>>
 /**
    递归解法也比较好理解，但是递归方式非常耗时，会导致内存和时间都超出限制。
 */

 // 解法二
function fabonacci(n) {
  let arr = [1, 1];
  if (n === 1 || n === 2) {
    return 1;
  } else {
    for (let i = 2; i < n; i ++ ) {
      arr.push[arr[n - 1] + arr[n - 2]];
    }
  }
  return arr[n - 1];
}


// <<<<<===================  解释  ===================>>>>>
 /**
    增加非递归解法的分析：
    1.当n=1与n=2时，f(n) =1;
    所以设置arr = [1, 1];
    2. 当n >2时循环遍历，将值push到数组arr中
    arr.push(arr[n-1] + arr[n-2]);
 */
