var myheading = "<h1>My web page</h1>";
var intro = "Hello welcome to my page";
var sometext = "This text can be affected by other statements";
var linktag = "<a href='www.iamsok.com'>Website Link</a>";
var redtext = "<span style = 'color:red'>I am red</span>;"
var begineffect = "<strong>";
var endeffect = "</strong>";
var beginpara = "<p>";
var endpara = "</p>";

document.write(myheading);
document.write(begineffect + sometext + endeffect);
document.write(beginpara + linktag + endpara);
document.write(beginpara + sometext + endpara);
