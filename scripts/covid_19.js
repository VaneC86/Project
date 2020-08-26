let covid = document.createElement('div')
let select = document.createElement('select')
let covid_header = document.createElement('h5');


covid_header.innerText='Дані про коронавірус (COVID-19)'
covid_header.style.display='block'
covid_header.style.margin='0 auto'
covid_header.style.margin='10px auto'

$sidebar.insertAdjacentElement('beforeend',covid)
covid.insertAdjacentElement('beforebegin',covid_header);


covid.classList.add('covid')



async function loadCovidStat(url,url_countries=undefined){
	let info = await fetch(url);
	let country = await info.json();
	let info_countries = await fetch(url_countries);
	let countries = await info_countries.json();
	
	// console.log(typeof(country))
	createBlock(country)
	createList(countries)
	
}
async function loadDate(country='Ukraine'){
	let url=`https://covid-19.dataflowkit.com/v1/${country}`;
	let dataList=await fetch(url);
	let dataList_=await dataList.json();
	createBlock(dataList_)
	
}


function createBlock(country){
		list_ua=['Назва країни: ','Всього захворіло: ','Всього хворіє: ','Нових хворих: ','Всього померло: ','Нових смертей: ','Одужало: ','Дані оновлено: ']
		list=['Country_text','Total Cases_text','Active Cases_text','New Cases_text','Total Deaths_text','New Deaths_text','Total Recovered_text','Last Update']

	for (let i=0;i<8;i++){
		let country_ = document.createElement('div');

		let elem_1=document.createElement('span');
		let elem_2=document.createElement('span');

		elem_1.innerText=list_ua[i];
		elem_2.innerHTML=country[list[i]]+'<br>';

		country_.insertAdjacentElement('beforeend',elem_1)
		country_.insertAdjacentElement('beforeend',elem_2)

		covid.insertAdjacentElement('beforeend',country_);
	}

}
function createList(countries){

	let select = document.createElement('select');
	select.id='country_list';

	for(let i=0;i<countries.length-1;i++){
		let option = document.createElement('option');
		option.innerText=`${countries[i].Country_text}`
		if(countries[i].Country_text=='Ukraine'){
			select.prepend(option)
			
		}
		else{
			select.append(option);
		}
	
	}
	select[0].selected=true;
	console
	covid_header.insertAdjacentElement('afterend',select)
	country_list.addEventListener('change',(event)=>{
	console.log(event.target.value)


	document.querySelector('.covid').innerHTML='';
	loadDate(event.target.value)
	
});
}

class LoadCountry {
	constructor(country){
		this.country=country;
	}

	show_country(){
		let url=`https://covid-19.dataflowkit.com/v1/${this.country}`;
		let url_countries=`https://covid-19.dataflowkit.com/v1`;
		loadCovidStat(url,url_countries)
	}
}

	 let countryy = (new LoadCountry('Ukraine')).show_country();
