function pigVowel(word) {
  if (word.charAt(0) === ('a' || 'e' || "i" || "o" || "u"));
  return word.concat("way");
}
  
         
  function yWord(word) {
    if (word.charAt(0) === ("y"));
    let yArr = word.split("");
    let yGone = [yArr.shift()];
     yArr.push("y", "a", "y");
     yFinal = yArr.join("");
    return yFinal;}
    

    
    
    
    
 

    function testFunc(word) {
      let wordArr = word.split();
      for (let i=0; i < wordArr.length; i++) {
        
          console.log(wordArr[i]);

        
      }
    }


    function pigConsonants(word) {
      let consArray = word.split("");
      for (let i=0; i < consArray.length; i++) {
        if (consArray[i] != (/[aeiouy]*/i)) {
          consArray.push(consArray[i]);
          let consGone = [consArray.shift()];
          consFinal = consArray.join("");
        } else {
          break;
        }
      }
      return consFinal;
    }




    function pigConsonants(word) {
      let consArray = word.split("");
      let newArr = [];
      for (let i=0; i < consArray.length; i++) {
        if (consArray[i] === (/[el]]/gi)) {
         console.log("snead")
        };
      }
      return newArr;
    }
      


      
    
    
    
    
      
        
        }

    }
}