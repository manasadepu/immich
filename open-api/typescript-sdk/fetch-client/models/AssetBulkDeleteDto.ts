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
 * @interface AssetBulkDeleteDto
 */
export interface AssetBulkDeleteDto {
    /**
     * 
     * @type {boolean}
     * @memberof AssetBulkDeleteDto
     */
    force?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof AssetBulkDeleteDto
     */
    ids: Array<string>;
}

/**
 * Check if a given object implements the AssetBulkDeleteDto interface.
 */
export function instanceOfAssetBulkDeleteDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "ids" in value;

    return isInstance;
}

export function AssetBulkDeleteDtoFromJSON(json: any): AssetBulkDeleteDto {
    return AssetBulkDeleteDtoFromJSONTyped(json, false);
}

export function AssetBulkDeleteDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): AssetBulkDeleteDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'force': !exists(json, 'force') ? undefined : json['force'],
        'ids': json['ids'],
    };
}

export function AssetBulkDeleteDtoToJSON(value?: AssetBulkDeleteDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'force': value.force,
        'ids': value.ids,
    };
}

