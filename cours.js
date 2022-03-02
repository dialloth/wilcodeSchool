let nom = "Thierno";
console.log(` Nom : ${nom}`);

a = 100; 
if(a <100)
   console.log("Inférieur");
else {
	if(a==100)
	console.log("Egal");
else 
	console.log("Supérieur");
}
 let i = 1;
 while(i <= 5){
 	console.log("Bonjour "+i+ " fois")
 	i++;
 }
function permuter(){
	x = document.fo.z1.value;
	document.fo.z1.value = document.fo.z2.value;
	document.fo.z2.value = x;
}
 function f(){
 	alert(document.fo.montexte.value);
 }
 lmax = 10;
	 function filo(){
	 	if(document.fifi.montexte.value.length >= lmax){
	 		alert("Vous avez depassé la longueur autorisée");
	 		document.fifi.montexte.value=document.fifi.montexte.value.substring(0,lmax);
	 	}document.fifi.cpt.value=lmax-document.fifi.montexte.value.length;
 }
 str = new String ("Thierno_Alseny");
 document.write(str.charAt(0));
 document.write(str.length-1);
 document.write(str.substring(0,3));