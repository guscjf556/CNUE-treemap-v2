const fs = require('fs');

let quizSelect = {
  //leaf
  leaf: function(itemInfo){
    let table = 
    '<thead><tr><th scope="col" class="text-center text-danger text-nowrap">퀴즈 포함</th><th scope="col">이름</th><th scope="col" class="text-center">사진</th></tr></thead>';
  
    for(var i = 0; i < itemInfo.length; i++){
      if(fs.existsSync(`sprites/leafImages/${i+1}.jpg`)){
        table += `
        <tr>
          <td class="text-center">
            <div class="form-check">
              <input class="form-check-input" name="selected" type="checkbox" value="${itemInfo[i].id}" id="defaultCheck1">
            </div>
          </td>
          <td>
            ${itemInfo[i].name}
          </td>
          <td>
            <img id="${i+1}" class="img-fluid mx-auto d-block img-thumbnail" src="/leafImages/${itemInfo[i].id}.jpg" data-toggle="modal" data-target="#modalFor${i+1}" style="height:3rem" alt="">
          </td>
        </tr>`
      }
    }
    return `
      <div class="container mb-5">
        <h4 class="text-center my-2">나무 선택</h4>
        <form action="quiz" method="post">
          <table class="table">
            ${table}
          </table>
          <div class="fixed-bottom d-flex">
          <button id="checkToggleButton" type="button" class="btn btn-outline-secondary w-25" onclick="checkToggle()">모두 선택</button>
          <button id="quizButton" type="submit" class="btn w-75" style="background-color:#af745b"disabled>나무를 선택하세요</button>
          </div>
        </form>
      </div>
      
      <script>
      //모두 선택 시 버튼 활성화, 색 바뀜 
      let checkAll = false;
      function checkToggle(){
          if(!checkAll){
              checkAll = true;
              document.querySelectorAll('input').forEach(input => {
                  input.checked = true;
              })
              document.getElementById('checkToggleButton').innerText = "모두 해제"
              quizButton.innerText =  document.querySelectorAll('input:checked').length + " 개 퀴즈보기";
              quizButton.removeAttribute("disabled");
          }
          else{
              checkAll = false;
              document.querySelectorAll('input').forEach(input => {
                  input.checked = false;
              })
              document.getElementById('checkToggleButton').innerText = "모두 선택"
              quizButton.innerText = "나무를 선택하세요";
              quizButton.setAttribute("disabled", "");
          }
      }
  
      window.onchange = function(){
        let _input = Array.from(document.querySelectorAll('input'));
        const quizButton = document.getElementById('quizButton')
        if(_input.some((e) => e.checked === true)){
          quizButton.innerText =  document.querySelectorAll('input:checked').length + " 개 퀴즈보기";
          quizButton.removeAttribute("disabled");
        }
        else {
          quizButton.innerText = "나무를 선택하세요";
          quizButton.setAttribute("disabled", "");
        };
      }
      </script>
    `
  },

  //bird quiz
  bird: function(itemInfo){
    let table = 
    '<thead><tr><th scope="col" class="text-center text-danger text-nowrap align-middle">선택</th><th scope="col" >이름</th><th scope="col" class="text-center">사진</th></tr></thead>';
  
    for(var i = 0; i < itemInfo.length; i++){
        table += `<tr><td class="text-center"><div class="form-check"><input class="form-check-input" name="selected" type="checkbox" value="${itemInfo[i].id}" id="defaultCheck1"></div></td><td class="align-middle">${itemInfo[i].name}</td><td><img id="${i+1}" class="img-fluid mx-auto d-block img-thumbnail" src="/birdImages/${itemInfo[i].id}.jpg" data-toggle="modal" data-target="#modalFor${i+1}" style="height:3rem" alt=""></td></tr>`
    }
    return `
      <div class="container mb-5">
        <h4 class="text-center my-2">시험 볼 새 선택</h4>
        <form action="quiz" method="post">
        <table class="table">
          ${table}
        </table>
        <div class="fixed-bottom d-flex">
        <button id="checkToggleButton" type="button" class="btn btn-outline-secondary w-25" onclick="checkToggle()">모두 선택</button>
        <button id="quizButton" type="submit" class="btn btn-secondary w-75" disabled>새를 선택하세요</button>
        </div>
        </form>
      </div>
      
  
      <script>
      let checkAll = false;
      function checkToggle(){
          if(!checkAll){
              checkAll = true;
              document.querySelectorAll('input').forEach(input => {
                  input.checked = true;
              })
              document.getElementById('checkToggleButton').innerText = "모두 해제"
              quizButton.innerText =  document.querySelectorAll('input:checked').length + " 개 퀴즈보기";
              quizButton.removeAttribute("disabled");
          }
          else{
              checkAll = false;
              document.querySelectorAll('input').forEach(input => {
                  input.checked = false;
              })
              document.getElementById('checkToggleButton').innerText = "모두 선택"
              quizButton.innerText = "새를 선택하세요";
              quizButton.setAttribute("disabled", "");
          }
      }
  
      window.onchange = function(){
        let _input = Array.from(document.querySelectorAll('input'));
        const quizButton = document.getElementById('quizButton')
        if(_input.some((e) => e.checked === true)){
          quizButton.innerText =  document.querySelectorAll('input:checked').length + " 개 퀴즈보기";
          quizButton.classList.replace("btn-secondary", "btn-danger");
          quizButton.removeAttribute("disabled");
        }
        else {
          quizButton.innerText = "새를 선택하세요";
          quizButton.classList.replace("btn-danger", "btn-secondary");
          quizButton.setAttribute("disabled", "");
        };
      }
      </script>
    `
  },
  
  //sound quiz
  birdSound: function(itemInfo){
    let table = 
    '<thead><tr><th scope="col" class="text-center text-danger" style="width:20%">선택</th><th scope="col" style="width:25%">이름</th><th scope="col" class="text-center" style="width:55%">소리</th></tr></thead>';
  
    for(var i = 0; i < itemInfo.length; i++){
      // if(fs.existsSync(`sprites/birdImages/${i+1}.jpg`)){
        table += `<tr><td class="text-center"><div class="form-check"><input class="form-check-input" name="selected" type="checkbox" value="${itemInfo[i].id}" id="defaultCheck1"></div></td><td>${itemInfo[i].name}</td><td><audio controls preload="none" class="w-100">
        <source src="/noName/${itemInfo[i].id}.mp3" type="audio/mpeg">
        Your browser does not support the audio tag.
      </audio></td></tr>`
      // }
    }
    return `
      <div class="container mb-5">
        <h4 class="text-center my-2">시험 볼 새 선택</h4>
        <form action="quiz" method="post">
        <table class="table">
          ${table}
        </table>
        <div class="fixed-bottom d-flex">
        <button id="checkToggleButton" type="button" class="btn btn-outline-secondary w-25" onclick="checkToggle()">모두 선택</button>
        <button id="quizButton" type="submit" class="btn btn-secondary w-75" disabled>새를 선택하세요</button>
        </div>
        </form>
      </div>
      
  
      <script>
      let checkAll = false;
      function checkToggle(){
          if(!checkAll){
              checkAll = true;
              document.querySelectorAll('input').forEach(input => {
                  input.checked = true;
              })
              document.getElementById('checkToggleButton').innerText = "모두 해제"
              quizButton.innerText =  document.querySelectorAll('input:checked').length + " 개 퀴즈보기";
              quizButton.removeAttribute("disabled");
          }
          else{
              checkAll = false;
              document.querySelectorAll('input').forEach(input => {
                  input.checked = false;
              })
              document.getElementById('checkToggleButton').innerText = "모두 선택"
              quizButton.innerText = "새를 선택하세요";
              quizButton.setAttribute("disabled", "");
          }
      }
  
      window.onchange = function(){
        let _input = Array.from(document.querySelectorAll('input'));
        const quizButton = document.getElementById('quizButton')
        if(_input.some((e) => e.checked === true)){
          quizButton.innerText =  document.querySelectorAll('input:checked').length + " 개 퀴즈보기";
          quizButton.removeAttribute("disabled");
        }
        else {
          quizButton.innerText = "새를 선택하세요";
          quizButton.setAttribute("disabled", "");
        };
      }
      </script>
    `
  }
}


module.exports = quizSelect
