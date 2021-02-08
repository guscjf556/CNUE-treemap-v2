let quizSubmit = {
  leaf: function(itemInfo, selectedItemsId, submittedAnswers){
    let quizForm = '<hr>';
    for(let i = 0; i < selectedItemsId.length; i++){
        quizForm += `
        <div class="row row-cols-md-2 my-3">
          <div class="col">
            <img src="/leafImages/${itemInfo[selectedItemsId[i] - 1].id}.jpg" class="img-fluid d-block mx-auto" style="max-height:150px">
          </div>
          <div class="col">
            <table class="table table-borderless">
              <tbody>
                <tr><th scope="row" class="text-nowrap">제출된 답</th><td class="text-primary">${submittedAnswers[i]}</td></tr>
                <tr><th scope="row">정답</th><td class="text-success">${itemInfo[selectedItemsId[i] - 1].name}</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <hr>
        `
    }

    return `
    <div class="container mb-5">
        ${quizForm}
        <a href="quizSelect" class="fixed-bottom btn btn-danger text-light">나무 다시 선택하기</a>
    </div>
    `
  },

  //bird
  bird: function(itemInfo, selectedItemsId, submittedAnswers){
    selectedItemsId = JSON.parse(selectedItemsId);
    let quizForm = '<hr>';
    for(let i = 0; i < selectedItemsId.length; i++){
        quizForm += `
        <div class="row row-cols-md-2 my-3">
          <div class="col">
            <img src="/birdImages/${itemInfo[selectedItemsId[i] - 1].id}.jpg" class="img-fluid d-block mx-auto" style="max-height:150px">
          </div>
          <div class="col">
            <table class="table table-borderless">
              <tbody>
                <tr><th scope="row" class="text-nowrap">제출된 답</th><td class="text-primary">${submittedAnswers[i]}</td></tr>
                <tr><th scope="row">정답</th><td class="text-success">${itemInfo[selectedItemsId[i] - 1].name}</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <hr>
        `
    }

    return `
    <div class="container mb-5">
        ${quizForm}
        <a href="quizSelect" class="fixed-bottom btn btn-danger text-light">새 다시 선택하기</a>
    </div>
    `
  },

  //bird sound
  birdSound: function(itemInfo, selectedItemsId, submittedAnswers){
    selectedItemsId = JSON.parse(selectedItemsId);
    let quizForm = '<hr>';
    for(let i = 0; i < selectedItemsId.length; i++){
        quizForm += `
        <div class="row row-cols-md-2 my-3">
          <div class="col">
            <audio controls preload="none" class="w-100">
              <source src="/noName/${itemInfo[i].id}.mp3" type="audio/mpeg">
              Your browser does not support the audio tag.
            </audio>          
          </div>
          <div class="col">
            <table class="table table-borderless">
              <tbody>
                <tr><th scope="row" class="text-nowrap">제출된 답</th><td class="text-primary">${submittedAnswers[i]}</td></tr>
                <tr><th scope="row">정답</th><td class="text-success">${itemInfo[selectedItemsId[i] - 1].name}</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <hr>
        `
    }

    return `
    <div class="container mb-5">
        ${quizForm}
        <a href="quizSelect" class="fixed-bottom btn btn-danger text-light">새 다시 선택하기</a>
    </div>
    `
  }
}

module.exports = quizSubmit