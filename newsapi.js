console.log("this is my index js file");
//845bb661b2ed490398548ff4ae8fd207
let newsAccordion=getelementById("newsAccordion");
const xhr = new XMLHttpRequest();

fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=845bb661b2ed490398548ff4ae8fd207').
then((apidata)=>{
    return apidata.json();
})
.then((actualdata)=>{
const mydata=actualdata.Countries[77];
document.getElementById('api-india').innerHTML='The name of country is ${mydata.Country} , Total confirmed cases are ${mydata.TotalConfirmed}';

})
.catch((error)=>{
    console.log('The error occurred: $(error)');
});