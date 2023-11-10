import { Construct } from "constructs";
import { Duration as CdkDuration } from "aws-cdk-lib/core";
import { Runtime, FunctionProps, Architecture } from "aws-cdk-lib/aws-lambda";
import { SsrSite, SsrSiteNormalizedProps, SsrSiteProps } from "./SsrSite.js";
import { Size } from "./util/size.js";
import { Bucket } from "aws-cdk-lib/aws-s3";
import { PolicyStatement } from "aws-cdk-lib/aws-iam";
import { RetentionDays } from "aws-cdk-lib/aws-logs";
import { CachePolicyProps } from "aws-cdk-lib/aws-cloudfront";
export interface NextjsSiteProps extends Omit<SsrSiteProps, "nodejs"> {
    /**
     * OpenNext version for building the Next.js site.
     * @default Latest OpenNext version
     * @example
     * ```js
     * openNextVersion: "2.2.4",
     * ```
     */
    openNextVersion?: string;
    /**
     * How the logs are stored in CloudWatch
     * - "combined" - Logs from all routes are stored in the same log group.
     * - "per-route" - Logs from each route are stored in a separate log group.
     * @default "per-route"
     * @example
     * ```js
     * logging: "combined",
     * ```
     */
    logging?: "combined" | "per-route";
    /**
     * The server function is deployed to Lambda in a single region. Alternatively, you can enable this option to deploy to Lambda@Edge.
     * @default false
     */
    edge?: boolean;
    imageOptimization?: {
        /**
         * The amount of memory in MB allocated for image optimization function.
         * @default 1024 MB
         * @example
         * ```js
         * imageOptimization: {
         *   memorySize: "512 MB",
         * }
         * ```
         */
        memorySize?: number | Size;
    };
    experimental?: {
        /**
         * Enable streaming. Currently an experimental feature in OpenNext.
         * @default false
         * @example
         * ```js
         * experimental: {
         *   streaming: true,
         * }
         * ```
         */
        streaming?: boolean;
        /**
         * Disabling incremental cache will cause the entire page to be revalidated on each request. This can result in ISR and SSG pages to be in an inconsistent state. Specify this option if you are using SSR pages only.
         *
         * Note that it is possible to disable incremental cache while leaving on-demand revalidation enabled.
         * @default false
         * @example
         * ```js
         * experimental: {
         *   disableIncrementalCache: true,
         * }
         */
        disableIncrementalCache?: boolean;
        /**
         * Disabling DynamoDB cache will cause on-demand revalidation by path (`revalidatePath`) and by cache tag (`revalidateTag`) to fail silently.
         * @default false
         * @example
         * ```js
         * experimental: {
         *   disableDynamoDBCache: true,
         * }
         * ```
         */
        disableDynamoDBCache?: boolean;
    };
    cdk?: SsrSiteProps["cdk"] & {
        revalidation?: Pick<FunctionProps, "vpc" | "vpcSubnets">;
        /**
         * Override the CloudFront cache policy properties for responses from the
         * server rendering Lambda.
         *
         * @default
         * By default, the cache policy is configured to cache all responses from
         * the server rendering Lambda based on the query-key only. If you're using
         * cookie or header based authentication, you'll need to override the
         * cache policy to cache based on those values as well.
         *
         * ```js
         * serverCachePolicy: new CachePolicy(this, "ServerCache", {
         *   queryStringBehavior: CacheQueryStringBehavior.all()
         *   headerBehavior: CacheHeaderBehavior.allowList(
         *     "accept",
         *     "rsc",
         *     "next-router-prefetch",
         *     "next-router-state-tree",
         *     "next-url",
         *   ),
         *   cookieBehavior: CacheCookieBehavior.none()
         *   defaultTtl: Duration.days(0)
         *   maxTtl: Duration.days(365)
         *   minTtl: Duration.days(0)
         * })
         * ```
         */
        serverCachePolicy?: NonNullable<SsrSiteProps["cdk"]>["serverCachePolicy"];
    };
}
type NextjsSiteNormalizedProps = NextjsSiteProps & SsrSiteNormalizedProps;
/**
 * The `NextjsSite` construct is a higher level CDK construct that makes it easy to create a Next.js app.
 * @example
 * Deploys a Next.js app in the `my-next-app` directory.
 *
 * ```js
 * new NextjsSite(stack, "web", {
 *   path: "my-next-app/",
 * });
 * ```
 */
