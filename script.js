$(document).ready(function()        //当文档准备结束时，执行接下来的函数
    {
    $.getJSON("https://puzzle.qieee.top/api/rank", function(data) 
    {       //从此网页中获取数据，然后以类似C语言中“结构体”的形式存储
    var i = 0;
    var table = $("<table></table>");       //创建表格元素table
    var headerRow = $("<tr></tr>");     //tr表示表头行，此处指创建表头元素headerRow
    headerRow.append("<th>排名</th>");      //以下是填充各个表头的内容
    headerRow.append("<th>姓名</th>");
    headerRow.append("<th>ID</th>");        
    headerRow.append("<th>Level_0</th>");
    headerRow.append("<th>Level_1</th>");
    headerRow.append("<th>Level_2</th>");
    headerRow.append("<th>Level_3</th>");
    headerRow.append("<th>总得分</th>");
    table.append(headerRow);        //将表头列添加到列表中
    $.each(data, function(index, item) 
    {       //上面一句表示检查每一个数据，每一个都执行后面的“回调函数”，该函数的返回值就是各个元素的值。
            //index表示机构体内冒号后的内容，接下来用item表示所给网页
         var sum = 0;
      $.each
      (item.score, function(index, score) 
      {        //检查所给网页中每一个score值，并回调
        sum += score.score;        //计算总得分
      }
      );
      item.sum_score = sum;        //创建sum_scor，将总得分存储到sum_score中
    }
    );
    data.sort       //用于排序的函数，比较两个数的大小，作差后根据正负将大的向上排
    (function(a, b) 
    {
      return b.sum_score - a.sum_score;      //计算不同行的总得分之差，交给data.sort
    }
    );
    $.each
    (data, function(index, item) 
    {          //检查回调每一个数据(自带循环效果)
      i++;
      var row = $("<tr></tr>");         //创建新的行元素
      row.append("<td>" + i + "</td>")       //每行第一个位置输入一个数，不同行递增，用作排名
      row.append("<td>" + item.name + "</td>");
      row.append("<td>" + item.id + "</td>");          //以上两行对应所给网页中的name、id。将相关数据输入到表格中。
      $.each
      (item.score, function(index, score)
      {        //检查回调每一个所给网页中score的每一个值
        var cellClass = score.score === 10 ? "passed" : "not_passed";      //为cellClass赋值"passed" 或者 "not_passed"
        row.append("<td class=" + cellClass + ">" + score.score + "</td>");          //为单元格命名对应的cellClass的值，同时提取所给网页的score输入这些单元格
      }
      );
      row.append("<td>" + item.sum_score + "</td>");        //提取所给网页的sum_score数据并输入单元格
      table.append(row);      //将上面设计的这一行添加到总的表格中
    }
    );
    $("#table-container").append(table);          //把上面做的这张表添加到#table-container中
  }
  );
}
);





//没有定义first_passed?????????????????????????????????????????????????????????
//$具体怎么用？？？？
//.append表示把它后面的添加到它前面的东西里
//最后一行：#有啥用？？？？