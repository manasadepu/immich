/* tslint:disable */
/* eslint-disable */
/**
 * Immich
 * Immich API
 *
 * The version of the OpenAPI document: 1.94.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface DownloadArchiveInfo
 */
export interface DownloadArchiveInfo {
    /**
     * 
     * @type {Array<string>}
     * @memberof DownloadArchiveInfo
     */
    assetIds: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof DownloadArchiveInfo
     */
    size: number;
}

/**
 * Check if a given object implements the DownloadArchiveInfo interface.
 */
export function instanceOfDownloadArchiveInfo(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "assetIds" in value;
    isInstance = isInstance && "size" in value;

    return isInstance;
}

export function DownloadArchiveInfoFromJSON(json: any): DownloadArchiveInfo {
    return DownloadArchiveInfoFromJSONTyped(json, false);
}

export function DownloadArchiveInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): DownloadArchiveInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'assetIds': json['assetIds'],
        'size': json['size'],
    };
}

export function DownloadArchiveInfoToJSON(value?: DownloadArchiveInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'assetIds': value.assetIds,
        'size': value.size,
    };
}

