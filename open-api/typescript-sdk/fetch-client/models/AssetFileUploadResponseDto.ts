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
 * @interface AssetFileUploadResponseDto
 */
export interface AssetFileUploadResponseDto {
    /**
     * 
     * @type {boolean}
     * @memberof AssetFileUploadResponseDto
     */
    duplicate: boolean;
    /**
     * 
     * @type {string}
     * @memberof AssetFileUploadResponseDto
     */
    id: string;
}

/**
 * Check if a given object implements the AssetFileUploadResponseDto interface.
 */
export function instanceOfAssetFileUploadResponseDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "duplicate" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function AssetFileUploadResponseDtoFromJSON(json: any): AssetFileUploadResponseDto {
    return AssetFileUploadResponseDtoFromJSONTyped(json, false);
}

export function AssetFileUploadResponseDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): AssetFileUploadResponseDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'duplicate': json['duplicate'],
        'id': json['id'],
    };
}

export function AssetFileUploadResponseDtoToJSON(value?: AssetFileUploadResponseDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'duplicate': value.duplicate,
        'id': value.id,
    };
}

