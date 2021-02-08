let quiz = {
  //leaf
  leaf: function(itemInfo, selectedItemsId){
    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
      }

    shuffle(selectedItemsId);
    
    let quizForm = '<form action="quizSubmit" method="post"><hr>';
    for(let i = 0; i < selectedItemsId.length; i++){
        quizForm += `
        <div class="row row-cols-md-2 my-3">
          <div class="col">
            <img src="/leafImages/${itemInfo[selectedItemsId[i] - 1].id}.jpg" class="img-fluid d-block mx-auto" style="max-height:200px">
          </div>
          <div class="col d-flex align-items-center">
            <input type="text" class="form-control" name="submittedAnswers" placeholder="나무 이름">
          </div>
        </div>
        <hr>
        `
    }

    return `
    <div class="container">
        ${quizForm}
        <input type="hidden" name="quizItems" value='${JSON.stringify(selectedItemsId)}'>
        <button type="submit" class="btn btn-danger mx-auto d-block">확인하기</button>
      </form>
    </div>
    `
},

//bird
bird: function(itemInfo, selectedItemsId){
  function shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;
    
      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
    
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
    
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
    
      return array;
    }

  shuffle(selectedItemsId);
  
  let quizForm = '<form action="quizSubmit" method="post"><hr>';
  for(let i = 0; i < selectedItemsId.length; i++){
      quizForm += `
      <div class="row row-cols-md-2 my-3">
        <div class="col">
          <img src="/birdImages/${itemInfo[selectedItemsId[i] - 1].id}.jpg" class="img-fluid d-block mx-auto" style="max-height:200px">
        </div>
        <div class="col d-flex align-items-center">
          <input type="text" class="form-control" name="submittedAnswers" placeholder="새 이름">
        </div>
      </div>
      <hr>
      `
  }

  return `
  <div class="container">
      ${quizForm}
      <input type="hidden" name="quizItems" value='${JSON.stringify(selectedItemsId)}'>
      <button type="submit" class="btn btn-danger mx-auto d-block">확인하기</button>
    </form>
  </div>
  `
},
//birdSound
birdSound: function(itemInfo, selectedItemsId){
  function shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;
    
      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
    
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
    
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
    
      return array;
    }

  shuffle(selectedItemsId);
  
  let quizForm = '<form action="quizSubmit" method="post"><hr>';
  for(let i = 0; i < selectedItemsId.length; i++){
      quizForm += `
      <div class="row row-cols-md-2 my-3">
        <div class="col">
          <audio controls preload="none" class="w-100">
            <source src="/noName/${itemInfo[i].id}.mp3" type="audio/mpeg">
            Your browser does not support the audio tag.
          </audio>
        </div>
        <div class="col d-flex align-items-center">
          <input type="text" class="form-control" name="submittedAnswers" placeholder="새 이름">
        </div>
      </div>
      <hr>
      `
  }

  return `
  <div class="container">
      ${quizForm}
      <input type="hidden" name="quizItems" value='${JSON.stringify(selectedItemsId)}'>
      <button type="submit" class="btn btn-danger mx-auto d-block">확인하기</button>
    </form>
  </div>
  `
}

}


module.exports = quiz

