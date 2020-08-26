let oracul= document.createElement('div');
let oracul_header = document.createElement('h3');
$sidebar.insertAdjacentElement('beforeend',oracul)

let list=['Aries','Taurus','Gemini','Cancer','Lion','Virgo','Libra','Scorpio','Sagittarius','Capricorn','Aquarius','Pisces']
let list_uk=['Овен','Телець','Близнюки','Рак','Лев','Діва','Терези','Скорпіон','Стрілець','Козеріг','Водолій','Риби']
let list_dates=['21.03 - 20.04','21.04 - 21.05','22.05 - 21.06','22.06 - 23.07','24.07 - 23.08','24.08 - 23.09','24.09 - 23.10','24.10 - 22.11','23.11 - 21.12','22.12 - 20.01','21.01 - 19.02','20.02 - 20.03']

oracul.id='oracul';
oracul.style.display='flex';
oracul.style.flexWrap='wrap';
oracul.style.justifyContent='space-between';
oracul.style.maxWidth='399px';


document
class ShowOracul{
	constructor(category){
		this.category=category;
		
		
	}

	show(){
		let url = `http://orakul.com/horoscope/astrologic/general/${this.category}/today.html`
		
		let img = document.createElement('img');
		let a = document.createElement('a');

		a.innerText=(list_uk[list.indexOf(this.category)]);
		img.setAttribute('src',`img/zodiac/${this.category}.svg`)

		img.style.width='20px';
		img.style.width='25px';
		img.style.display='block';
		img.style.margin='2px auto';


		a.setAttribute('title',`${a.innerText} ${list_dates[list_uk.indexOf(a.innerText)]}`);
		a.setAttribute('href',url);
		a.setAttribute('target','_blank');
		a.setAttribute('alt',this.category);

		a.style.display='block';
		a.style.textAlign='center';
		a.style.border='1px solid gray';
		a.style.borderRadius='5px';
		a.style.fontSize='12px';
		a.style.textDecoration='none';
		a.style.width='60px';

		oracul.insertAdjacentElement('beforeend',a);
		a.insertAdjacentElement('afterbegin',img);
	}
}


oracul_header.innerText='Гороскоп'
oracul_header.style.display='block'
oracul_header.margin='0 auto'
oracul.insertAdjacentElement('beforebegin',oracul_header);

for (let i=0;i<list.length;i++){

	(new ShowOracul (list[i])).show()
 }