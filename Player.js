class Player {
  constructor(){}

  getCount(){
    //refering database to get the count of the playerCount
    var playerCountRef = database.ref('playerCount');
    //save the value in playerCount
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }


  updateCount(count){
    //update the playerCount in  the database
    database.ref('/').update({
      playerCount: count
    });
  }

  
  update(name){
    //after updating the count to add the next name updating the playerIndex
    var playerIndex = "player" + playerCount;
     //ADDing the name in the updated Index
    database.ref(playerIndex).set({
      name:name
    });
  }
}
