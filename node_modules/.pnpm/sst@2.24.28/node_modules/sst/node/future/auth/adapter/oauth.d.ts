import { BaseClient, Issuer, TokenSet } from "openid-client";
export interface OauthBasicConfig {
    /**
     * The clientID provided by the third party oauth service
     */
    clientID: string;
    /**
     * The clientSecret provided by the third party oauth service
     */
    clientSecret: string;
    /**
     * Various scopes requested for the access token
     */
    scope: string;
    /**
     * Determines whether users will be prompted for reauthentication and consent
     */
    prompt?: string;
    /**
     * Additional parameters to be passed to the authorization endpoint
     */
    params?: Record<string, string>;
}
export interface OauthConfig extends OauthBasicConfig {
    issuer: Issuer;
}
export declare const OauthAdapter: (config: OauthConfig) => () => Promise<{
    type: "success";
    properties: {
        tokenset: TokenSet;
        client: BaseClient;
    };
} | {
    type: "step";
    properties: {
        statusCode: number;
        headers: {
            location: string;
        };
    };
}>;
