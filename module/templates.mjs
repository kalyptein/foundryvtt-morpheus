export default function() {
	const partials = [
		"systems/morpheus/templates/actor/notes.hbs",
		"systems/morpheus/templates/actor/inventory.hbs",
		"systems/morpheus/templates/actor/properties.hbs",
	];

	const paths = {};
	for (const path of partials) {
		const [key] = path.split("/").slice(3).join("/").split(".");
		paths[key] = path;
	}

	return foundry.applications.handlebars.loadTemplates(paths);
}
