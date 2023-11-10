import { SsrSite } from "./SsrSite.js";
import { SsrFunction } from "./SsrFunction.js";
import { EdgeFunction } from "./EdgeFunction.js";
/**
 * The `SolidStartSite` construct is a higher level CDK construct that makes it easy to create a SolidStart app.
 * @example
 * Deploys a SolidStart app in the `my-solid-start-app` directory.
 *
 * ```js
 * new SolidStartSite(stack, "web", {
 *   path: "my-solid-start-app/",
 * });
 * ```
 */
export declare class SolidStartSite extends SsrSite {
    protected initBuildConfig(): {
        typesPath: string;
        serverBuildOutputFile: string;
        clientBuildOutputDir: string;
        clientBuildVersionedSubDir: string;
    };
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
        type: "SolidStartSite";
    };
}
