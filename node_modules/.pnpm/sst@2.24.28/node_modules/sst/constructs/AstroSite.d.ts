import { SsrSite } from "./SsrSite.js";
import { SsrFunction } from "./SsrFunction.js";
import { EdgeFunction } from "./EdgeFunction.js";
/**
 * The `AstroSite` construct is a higher level CDK construct that makes it easy to create a Astro app.
 * @example
 * Deploys a Astro app in the `my-astro-app` directory.
 *
 * ```js
 * new AstroSite(stack, "web", {
 *   path: "my-astro-app/",
 * });
 * ```
 */
export declare class AstroSite extends SsrSite {
    protected initBuildConfig(): {
        typesPath: string;
        serverBuildOutputFile: string;
        clientBuildOutputDir: string;
        clientBuildVersionedSubDir: string;
    };
    protected validateBuildOutput(): void;
    protected createFunctionForRegional(): SsrFunction;
    protected createFunctionForEdge(): EdgeFunction;
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
        type: "AstroSite";
    };
    protected supportsStreaming(): boolean;
}
