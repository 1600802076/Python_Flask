//折半查找
function BiSearch(arr,key) {
    var low = 0;
    var high = arr.length-1;
    var mid;
    while(low <= high){
        mid = parseInt((low+high)/2);
        console.log(mid+" "+arr[mid]);
        if(arr[mid] == key){
            return mid;
        } else if(arr[mid] > key){
            high = mid - 1;
        } else{
            low = mid + 1;
        }
    }
    return -1;
}

//KMP字符串匹配算法
function KMP(string1,string2) {

}
//直接插入排序
function InsertSort(arr) {
    for(var i=1;i<arr.length;i++){
        if(arr[i] < arr[i-1]) {
            var j = i-1;
            var x = arr[i];
            while(x<arr[j]){
                arr[j+1] = arr[j];
                j--;
            }
            arr[j+1] = x; //j=-1
        }
    }
}

//折半插入排序
function BiInsertSort(arr) {
    var i,j,low,high,mid;
    for(i=1;i<arr.length;i++) {
            var x = arr[i];
            low = 0;
            high = i-1;
            while(low <= high){
                mid = parseInt((low+high)/2);
                if(arr[mid] > x){
                    high = mid-1;
                } else {
                    low = mid+1;
                }
            }
            j = i-1;
            while(j>=high+1){
            arr[j+1] = arr[j];
            j--;
        }
        arr[high+1] = x; //j=-1
    }
}

//希尔排序
function ShellInsertSort(arr,dk) {
    for(var i=dk;i<arr.length;i+=dk){
        if(arr[i] < arr[i-dk]) {
            var j = i- dk;
            var x = arr[i];
            while(j >= 0&&x <arr[j]){
                arr[j+dk] = arr[j];
                j -= dk;
            }
            arr[j+dk] = x;
        }
    }
}
function ShellSort(arr) {
    var dk = parseInt(arr.length/2);
    while(dk >= 1) {
        ShellInsertSort(arr,dk);
        dk = parseInt(dk/2);
    }
}

//冒泡排序
function BubbleSort(arr) {
    for(var i=0;i<arr.length-1;i++)
    {
        var item = true;
        for(var j=arr.length-1;j>i;j--){
            if(arr[j-1] > arr[j]) {
                var x = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = x;
                item = false;
            }
        }
        if(item){
            return ;
        }
    }
}

//快速排序
function getLow(arr,low,high) {
    var item = arr[low];
    while(low<high){
        while(low<high && arr[high] >= item){
            high--;
        }
        arr[low] = arr[high];
        while(low<high&&arr[low] <= item){
            low++;
        }
        arr[high] = arr[low];
    }
    arr[low] = item;
    return low;
}
function quickSort(arr,low,high) {
    if(low < high){
        var index = getLow(arr,low,high);
        quickSort(arr,low,index-1);
        quickSort(arr,index+1,high);
    }
}

//简单选择排序
function SelectSort(arr) {
    for(var i=0;i<arr.length-1;i++){
        var min = i ;
        for(var j=i;j<arr.length;j++){
            if(arr[j] < arr[min]){
               min = j;
            }
        }
        var item = arr[i];
        arr[i] = arr[min];
        arr[min] = item;
    }
}

//堆排序
function BuildMaxHeap(arr) {
    for(var i = parseInt(arr.length/2);i>0;i--){
        AdjustDown(arr,i);
    }
}
function AdjustDown(arr,k) {
    var item = arr[k];
    for(var i=2*k;i<=arr.length;i*=2){
        if(i<arr.length&&arr[i]<arr[i+1]){
            i++;
        }
        if(item >= arr[i]) {
            break;
        } else{
            arr[k] = arr[i];
            k = i;
        }
    }
    arr[k] = item;
}
function HeapSort(arr) {
    BuildMaxHeap(arr);
    for(var i = arr.length;i>1;i++){
        var swap = arr[1];
        arr[1] = arr[i];
        arr[i] = swap;
        AdjustDown(arr,1);
    }
}

//判断是否回文（思路：反转后判断是否与原来相等）
function palinDrom(str) {
    return str == str.split("").reverse().join("");  //字符串转数组反序后再转字符串
}

//数组去重(思路，利用对象属性的唯一性，将数组值作为属性添加到对象中，没出现过的属性就不重复，添加到新数组)  速度最快，空间换时间
function deleteSame(array){
    var obj = {},arr = [];
    for(var i=0;i<array.length;i++){
        if(!obj[array[i]]){
            obj[array[i]] = [typeof array[i]]; //为了区分数字和字符，使用typeof()与indexOf()配合使用，对象中存入数据类型
            arr.push(array[i]);
        } else if(obj[array[i]].indexOf(typeof array[i]) < 0){
                arr.push(array[i]);
                obj[array[i]].push(typeof array[i]);
        }
    }
    return arr;
}

//统计一个字符串中出现最多的字母(思路：依然是利用对象存储字符数量)
function mostZimu(str) {
    var obj = {},max = -1,result;
    for(var i=0;i<str.length;i++){
        if(!obj[str[i]]){
            obj[str[i]] = 1;
            if(obj[str[i]] > max){
                max = obj[str[i]];
                result = i;
            }
        } else {
            obj[str[i]] += 1;
            if(obj[str[i]] > max){
                max = obj[str[i]];
                result = i;
            }
        }
    }
    var r = str[result]+obj[str[result]];
    return r;
}

//随机生成指定长度字符串
function randomString(num) {
    var str = "abcdefghijklmnopqrstuvwxyz9876543210";
    var temp = "";
    for(var i=0;i<num;i++){
        temp += str.charAt(Math.floor(Math.random()*str.length));
    }
    return temp;
}

//查找最长公共子串（动态规划做法）时间复杂度n*m
function FindStr(str1,str2) {
    var arr = [];
    var maxLen = 0,index,result = "";
    for(var i = 0;i<=str1.length;i++){
        arr[i] = [];
        for(var j=0;j<=str2.length;j++){
            arr[i][j] = 0;
        }
    }
    for(var i=1;i<=str1.length;i++){
        for(var j=1;j<=str2.length;j++){
            if(str1[i-1] == str2[j-1]){
                arr[i][j] = arr[i-1][j-1]+1;
                if(arr[i][j] >maxLen){
                    maxLen = arr[i][j];
                    index = i;
                }
            }
        }
    }
    for(var p = index-maxLen;p<index;p++){
       result += str1[p];
    }
    return result;
}

function findSubStr(str1, str2){   //通过算法分隔较短字符串，然后判断是否在大字符串中有出现
    if (str1.length > str2.length) {
        var temp = str1;
        str1 = str2;
        str2 = temp;
    }
    var len1 = str1.length,
        len2 = str2.length;
    for (var j = len1; j > 0; j--) {
        for (var i = 0; i <= len1 - j; i++) {
            var current = str1.substr(i, j);
            console.log(current);
            if (str2.indexOf(current) >= 0) {
                return current;
            }
        }
    }
    return "";
}

//最长公共子序列
function FindOrder(str1,str2) {
    var arr = [];
    var result = [];
    var maxLen = 0,index;
    for(var i = 0;i<=str1.length;i++){
        arr[i] = [];
        for(var j=0;j<=str2.length;j++){
            arr[i][j] = 0;
        }
    }
    for(var i=1;i<=str1.length;i++){
        for(var j=1;j<=str2.length;j++){
            if(str1[i-1] == str2[j-1]){

                arr[i][j] = arr[i-1][j-1]+1;
            } else {
                arr[i][j] = Math.max(arr[i-1][j],arr[i][j-1]);
            }
        }
    }

    return result;
}


















