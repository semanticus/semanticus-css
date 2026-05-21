import { packageProps } from "./package-props";

export function cdnBaseUrl(path: string): string {
	return `https://cdn.jsdelivr.net/npm/@semanticus/semanticus-css@${packageProps.version}${path}`;
}
