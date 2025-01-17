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
 * @interface UpdateTagDto
 */
export interface UpdateTagDto {
    /**
     * 
     * @type {string}
     * @memberof UpdateTagDto
     */
    name?: string;
}

/**
 * Check if a given object implements the UpdateTagDto interface.
 */
export function instanceOfUpdateTagDto(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UpdateTagDtoFromJSON(json: any): UpdateTagDto {
    return UpdateTagDtoFromJSONTyped(json, false);
}

export function UpdateTagDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateTagDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
    };
}

export function UpdateTagDtoToJSON(value?: UpdateTagDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
    };
}

