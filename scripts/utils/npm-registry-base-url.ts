import { packageProps } from "./package-props";

export function npmRegistryBaseUrl(path: string): string {
	return `https://registry.npmjs.org/${packageProps.encodedName}${path}`;
}
