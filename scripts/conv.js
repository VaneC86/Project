let  rate_buy = document.querySelectorAll('.info table tr td:nth-child(3)')
let  rate_sale = document.querySelectorAll('.info table tr td:nth-child(4)')
let names = document.querySelectorAll('.info table tr td:nth-child(1)')
let base_names = document.querySelectorAll('.info table tr td:nth-child(2)')

let check = document.querySelector('#second')



let url='https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5'
fetch(url)
	.then((response)=>{
		return response.json()
	})

	.then((data)=>{

	first_input.oninput=()=>{
		let rait_1=(document.querySelector('input[name=check]:checked').value=='sale')?first_list[first_list.selectedIndex].dataset.sale:first_list[first_list.selectedIndex].dataset.buy;
		let rait_2=(document.querySelector('input[name=check]:checked').value=='sale')?second_list[second_list.selectedIndex].dataset.sale:second_list[second_list.selectedIndex].dataset.buy;

		second_input.value=(first_input.value*(rait_1/rait_2)).toFixed(2)


	}
	second_input.oninput=()=>{
		let rait_1=(document.querySelector('input[name=check]:checked').value=='sale')?first_list[first_list.selectedIndex].dataset.sale:first_list[first_list.selectedIndex].dataset.buy;
		let rait_2=(document.querySelector('input[name=check]:checked').value=='sale')?second_list[second_list.selectedIndex].dataset.sale:second_list[second_list.selectedIndex].dataset.buy;

		first_input.value=(second_input.value*(rait_2/rait_1)).toFixed(2)
	}


	for (let i=0;i<names.length;i++){
	
		let option = document.createElement('option')
		option.value=data[i].ccy
		option.innerText=data[i].ccy
		if(data[i].ccy=='BTC'){
			option.setAttribute('data-sale',data[i].sale*data[0].sale)
			option.setAttribute('data-buy',data[i].buy*data[0].buy)
		}
		else{
			option.setAttribute('data-sale',data[i].sale)
			option.setAttribute('data-buy',data[i].buy)
		}

		first_list.insertAdjacentElement('beforeend',option)
	}

		let option = document.createElement('option')
		option.value='UAH'
		option.innerText='UAH'
		option.setAttribute('data-sale',1)
		option.setAttribute('data-buy',1)
		first_list.insertAdjacentElement('beforeend',option)



	for (let i=0;i<names.length;i++){

		let option = document.createElement('option')
		option.value=data[i].ccy
		option.innerText=data[i].ccy
		if(data[i].ccy=='BTC'){
			option.setAttribute('data-sale',data[i].sale*data[0].sale)
			option.setAttribute('data-buy',data[i].buy*data[0].buy)
		}
		else{
			option.setAttribute('data-sale',data[i].sale)
			option.setAttribute('data-buy',data[i].buy)
		}
		second_list.insertAdjacentElement('beforeend',option)
		
	}

		second_list.insertAdjacentElement('beforeend',option.cloneNode(true))

		for (let i=0;i<names.length;i++){
			names[i].innerText=data[i].ccy
		}
		for (let i=0;i<base_names.length;i++){
			base_names[i].innerText=data[i].base_ccy
			base_names[i].style.color='grey'
		}



		for (let i=0;i<rate_buy.length;i++){
			rate_buy[i].innerText=(+data[i].buy).toFixed(2);
		}
	
		for (let i=0;i<rate_sale.length;i++){
			rate_sale[i].innerText=(+data[i].sale).toFixed(2);
		}

		
	})
