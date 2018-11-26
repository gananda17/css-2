let callMeMayBe = function(){
    alert('Click!');
  }
  let confirmation = function(e){
    console.log(`${e.type} at ${e.currentTarget}`);
    alert(e.currentTarget.value);
  }
  const words = [
      "mobile",
      "database",
      "design",
      "security",
      "IoT",
      "web",
      "application"
  ];

  let longWords = words.filter(function(word){
      return word.length > 6
  })
  console.log(longWords);

  const wordProgramming = word.map(function(word){
      return `${word} progamming`
  })
  console.log (wordsprogramming);
  
  const foud = word.find(function(word){
      return word.length > 6;
  });
  console.log(found);