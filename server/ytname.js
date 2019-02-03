var cheerio = require('cheerio');
var https = require('https');

https.get('https://www.youtube.com/',function(res){
  var htm = "";
  res.on('data', data => {
    // console.log("chunk recieved")
    htm += data;
  });

  res.on('end', _=>{
    var $ = cheerio.load(htm);

    $("a img").each(function(i,element){
      console.log(element.attribs['data-thumb'])
    })
    // console.warn(typeof names)
    // console.warn(names)
    // for(i = 10; i >= 50; i++){
    //   console.log(names[i])
    // }
    // names.forEach(x=>{
    //   console.warn(x.attribs.title);
    // })
    // console.log(names)
  })

});



// function loki(a, b){
  //dsfsdf sd fs
//   b(a)
// }
//
// let b = function(b){
//   console.log(b)
// }
//
// loki('hello', b)
//
// // whats the output ??
