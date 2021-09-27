/// <reference types="node" />
import { IncomingMessage, ServerResponse } from 'http';
import { NextApiRequest, NextApiResponse } from 'next';
import { ClientFactory } from '../auth0-session';
import { SessionCache } from '../session';
import { NextConfig } from '../config';
/**
 * Custom options to get an Access Token.
 *
 * @category Server
 */
export interface AccessTokenRequest {
    /**
     * A list of desired scopes for your Access Token.
     */
    scopes?: string[];
    /**
     * If set to `true`, a new Access Token will be requested with the Refresh Token grant, regardless of whether
     * the Access Token has expired or not.
     */
    refresh?: boolean;
}
/**
 * Response from requesting an Access Token.
 *
 * @category Server
 */
export interface GetAccessTokenResult {
    /**
     * Access token returned from the token cache.
     */
    accessToken?: string | undefined;
}
/**
 * Get an Access Token to access an external API.
 *
 * @category Server
 */
export declare type GetAccessToken = (req: IncomingMessage | NextApiRequest, res: ServerResponse | NextApiResponse, accessTokenRequest?: AccessTokenRequest) => Promise<GetAccessTokenResult>;
/**
 * @ignore
 */
export default function accessTokenFactory(config: NextConfig, getClient: ClientFactory, sessionCache: SessionCache): GetAccessToken;
//# sourceMappingURL=get-access-token.d.ts.map