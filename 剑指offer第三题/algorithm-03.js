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
