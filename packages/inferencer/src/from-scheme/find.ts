import scheme from './scheme';

//@ts-ignore
function traverseAndFlatten(currentNode, target, flattenedKey) {
	for (var key in currentNode) {
		if (currentNode.hasOwnProperty(key)) {
			var newKey;
			if (flattenedKey === undefined) {
				newKey = key;
			} else {
				newKey = flattenedKey + '.' + key;
			}

			var value = currentNode[key];
			if (typeof value === "object") {
				traverseAndFlatten(value, target, newKey);
			} else {
				target[newKey] = value;
			}
		}
	}
}

//@ts-ignore
function flatten(obj) {
	var flattenedObject = {};
	//@ts-ignore
	traverseAndFlatten(obj, flattenedObject);
	return flattenedObject;
}

export const getSchemaByType = (name: string, type: string) => {
	console.log('type: ', type);

	const resourcePathInSchema = Object.keys(scheme.paths).find((path) => {
		return path.includes(name);
	}) as string;
	console.log('resourcePathInSchema: ', resourcePathInSchema);

//@ts-ignore
	const resourceSchema = scheme.paths[resourcePathInSchema];
	console.log('resourceSchema: ', resourceSchema);

	const flattenSchema = flatten(resourceSchema);
	console.log('flattenSchema: ', flattenSchema);

	const [ref] = Object.entries(flattenSchema)
		.filter(([key, value]) => {
				return key.includes('get.responses.200.content') && key.includes('data.items.$ref');
		})
		.map(([key, value]) => {
			return (value as string).split('/').at(-1);
		});

	console.log('ref: ', ref);

	//@ts-ignore
	const thisSchema = scheme.components.schemas[ref];
	console.log('thisSchema: ', thisSchema);
};
