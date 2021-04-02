/* tslint:disable */
/* eslint-disable */
/**
* @param {Uint8Array} img_arr
* @param {Uint8Array} ori_arr
* @param {ShapeTupleStruct} img_shape
* @param {number} alpha
* @param {Uint8Array} output
*/
export function extract_mark_with_ori(img_arr: Uint8Array, ori_arr: Uint8Array, img_shape: ShapeTupleStruct, alpha: number, output: Uint8Array): void;
/**
* @param {Uint8Array} img_arr
* @param {ShapeTupleStruct} img_shape
* @param {Uint8Array} mark_arr
* @param {ShapeTupleStruct} mark_shape
* @param {number} alpha
*/
export function sign_img(img_arr: Uint8Array, img_shape: ShapeTupleStruct, mark_arr: Uint8Array, mark_shape: ShapeTupleStruct, alpha: number): void;
/**
* @param {Uint8ClampedArray} img_arr
* @param {ShapeTupleStruct} img_shape
* @param {Uint8ClampedArray} mark_arr
* @param {ShapeTupleStruct} mark_shape
* @param {number} alpha
*/
export function sign_img_adapt(img_arr: Uint8ClampedArray, img_shape: ShapeTupleStruct, mark_arr: Uint8ClampedArray, mark_shape: ShapeTupleStruct, alpha: number): void;
/**
*/
export class ShapeTupleStruct {
  free(): void;
/**
* @param {number} width
* @param {number} height
* @returns {ShapeTupleStruct}
*/
  static new(width: number, height: number): ShapeTupleStruct;
/**
* @returns {number}
*/
  0: number;
/**
* @returns {number}
*/
  1: number;
}
