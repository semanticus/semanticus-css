import { npmRegistryBaseUrl } from "./npm-registry-base-url";
import { packageProps } from "./package-props";

export function npmRegistryTarballUrl(
	version: string = packageProps.version,
): string {
	return npmRegistryBaseUrl(`/-/${packageProps.slug}-${version}.tgz`);
}
