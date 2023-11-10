import { SsrSite } from "./SsrSite.js";
import { SsrFunction } from "./SsrFunction.js";
import { EdgeFunction } from "./EdgeFunction.js";
/**
 * The `SvelteKitSite` construct is a higher level CDK construct that makes it easy to create a SvelteKit app.
 * @example
 * Deploys a SvelteKit app in the `my-svelte-app` directory.
 *
 * ```js
 * new SvelteKitSite(stack, "web", {
 *   path: "my-svelte-app/",
 * });
 * ```
 */
export declare class SvelteKitSite extends SsrSite {
    protected initBuildConfig(): {
        typesPath: string;
        serverBuildOutputFile: string;
        serverCFFunctionInjection: string;
        clientBuildOutputDir: string;
        clientBuildVersionedSubDir: string;
        prerenderedBuildOutputDir: string;
    };
    protected createFunctionForRegional(): SsrFunction;
    protected createFunctionForEdge(): EdgeFunction;
    protected generateBuildId(): any;
    getConstructMetadata(): {
        data: {
            mode: "placeholder" | "deployed";
            path: string;
            runtime: "nodejs14.x" | "nodejs16.x" | "nodejs18.x";
            customDomainUrl: string | undefined;
            url: string | undefined;
            edge: boolean | undefined;
            server: string;
            secrets: string[];
        };
        type: "SvelteKitSite";
    };
}
