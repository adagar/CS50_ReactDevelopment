const o = {
	a: 'a',
	b: 'b',
	obj: {
		key: 'key'
	}
}

const o2 = o;

o.a = 'new value';

console.log(o2.a);

//or to make it a copy, so it doesn't mutate




//cpy even if there are objects in objects
function deepCopy(obj) {
	//check if object
	//is so, deep copy that object
	//else, return value
	const keys = Object.keys(obj);

	const newObj = {};

	for(let i = 0; i < keys.length; i++)
	{
		const key = keys[i];
		if(typeof(obj[key]) === 'object') {
			newObj[key] = deepCopy(obj[key]);
		} else {
			newObj[key] = obj[key];
		}
	}
	return newObj
}

const o3 = deepCopy(o);
o3.obj.key = 'new value';

console.log(o.obj.key);