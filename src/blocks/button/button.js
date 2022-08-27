o2.button =
{
	buttonInit()
	{
		let button = document.querySelector('._button__submit');

		let countOfElems = Math.floor(Math.random() * (20 - 10) + 10);
		for(let i=0; i<countOfElems; i++)
		{
			let object = document.createElement('div');
			object.className = "button__elem";
			object.style.top = Math.floor(Math.random() * (150 - (-150)) + (-150)) + 'px';
			object.style.left = Math.floor(Math.random() * (300 - (-100)) + (-100)) + 'px';
			object.style.width = Math.floor(Math.random() * (20 - 10) + 10) + 'px';
			object.style.height = object.style.width;
			button.append(object);
		}
	},
	buttonClick(elem)
	{
		let objects = (elem.querySelectorAll('.button__elem'));
		for (object of objects)
		{
			object.classList.add("anim");
			setTimeout(() =>
			{
				for (object of objects)
				{
					object.classList.remove("anim");
				}
			}, 500);
		}
	}
};