export declare class NextjsSite extends SsrSite {
    props: NextjsSiteNormalizedProps;
    private _routes?;
    private routesManifest?;
    private appPathRoutesManifest?;
    private appPathsManifest?;
    private pagesManifest?;
    private prerenderManifest?;
    constructor(scope: Construct, id: string, rawProps?: NextjsSiteProps);
    static buildDefaultServerCachePolicyProps(): CachePolicyProps;
    protected plan(bucket: Bucket): {
        cloudFrontFunctions?: {
            serverCfFunction: {
                constructId: string;
                injections: string[];
            };
        } | undefined;
        edgeFunctions?: {
            edgeServer: {
                constructId: string;
                function: {
                    layers: import("aws-cdk-lib/aws-lambda").ILayerVersion[] | undefined;
                    handler: string;
                    bundle?: string | undefined;
                    runtime?: "nodejs14.x" | "nodejs16.x" | "nodejs18.x" | undefined;
                    timeout?: number | `${number} second` | `${number} seconds` | `${number} minute` | `${number} minutes` | `${number} hour` | `${number} hours` | `${number} day` | `${number} days` | undefined;
                    memorySize?: number | `${number} MB` | `${number} GB` | undefined;
                    permissions?: import("./index.js").Permissions | undefined;
                    environment?: Record<string, string> | undefined;
                    bind?: import("./Construct.js").SSTConstruct[] | undefined;
                    nodejs?: import("./Function.js").NodeJSProps | undefined;
                    copyFiles?: import("./Function.js").FunctionCopyFilesProps[] | undefined;
                    logRetention?: RetentionDays | undefined;
                    functionName?: string | undefined;
                    tracing?: import("aws-cdk-lib/aws-lambda").Tracing | undefined;
                    architecture?: Architecture | undefined;
                    description?: string | undefined;
                    ephemeralStorageSize?: import("aws-cdk-lib/core").Size | undefined;
                    initialPolicy?: PolicyStatement[] | undefined;
                    role?: import("aws-cdk-lib/aws-iam").IRole | undefined;
                    vpc?: import("aws-cdk-lib/aws-ec2").IVpc | undefined;
                    vpcSubnets?: import("aws-cdk-lib/aws-ec2").SubnetSelection | undefined;
                    securityGroups?: import("aws-cdk-lib/aws-ec2").ISecurityGroup[] | undefined;
                    allowAllOutbound?: boolean | undefined;
                    deadLetterQueueEnabled?: boolean | undefined;
                    deadLetterQueue?: import("aws-cdk-lib/aws-sqs").IQueue | undefined;
                    deadLetterTopic?: import("aws-cdk-lib/aws-sns").ITopic | undefined;
                    snapStart?: import("aws-cdk-lib/aws-lambda").SnapStartConf | undefined;
                    profiling?: boolean | undefined;
                    profilingGroup?: import("aws-cdk-lib/aws-codeguruprofiler").IProfilingGroup | undefined;
                    insightsVersion?: import("aws-cdk-lib/aws-lambda").LambdaInsightsVersion | undefined;
                    adotInstrumentation?: import("aws-cdk-lib/aws-lambda").AdotInstrumentationConfig | undefined;
                    paramsAndSecrets?: import("aws-cdk-lib/aws-lambda").ParamsAndSecretsLayerVersion | undefined;
                    reservedConcurrentExecutions?: number | undefined;
                    events?: import("aws-cdk-lib/aws-lambda").IEventSource[] | undefined;
                    logRetentionRole?: import("aws-cdk-lib/aws-iam").IRole | undefined;
                    logRetentionRetryOptions?: import("aws-cdk-lib/aws-lambda").LogRetentionRetryOptions | undefined;
                    currentVersionOptions?: import("aws-cdk-lib/aws-lambda").VersionOptions | undefined;
                    filesystem?: import("aws-cdk-lib/aws-lambda").FileSystem | undefined;
                    allowPublicSubnet?: boolean | undefined;
                    environmentEncryption?: import("aws-cdk-lib/aws-kms").IKey | undefined;
                    codeSigningConfig?: import("aws-cdk-lib/aws-lambda").ICodeSigningConfig | undefined;
                    runtimeManagementMode?: import("aws-cdk-lib/aws-lambda").RuntimeManagementMode | undefined;
                    onFailure?: import("aws-cdk-lib/aws-lambda").IDestination | undefined;
                    onSuccess?: import("aws-cdk-lib/aws-lambda").IDestination | undefined;
                    maxEventAge?: CdkDuration | undefined;
                    retryAttempts?: number | undefined;
                } | {
                    layers: import("aws-cdk-lib/aws-lambda").ILayerVersion[] | undefined;
                    handler: string;
                    bundle?: string | undefined;
                    runtime?: "nodejs14.x" | "nodejs16.x" | "nodejs18.x" | undefined;
                    timeout?: number | `${number} second` | `${number} seconds` | `${number} minute` | `${number} minutes` | `${number} hour` | `${number} hours` | `${number} day` | `${number} days` | undefined;
                    memorySize?: number | `${number} MB` | `${number} GB` | undefined;
                    permissions?: import("./index.js").Permissions | undefined;
                    /**
                     * How the logs are stored in CloudWatch
                     * - "combined" - Logs from all routes are stored in the same log group.
                     * - "per-route" - Logs from each route are stored in a separate log group.
                     * @default "per-route"
                     * @example
                     * ```js
                     * logging: "combined",
                     * ```
                     */
                    environment?: Record<string, string> | undefined;
                    bind?: import("./Construct.js").SSTConstruct[] | undefined;
                    nodejs?: import("./Function.js").NodeJSProps | undefined;
                    scopeOverride?: import("constructs").IConstruct | undefined;
                };
            };
        } | undefined;
        origins: {
            imageOptimizer: {
                type: "image-optimization-function";
                constructId: string;
                function: {
                    description: string;
                    handler: string;
                    code: import("aws-cdk-lib/aws-lambda").AssetCode;
                    runtime: Runtime;
                    architecture: Architecture;
                    environment: {
                        BUCKET_NAME: string;
                        BUCKET_KEY_PREFIX: string;
                    };
                    memorySize: number;
                };
            };
            s3: {
                type: "s3";
                originPath: string;
                copy: ({
                    from: string;
                    to: string;
                    cached: true;
                    versionedSubDir: string;
                } | {
                    from: string;
                    to: string;
                    cached: false;
                    versionedSubDir?: undefined;
                })[];
            };
            regionalServer?: {
                type: "function";
                constructId: string;
                function: {
                    layers: import("aws-cdk-lib/aws-lambda").ILayerVersion[] | undefined;
                    handler: string;
                    bundle?: string | undefined;
                    runtime?: "nodejs14.x" | "nodejs16.x" | "nodejs18.x" | undefined;
                    timeout?: number | `${number} second` | `${number} seconds` | `${number} minute` | `${number} minutes` | `${number} hour` | `${number} hours` | `${number} day` | `${number} days` | undefined;
                    memorySize?: number | `${number} MB` | `${number} GB` | undefined;
                    permissions?: import("./index.js").Permissions | undefined;
                    environment?: Record<string, string> | undefined;
                    bind?: import("./Construct.js").SSTConstruct[] | undefined;
                    nodejs?: import("./Function.js").NodeJSProps | undefined;
                    copyFiles?: import("./Function.js").FunctionCopyFilesProps[] | undefined;
                    logRetention?: RetentionDays | undefined;
                    functionName?: string | undefined;
                    tracing?: import("aws-cdk-lib/aws-lambda").Tracing | undefined;
                    architecture?: Architecture | undefined;
                    description?: string | undefined;
                    ephemeralStorageSize?: import("aws-cdk-lib/core").Size | undefined;
                    initialPolicy?: PolicyStatement[] | undefined;
                    role?: import("aws-cdk-lib/aws-iam").IRole | undefined;
                    vpc?: import("aws-cdk-lib/aws-ec2").IVpc | undefined;
                    vpcSubnets?: import("aws-cdk-lib/aws-ec2").SubnetSelection | undefined;
                    securityGroups?: import("aws-cdk-lib/aws-ec2").ISecurityGroup[] | undefined;
                    allowAllOutbound?: boolean | undefined;
                    deadLetterQueueEnabled?: boolean | undefined;
                    deadLetterQueue?: import("aws-cdk-lib/aws-sqs").IQueue | undefined;
                    deadLetterTopic?: import("aws-cdk-lib/aws-sns").ITopic | undefined;
                    snapStart?: import("aws-cdk-lib/aws-lambda").SnapStartConf | undefined;
                    profiling?: boolean | undefined;
                    profilingGroup?: import("aws-cdk-lib/aws-codeguruprofiler").IProfilingGroup | undefined;
                    insightsVersion?: import("aws-cdk-lib/aws-lambda").LambdaInsightsVersion | undefined;
                    adotInstrumentation?: import("aws-cdk-lib/aws-lambda").AdotInstrumentationConfig | undefined;
                    paramsAndSecrets?: import("aws-cdk-lib/aws-lambda").ParamsAndSecretsLayerVersion | undefined;
                    reservedConcurrentExecutions?: number | undefined;
                    events?: import("aws-cdk-lib/aws-lambda").IEventSource[] | undefined;
                    logRetentionRole?: import("aws-cdk-lib/aws-iam").IRole | undefined;
                    logRetentionRetryOptions?: import("aws-cdk-lib/aws-lambda").LogRetentionRetryOptions | undefined;
                    currentVersionOptions?: import("aws-cdk-lib/aws-lambda").VersionOptions | undefined;
                    filesystem?: import("aws-cdk-lib/aws-lambda").FileSystem | undefined;
                    allowPublicSubnet?: boolean | undefined;
                    environmentEncryption?: import("aws-cdk-lib/aws-kms").IKey | undefined;
                    codeSigningConfig?: import("aws-cdk-lib/aws-lambda").ICodeSigningConfig | undefined;
                    runtimeManagementMode?: import("aws-cdk-lib/aws-lambda").RuntimeManagementMode | undefined;
                    onFailure?: import("aws-cdk-lib/aws-lambda").IDestination | undefined;
                    onSuccess?: import("aws-cdk-lib/aws-lambda").IDestination | undefined;
                    maxEventAge?: CdkDuration | undefined;
                    retryAttempts?: number | undefined;
                } | {
                    layers: import("aws-cdk-lib/aws-lambda").ILayerVersion[] | undefined;
                    handler: string;
                    bundle?: string | undefined;
                    runtime?: "nodejs14.x" | "nodejs16.x" | "nodejs18.x" | undefined;
                    timeout?: number | `${number} second` | `${number} seconds` | `${number} minute` | `${number} minutes` | `${number} hour` | `${number} hours` | `${number} day` | `${number} days` | undefined;
                    memorySize?: number | `${number} MB` | `${number} GB` | undefined;
                    permissions?: import("./index.js").Permissions | undefined;
                    /**
                     * How the logs are stored in CloudWatch
                     * - "combined" - Logs from all routes are stored in the same log group.
                     * - "per-route" - Logs from each route are stored in a separate log group.
                     * @default "per-route"
                     * @example
                     * ```js
                     * logging: "combined",
                     * ```
                     */
                    environment?: Record<string, string> | undefined;
                    bind?: import("./Construct.js").SSTConstruct[] | undefined;
                    nodejs?: import("./Function.js").NodeJSProps | undefined;
                    scopeOverride?: import("constructs").IConstruct | undefined;
                };
                streaming: boolean | undefined;
            } | undefined;
        };
        edge: boolean;
        behaviors: {
            cacheType: "server" | "static";
            pattern?: string | undefined;
            origin: "s3" | "regionalServer" | "imageOptimizer";
            allowedMethods?: import("aws-cdk-lib/aws-cloudfront").AllowedMethods | undefined;
            cfFunction?: "serverCfFunction" | undefined;
            edgeFunction?: "edgeServer" | undefined;
        }[];
        errorResponses?: import("aws-cdk-lib/aws-cloudfront").ErrorResponse[] | undefined;
        cachePolicyAllowedHeaders?: string[] | undefined;
        buildId?: string | undefined;
        warmerConfig?: {
            function: string;
            schedule?: import("aws-cdk-lib/aws-events").Schedule | undefined;
        } | undefined;
    };
    private createRevalidationQueue;
    private createRevalidationTable;
    getConstructMetadata(): {
        type: "NextjsSite";
        data: {
            routes: {
                logGroupPrefix: string;
                data: {
                    route: string;
                    logGroupPath: string;
                }[];
            } | undefined;
            mode: "placeholder" | "deployed";
            path: string;
            runtime: "nodejs14.x" | "nodejs16.x" | "nodejs18.x";
            customDomainUrl: string | undefined;
            url: string | undefined;
            edge: boolean | undefined;
            server: string;
            secrets: string[];
        };
    };
    private wrapServerFunction;
    private removeSourcemaps;
    private useRoutes;
    private useRoutesManifest;
    private useAppPathRoutesManifest;
    private useAppPathsManifest;
    private usePagesManifest;
    private usePrerenderManifest;
    private getBuildId;
    private getSourcemapForAppRoute;
    private getSourcemapForPagesRoute;
    private isPerRouteLoggingEnabled;
    private handleMissingSourcemap;
    private disableDefaultLogging;
    private uploadSourcemaps;
    private static buildCloudWatchRouteName;
    private static buildCloudWatchRouteHash;
    static _test: {
        buildCloudWatchRouteName: typeof NextjsSite.buildCloudWatchRouteName;
    };
}
export {};
