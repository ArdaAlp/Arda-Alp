function langEN() {
var langText = document.getElementById("lang-text");
var title1 = document.getElementById("title-1");
var title2 = document.getElementById("title-2");
var text = document.getElementById("about-text");

langText.innerHTML = "Select Language:";
title1.innerHTML = "ABOUT ME";
title2.innerHTML = "CONTACT";
text.innerHTML = 
'First of all welcome to my personal web page. <br>'+
'If you want to get info about of me, you are here in correct place. <br> <br>'+
'<i>By the way, '+"I'm sorry if I made a mistake in English, I'm still improving myself."+'</i> <br> <br>'+
"Let's beggin, "+'<b>Who Is This Arda?</b> <br>'+
'Firstly my name is <b>Arda</b>.'+" I'm from Turkey and I live in Şanlıurfa but I born in Istanbul and I was live 13 years in Istanbul."+' <br>'+
"I'm working on web development (Front-End, Back-End) since 2018 and I'm continue improving myself about web development."+ '<br>'+
"If I have a free time I usally writing code or play basketball and football with my friends."+ ' <br> <br>'+
"I think that's enough about information for be with me a friend. Nice to meet you."+ '<br>'+
"If you want to learn more about me you can arrive me my"+' <a href="#contact">contact</a> links.'
;}

function langTR() {
var langText = document.getElementById("lang-text");
var title1 = document.getElementById("title-1");
var title2 = document.getElementById("title-2");
var text = document.getElementById("about-text");

langText.innerHTML = "Dil Seç:";
title1.innerHTML = "HAKKIMDA";
title2.innerHTML = "İLETİŞİM";
text.innerHTML = 
'Öncelikle web siteme hoş geldin. <br>'+
'Eğer benimle ilgili bilgi almak istiyorsan doğru yerdesin. <br> <br>'+
"Hadi başlayalım, "+'<b>Arda Kimdir?</b> <br>'+
'İlk olarak adım <b>Arda</b>.'+" Türküm ve Şanlıurfa'da yaşıyorum ama İstanbul doğumluyum ve İstanbul'da 13 sene yaşadım."+' <br>'+
"2018'den beri web geliştirme (Front-End, Back-End) ile ilgileniyorum ve kendimi geliştirmeye devam ediyorum."+ '<br>'+
"Eğer boş zamanım olursa genellikle kod yazarım veya arkadaşlarımla basketbol ve futbol oynarım."+ ' <br> <br>'+
"Sanırım arkadaş olmamız için hakkımda bu kadar bilmen yeterli. Tanıştığımıza memnun oldum."+ '<br>'+
"Hakkımda daha fazla bilgi istiyorsan bana"+' <a href="#contact">iletişim</a> adreslerinden ulaşabilirsin.'
;}
