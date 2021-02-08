const fs = require('fs');

let table = {
  leaf: function(itemInfo){
    let table = 
    `<thead><tr><th scope="col"></th><th scope="col">이름</th><th scope="col" class="text-center">사진</th></tr></thead>`;
    
    //사진이 있다면 사진 엘러먼트와 모달을 추가, 아니면 추가하지 않음
    let modals = "";
    for(var i = 0; i < itemInfo.length; i++){
      if(fs.existsSync(`sprites/leafImages/${i+1}.jpg`)){
        table += `<tr><th scope="row" class="align-middle">${i+1}</th><td class="align-middle">${itemInfo[i].name}</td><td><img id="${i+1}" class="img-fluid mx-auto d-block img-thumbnail" src="/leafImages/${itemInfo[i].id}.jpg" data-toggle="modal" data-target="#modalFor${i+1}" style="height:150px" alt=""></td></tr>`
  
        modals += `
        <div id="modalFor${i+1}" class="modal" tabindex="-1">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">${itemInfo[i].name}</h5>
                <!-- 닫기 버튼
                <button type="button" class="btn-dark" data-dismiss="modal" aria-label="Close"><small>닫기</small></button>
                -->
              </div>
              <div class="modal-body">
                <img class="img-fluid mx-auto d-block" style="max-height:500px" src="leafImages/${itemInfo[i].id}.jpg">
              </div>
            </div>
          </div>
        </div>
        `
      }
      else {
        table += `<tr><th scope="row">${i+1}</th><td>${itemInfo[i].name}</td><td></td></tr>`
      }
    }
    return `
      <div class="container">
        <h1 class="text-center my-3">🍃</h1>
        <table class="table mb-5">
          ${table}
        </table>
        ${modals}
        <div class="fixed-bottom d-flex">
          <a href="/leaf/quizSelect" class="btn text-light w-100" style="background-color:#af745b">🌿 퀴즈 보기</a>
        </div>
    `
  },

  //bird
  bird: function(itemInfo){
    let table = 
    `<thead><tr><th scope="col"></th><th scope="col">이름</th><th scope="col" class="text-center">사진</th></tr></thead>`;
    
    //사진이 있다면 사진 엘러먼트와 모달을 추가, 아니면 추가하지 않음
    let modals = "";
    for(var i = 0; i < itemInfo.length; i++){
        table += `<tr><th scope="row" class="align-middle">${i+1}</th><td class="align-middle">${itemInfo[i].name}<a href="${itemInfo[i].url}" class="badge badge-pill badge-dark d-block w-50" target="_blank"><small>자세히<small></a></td><td><img id="${i+1}" class="img-fluid mx-auto d-block img-thumbnail" src="birdImages/${itemInfo[i].id}.jpg" data-toggle="modal" data-target="#modalFor${i+1}" style="height:150px" alt=""></td></tr>
        <tr><td></td><td colspan="2"><audio controls preload="none" class="w-100">
        <source src="/noName/${itemInfo[i].id}.mp3" type="audio/mpeg">
        Your browser does not support the audio tag.
      </audio></td></tr>`
  
        modals += `
        <div id="modalFor${i+1}" class="modal" tabindex="-1">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">${itemInfo[i].name}</h5>
                <!-- 닫기 버튼
                <button type="button" class="btn-dark" data-dismiss="modal" aria-label="Close"><small>닫기</small></button>
                -->
              </div>
              <div class="modal-body">
                <img class="img-fluid mx-auto d-block" style="max-height:500px" src="birdImages/${itemInfo[i].id}.jpg">
              </div>
            </div>
          </div>
        </div>
        `
    }
    return `
      <div class="container">
        <h1 class="text-center my-3">🐦</h1>
        <table class="table mb-5">
          ${table}
        </table>
        ${modals}
        <div class="fixed-bottom row gx-5 mb-3">
          <div class="col-6 text-center">
            <a href="bird/sound/quizSelect" class="btn btn-primary text-light w-75"> 소리 퀴즈 </a>
          </div>
          <div class="col-6 text-center">
            <a href="bird/quizSelect" class="btn btn-warning text-light w-75"> 사진 퀴즈 </a>
          </div>
        </div>
    `
  }
}


module.exports = table
