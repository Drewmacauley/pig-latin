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
    

    
    
    
    
    function pigConsonants(word) {
      let consArray = word.split("");
      for (let i=0; i < consArray.length; i++) {
        if (consArray[i] != (/[aeiouy]/gi)) {
          consArray.push(consArray[i]);
          let consGone = [consArray.shift()];
          consFinal = consArray.join("");
        }
      }
      return consFinal;
    }
      
    

      
    
    
    
    
      
        
        }

    }
}