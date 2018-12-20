var wpsafelink = "https://safe.kesehatanku.us/safe.php?url=";
var domain = ["tools.akani.me",
			  "nitroflare.com",
			  "rapidgator.net",
			  "novafile.com",
			  "ul.to",
			  "turbobit.net",
			  "openload.co",
			  "uploadrocket.net",
			  "filescdn.com",
			  "alfafile.net",
			  "mediafire.com",
			  "kotakajaib.me",
			  "subscene.com",
			  "drive.google.com",
			  "google.com",
			  "drive.google.com",
			  "ycapi.org",
			  "redirector.googlevideo.com",
			  "idsly.bid",
			  "pasted.co",];
var els = document.getElementsByTagName("a"); 
for(var i = 0, l = els.length; i < l; i++) {	
	var el = els[i]; 
	var li = el.href;
	li = li.replace("https://", "");
	li = li.replace("http://", "");
	li = li.replace("www.", "");
	li = li.split("/")[0];
	for(var d=0; d < domain.length; d++){
		if(li == domain[d]){
			el.href = wpsafelink + btoa(el.href);
		}
	}
}
