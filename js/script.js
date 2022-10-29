"use strict";

[
  {
  "id": "001",
  "name": "りんご",
  "en": "apple"
  },
  {
  "id": "002",
  "name": "みかん",
  "en": "orange"
  },
  {
  "id": "003",
  "name": "ぶどう",
  "en": "grape"
  }
]

// const ctx = document.getElementById('myChart'); 

const dateTime = 'http://posse-task.anti-pattern.co.jp/1st-work/study_time.json';
fetch(dateTime)
.then(function(response){
  return response.json();
})
.then(function(jsonTime){
  console.log(jsonTime);
});

const dateContent = 'http://posse-task.anti-pattern.co.jp/1st-work/study_contents.json';
fetch(dateContent)
.then(function(response){
  return response.json();
})
.then(function(jsonContent){
  console.log(jsonContent);
});

const dateLanguage = 'http://posse-task.anti-pattern.co.jp/1st-work/study_language.json';
fetch(dateLanguage)
.then(function(response){
  return response.json();
})
.then(function(jsonLanguage){
  console.log(jsonLanguage);
});

// var myChart = new Chart(dateTime, {
//   type: 'bar',
//   data: {
//       labels: [],
//       datasets: [{
//           label: '# of Votes',
          
//           backgroundColor: [
//               'rgba(255, 99, 132, 0.2)',
//               'rgba(54, 162, 235, 0.2)',
//               'rgba(255, 206, 86, 0.2)',
//               'rgba(75, 192, 192, 0.2)',
//               'rgba(153, 102, 255, 0.2)',
//               'rgba(255, 159, 64, 0.2)'
//           ],
//           borderColor: [
//               'rgba(255, 99, 132, 1)',
//               'rgba(54, 162, 235, 1)',
//               'rgba(255, 206, 86, 1)',
//               'rgba(75, 192, 192, 1)',
//               'rgba(153, 102, 255, 1)',
//               'rgba(255, 159, 64, 1)'
//           ],
//           borderWidth: 1
//       }]
//   }
// })

var ctx = document.getElementById("myChart").getContext("2d");
window.myPie = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: 
    ["",'2',"", '4',"", '6',"", '8',"", '10', "",'12',"",'14',"", '16', "",'18', "",'20',"", '22',"", '24',"",'26', "",'28', "",'30']
    ,
    datasets: [{
      data: [
    
          3,4,5,3,0,0,4,2,2,8,8,2,2,1,7,4,4,3,3,3,2,2,6,2,2,1,1,1,7,8
      
      ],
      backgroundColor: "rgb(121,211,255)",
      // xAxisID:'x',
      // yAxisID: 'y',
    }],
  },
  options: {
    plugins:{
        legend: {
        display: false,
    }
    },
    scales:{
      x:                           // Ｘ軸設定
      {
          title: {                 // 軸ラベル
              display: false,                // 表示設定
              labelString: '横軸ラベル',    // ラベル
              fontColor: "red",             // 文字の色
              fontSize: 10                  // フォントサイズ
          },
          grid: {                   // 補助線
              color: "rgba(255, 0, 0, 0.2)",
              display: false,   // 補助線の色
          },
          ticks: {                      // 目盛り
              fontColor: "red",             // 目盛りの色
              fontSize: 14,                  // フォントサイズ
              stepSize: 2,
              min: 0,
              max: 30,
              autoSkip:false,
              maxRotation:0,
          }
      }
  ,
      y:{
        // display:false,
        title:{
          display: false,
        },
        grid:{
          display:false
        },
        ticks:{
          stepSize: 2,
          min: 0,
          max: 8,
        }
      }
    },
          //beginAtZero: true
      
  },
    responsive: true
  }
);


