export default{
      //返回所有组合算法
      com:function(data, n, currentIndex = 0, choseArr = [], result = []){
            let dataLength = data.length;
              // 可选数量小于项所需元素的个数，则递归终止
            if (currentIndex + n > dataLength) {
                return;
            }
            for (let i = currentIndex; i < dataLength; i++) {
                // n === 1的时候，说明choseArr在添加一个元素，就能生成一个新的完整项了。
                // debugger
                  if (n === 1) {
                  //console.log(1)
                  // 再增加一个元素就能生成一个完整项，再加入到结果集合中
                  result.push([...choseArr, data[i]]);
                  // 继续下一个元素生成一个新的完整项
                  i + 1 < dataLength && this.com(data, n, i + 1, choseArr, result);
                  break;
                }
                // 执行到这，说明n > 2，choseArr还需要两个以上的元素，才能生成一个新的完整项。则递归，往choseArr添加元素
                this.com(data, n - 1, i + 1, [...choseArr, data[i]], result);
            }
            return result;
      },
      //返回所有组合算法
      combin:function(data,n,currentIndex=0,chooseArr=[],result=[],m=1){
            for(let i = currentIndex;i<data.length;i++){
                  if(m==n){
                        result.push([...chooseArr,data[i]])
                  }
                  if(m>n){
                    break
                  }
                  this.combin(data,n,i+1,[...chooseArr,data[i]],result,m+1)
            }
            return result
      }
  }