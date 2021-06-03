class Formatter {
  static capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z ''-]/g, '');
  }




  static titleize(sentence){
    if(!sentence.split) return sentence;
    var _titleizeWord = function(string) {
            return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
        },
        result = [];
      let splitSentence = sentence.split(" ")
    splitSentence.forEach(function(w) {
        if (w === splitSentence[0]){  
          result.push(_titleizeWord(w));
        }else if (w === 'the' ||w === 'a' || w ==='an' ||w === 'but' || w ==='of' ||w === 'and' ||w === 'for' || w ==='at' ||w === 'by' ||w === 'from'){
          result.push(w)
        }else{
        result.push(_titleizeWord(w));
        }
    });
    return result.join(" ");
  }
}