var ctx = document.getElementById("languageChart").getContext("2d");
window.myPie = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: 
    ['CSS','HTML', 'SHELL','SQL', 'Javascript',  'PHP', 'Laravel',  '  情報システム基礎知識（その他）'],
    datasets: [{
      label: "",
      data: [30,20,20,20,10,5,5,10],

      backgroundColor:["#fa8072", "#00ff7f", "#00bfff", "#a9a9a9", "#f5f5f5","#008080","#ff6347","#f0e68c"]
    }],
  },

  options: {
    legend:{
display:true,
position:'bottom',
    },
    plugins: {
      
      tooltip: {
           enabled: false
     },
      datalabels: {
         font: {
             size: 13
         },
         formatter: function( value, context ) {
             return value.toString() + '%';
         }
      }
    },
 },

 plugins: [
     ChartDataLabels,
 ],
  
});

var ctx = document.getElementById("contentChart").getContext("2d");
window.myPie = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: 
    ['N予備校','ドットインストール', 'POSSE課題'],
    datasets: [{
      label: "",
      data: [40,20,20],
      backgroundColor:["#fa8072", "#00ff7f", "#00bfff", "#a9a9a9", "#f5f5f5"]
    }],
  },

  options: {
    legend:{
display:true,
position:'bottom',
    },
    plugins: {
      colorschemes: {
        scheme: 'brewer.Paired12'
    },
      tooltip: {
           enabled: false
     },
      datalabels: {
         font: {
             size: 13
         },
         formatter: function( value, context ) {
             return value.toString() + '%';
         }
      }
    },
 },

 plugins: [
     ChartDataLabels,
 ],
  
});




// new Chart(context, {
//   type: 'bar',
//   data: {
//     labels: ['2015年', '2016年', '2017年', '2018年', '2019年', '2020年'],
//     datasets: [{
//       label: "日本の人口推移",
//       data: [127094745, 127041812, 126918546, 126748506, 126555078, 126146099],
//     }],
//   },
//   options: {
//     responsive: false
//   }
// })





// 以下モーダル２


window.onload = ()=>{
  const loader = document.getElementById('loader');
  var assign = function(){
    
    loader.classList.add('loaded');
  } 
}


// Javascript
let dialog = document.querySelector('.loading'); // dialog（モーダルダイアログ）の宣言
let complete = document.querySelector('.complete'); // dialog（モーダルダイアログ）の宣言
let btn_open = document.getElementById('open'); // open（開く）ボタンの宣言
let btn_close = document.getElementById('close'); // close（閉じる）ボタンの宣言
let modal1 = document.getElementById("modal-01")
let modal1Button = document.getElementById("modal-01button")
btn_open.addEventListener('click', function() { 
  // 開くボタンをクリックした場合の処理
  dialog.showModal();
  complete.showModal();
  setTimeout(function(){
    document.querySelector(".loader").style.visibility = "hidden";
    document.querySelector(".loader").style.opacity = "0";
    document.querySelector(".complete").style.visibility = "visible";
    document.querySelector(".complete").style.opacity = "1";
    console.log("aaaa");
    

    }, 3000);
  });
  
  // modal1.style.display = ("none")
btn_close.addEventListener('click', function() {
  // 閉じるボタンをクリックした場合の処理
  dialog.close();
  complete.close();
  // window.location.reload();
}, false);
modal1Button.addEventListener('click', function() {
  // modal1.style.display = ("block")
})







// btn_open.addEventListener('click', function() { 
//   modal1.close();
// });





// twitter遷移
let twitterCheck = document.getElementById('twitterCheck'); 
var ok = document.getElementsByClassName('ok'); 
const twitterText = document.getElementById("twitterText")
// if (twitterCheck.click) {
//   alert('クリックされました');
// };

twitterCheck.addEventListener('click', function() { 
  // btn_open.classList.add('ok');
  btn_open.addEventListener('click', function() { 
    location.replace("https://twitter.com/compose/tweet?text= "+twitterText.value )
  }
  );

}
);
// ok.addEventListener('click', function() { 
//   alert('クリックされました');
// });
twitterCheck.addEventListener('click', function() {

// window.open('https://twitter.com/compose/tweet');

})

