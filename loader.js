let $body = document.querySelector('body')
let $head = document.querySelector('head')

let scripts = ['header','main_js','conv','weather','oracul','covid_19']
let css_list = ['main','conv','weather','bootstrap']

for(let i=0;i<scripts.length;i++){
	let script = document.createElement('script');
	script.setAttribute('src',`scripts/${scripts[i]}.js`)
	$body.insertAdjacentElement('afterend',script)
}

for(let i=0;i<css_list.length;i++){
	let link = document.createElement('link');
	link.setAttribute('href',`css/${css_list[i]}.css`)
	link.setAttribute('rel','stylesheet')
	$head.insertAdjacentElement('beforeend',link)
}