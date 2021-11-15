## 介绍

这里主要是练练算法题，锻炼一下思维

## 简单题

### 计数问题之给定一个整数数组，判断是会否存在重复数据

**计数题？map 走起**

- 思路：记录每一个数字出现的次数

```
输入: [1,2,3,1]
输出: true

输入: [1,2,3,4]
输出: false
```

- 解：

```js
function judgeDuplicate(arr) {
  let map = new Map();
  for (const t of arr) {
    if (map.has(t)) {
      return true;
    } else {
      map.set(t, 1);
    }
  }
  return false;
}
```

### 计数之字符串中的第一个唯一字符

```js
function firstUniqChar(s) {
  let map = {};
  for (const t of s) {
    map[t] = (map[t] || 0) + 1;
  }
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] == 1) {
      return i;
    }
  }
  return -1;
}
```

### 两数组交集

```js
let intersection = function (arr1, arr2) {
  return (result = [...new Set(arr1)].filter((item) => {
    return new Set(arr2).has(item);
  }));
};
```
