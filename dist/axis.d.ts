// Type definitions for axis.js
// Project: axis.js
// Project by: toddmotto
// Definitions by: glitch452

/**
 * Usage: import axis from 'axis.js';
 */
declare namespace axis {

    /**
     * axis.type( "item" ); // "String"
     */
    export function type(elem: any): string;

    /**
     * axis.isArray( [] ); // true
     */
    export function isArray(elem: any): boolean;

    /**
     * axis.isObject( {} ); // true
     */
    export function isObject(elem: any): boolean;

    /**
     * axis.isString( '' ); // true
     */
    export function isString(elem: any): boolean;

    /**
     * axis.isDate( new Date() ); // true
     */
    export function isDate(elem: any): boolean;

    /**
     * axis.isRegExp( /test/i ); // true
     */
    export function isRegExp(elem: any): boolean;

    /**
     * axis.isFunction( function () {} ); // true
     */
    export function isFunction(elem: any): boolean;

    /**
     * axis.isBoolean( true ); // true
     */
    export function isBoolean(elem: any): boolean;

    /**
     * axis.isNumber( 1 ); // true
     */
    export function isNumber(elem: any): boolean;

    /**
     * axis.isNull( null ); // true
     */
    export function isNull(elem: any): boolean;

    /**
     * axis.isUndefined(); // true
     */
    export function isUndefined(elem: any): boolean;

}

export = axis;
