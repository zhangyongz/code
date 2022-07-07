function getEmpty(o){
	if(Object.prototype.toString.call(o) === '[object Object]'){
		return {};
	}
	if(Object.prototype.toString.call(o) === '[object Array]'){
		return [];
	}
	return o;
}

function deepCopyBFS(origin){
	let queue = [];
	let map = new Map();

	let target = getEmpty(origin);
	if(target !== origin){
		queue.push([origin, target]);
		map.set(origin, target);
	}

	while(queue.length){
		let [ori, tar] = queue.shift();
		for(let key in ori){
			// 处理环状
			if(map.get(ori[key])){
				tar[key] = map.get(ori[key]);
				continue;
			}

			tar[key] = getEmpty(ori[key]);
			if(tar[key] !== ori[key]){
				queue.push([ori[key], tar[key]]);
				map.set(ori[key], tar[key]);
			}
		}
	}

	return target;
}

function deepCopyDFS(origin, map=new Map()) {
  if (map.get(origin)) {
    return map.get(origin)
  }
  let target = getEmpty(origin)
  if (origin !== target) {
    for (const key in origin) {
      if (Object.hasOwnProperty.call(origin, key)) {
        target[key] = deepCopyDFS(origin[key], map)
      }
    }
  }
  return target
}