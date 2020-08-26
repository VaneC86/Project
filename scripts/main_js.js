let $container = document.createElement('div');
let main_content = document.createElement('div');
let $main = document.createElement('main')
let $aside = document.createElement('aside');
let $sidebar = document.createElement('div');

$container.classList.add('container-fluid')

main_content.classList.add('main_content','flex-wrap','row')

main_content.style.padding='15px';

main_content.append($aside,$main,$sidebar)

wrapper.insertAdjacentElement('beforeend',$container)

$container.insertAdjacentElement('beforeend',main_content)


main_content.classList.add('align-items-lg-start','align-items-md-stretch')
$aside.classList.add('col-xl-4', 'col-lg-4','order-lg-0','col-md-6','order-md-1','col-sm-6','col-12','order-1')
$main.classList.add('col-xl-5','col-lg-5','order-lg-1','col-md-12','order-md-0','col-sm-12','col-12','order-0')
$sidebar.classList.add('sidebar','col-xl-3','col-lg-3','col-md-6','order-md-2','col-sm-6','col-12','order-2')

let container = document.createElement('div');
let main = document.createElement('div');
let info = document.createElement('div');
$aside.append(container,main,info)

container.classList.add('container');
info.classList.add('info');
main.classList.add('main');

let row = document.createElement('div');
let weatherBlock = document.createElement('div');
let w_header = document.createElement('h3');

w_header.innerText='Погода';

container.append(row,weatherBlock)
row.insertAdjacentElement('afterend',w_header)

weatherBlock.classList.add('weatherBlock','col-12');
row.classList.add('row');


let info_header = document.createElement('h3')
info_header.innerText='Курс валют';

let buy_sell = document.createElement('div');
buy_sell.id='buy_sell';



let info_table = document.createElement('table');
let th_1 = document.createElement('th');
let th_2 = document.createElement('th');

let t_head = document.createElement('tr')
th_1.textContent='Купівля'
th_2.textContent='Продаж'

th_1.setAttribute('colspan','3')
th_1.style.textAlign='right';
th_1.style.paddingRight='11px';


t_head.append(th_1,th_2)

info_table.append(t_head)
for (let i=0;i<4;i++){
	let tr = document.createElement('tr');
	info_table.append(tr);
	for (let j=0;j<4;j++){
		let td = document.createElement('td');
		tr.append(td)
	}
}

info.append(info_header,buy_sell,info_table)

let data = document.createElement('div')
let values = document.createElement('div')
let conv_header = document.createElement('h3')
let radio = document.createElement('div')


data.classList.add('data')
values.classList.add('values')

conv_header.textContent='Конвертер валют'

sell= document.createElement('span')
buy= document.createElement('span')

sell.textContent='Продати';
buy.textContent='Купити';

$sell = document.createElement('input')
$buy = document.createElement('input')

$sell.setAttribute('type','radio')
$sell.setAttribute('name','check')
$sell.setAttribute('value','sale')
$sell.setAttribute('checked','checked')

$buy.setAttribute('type','radio')
$buy.setAttribute('name','check')
$buy.setAttribute('value','buy')

radio.append(sell,$sell,buy,$buy)

let $first_input = document.createElement('div');
let $second_input = document.createElement('div');

let first_input = document.createElement('input');
let second_input = document.createElement('input');

let first_list = document.createElement('select');
let second_list = document.createElement('select');

first_list.id='first';
second_list.id='second';

first_input.setAttribute('type','text');
first_list.setAttribute('name','')

second_input.setAttribute('type','text');
second_list.setAttribute('name','')

first_input.id='first_input';
second_input.id='second_input';

$first_input.append(first_input,first_list)
$second_input.append(second_input,second_list)

values.append($first_input,$second_input)

data.append(conv_header,radio,values)

main.append(data)



document.body.insertAdjacentElement('afterbegin',wrapper)




let categories=['','business', 'entertainment', 'health', 'science', 'sports', 'technology'];
let categories_uk=['TOP-Новини','Бізнес', 'Розваги', 'Здоров\'я', 'Наука', 'Спорт', 'Технології'];


function createNews(articles,section){

	for(let i=0;i<articles.length;i++){
		if (i>3){
			i=articles.length;
		}
		else{
		let $a = document.createElement('a');
		$a.innerText=articles[i].title;
		$a.setAttribute('href',articles[i].url)
		$a.setAttribute('target','_blank');
		section.insertAdjacentElement('beforeend',$a)	
		}
		

	}
}

async function loadNews(url,section){
	let text = await fetch(url);
	let news = await text.json();
	let articles = news.articles;

	createNews(articles,section);

	
}

class NewsBlock{
	constructor(category){
		this.category=category;
		
		
	}

	show(){
		// let url = `http://newsapi.org/v2/top-headlines?country=ua&category=${this.category}&apiKey=1de46763d27d46d7a584d99731166312`;
		let url = `http://newsapi.org/v2/top-headlines?country=ua&category=${this.category}&apiKey=f30387b18b314ff08c07d42a147928c3`;
		let article=document.createElement('article')  
		let header = document.createElement('h3')
		let section= document.createElement('section')

		header.textContent=(categories_uk[categories.indexOf(this.category)]);

		loadNews(url,section); 

		article.append(header,section)

		$main.insertAdjacentElement('beforeend',article)
		
	
	}
}

	for (let i=0;i<categories.length;i++){

	(new NewsBlock (categories[i])).show()
 }


