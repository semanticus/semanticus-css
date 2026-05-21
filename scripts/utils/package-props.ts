import packageJson from "../../package.json";

export const packageProps = {
	name: packageJson.name,
	version: packageJson.version,
	author: packageJson.author || "Joao Goncalves",
	slug: packageJson.name.split("/").pop()!,
	encodedName: packageJson.name.replace("/", "%2F"),
};
