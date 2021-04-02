import * as wasm from './iltonmi_watermark_bg.wasm';

const heap = new Array(32).fill(undefined);

heap.push(undefined, null, true, false);

function getObject(idx) { return heap[idx]; }

let heap_next = heap.length;

function dropObject(idx) {
    if (idx < 36) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}

const lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;

let cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachegetUint8Memory0 = null;
function getUint8Memory0() {
    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

let WASM_VECTOR_LEN = 0;

function passArray8ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 1);
    getUint8Memory0().set(arg, ptr / 1);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}

function _assertClass(instance, klass) {
    if (!(instance instanceof klass)) {
        throw new Error(`expected instance of ${klass.name}`);
    }
    return instance.ptr;
}
/**
* @param {Uint8Array} img_arr
* @param {Uint8Array} ori_arr
* @param {ShapeTupleStruct} img_shape
* @param {number} alpha
* @param {Uint8Array} output
*/
export function extract_mark_with_ori(img_arr, ori_arr, img_shape, alpha, output) {
    try {
        var ptr0 = passArray8ToWasm0(img_arr, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ptr1 = passArray8ToWasm0(ori_arr, wasm.__wbindgen_malloc);
        var len1 = WASM_VECTOR_LEN;
        _assertClass(img_shape, ShapeTupleStruct);
        var ptr2 = img_shape.ptr;
        img_shape.ptr = 0;
        var ptr3 = passArray8ToWasm0(output, wasm.__wbindgen_malloc);
        var len3 = WASM_VECTOR_LEN;
        wasm.extract_mark_with_ori(ptr0, len0, ptr1, len1, ptr2, alpha, ptr3, len3);
    } finally {
        img_arr.set(getUint8Memory0().subarray(ptr0 / 1, ptr0 / 1 + len0));
        wasm.__wbindgen_free(ptr0, len0 * 1);
        ori_arr.set(getUint8Memory0().subarray(ptr1 / 1, ptr1 / 1 + len1));
        wasm.__wbindgen_free(ptr1, len1 * 1);
        output.set(getUint8Memory0().subarray(ptr3 / 1, ptr3 / 1 + len3));
        wasm.__wbindgen_free(ptr3, len3 * 1);
    }
}

/**
* @param {Uint8Array} img_arr
* @param {ShapeTupleStruct} img_shape
* @param {Uint8Array} mark_arr
* @param {ShapeTupleStruct} mark_shape
* @param {number} alpha
*/
export function sign_img(img_arr, img_shape, mark_arr, mark_shape, alpha) {
    try {
        var ptr0 = passArray8ToWasm0(img_arr, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        _assertClass(img_shape, ShapeTupleStruct);
        var ptr1 = img_shape.ptr;
        img_shape.ptr = 0;
        var ptr2 = passArray8ToWasm0(mark_arr, wasm.__wbindgen_malloc);
        var len2 = WASM_VECTOR_LEN;
        _assertClass(mark_shape, ShapeTupleStruct);
        var ptr3 = mark_shape.ptr;
        mark_shape.ptr = 0;
        wasm.sign_img(ptr0, len0, ptr1, ptr2, len2, ptr3, alpha);
    } finally {
        img_arr.set(getUint8Memory0().subarray(ptr0 / 1, ptr0 / 1 + len0));
        wasm.__wbindgen_free(ptr0, len0 * 1);
        mark_arr.set(getUint8Memory0().subarray(ptr2 / 1, ptr2 / 1 + len2));
        wasm.__wbindgen_free(ptr2, len2 * 1);
    }
}

/**
* @param {Uint8ClampedArray} img_arr
* @param {ShapeTupleStruct} img_shape
* @param {Uint8ClampedArray} mark_arr
* @param {ShapeTupleStruct} mark_shape
* @param {number} alpha
*/
export function sign_img_adapt(img_arr, img_shape, mark_arr, mark_shape, alpha) {
    _assertClass(img_shape, ShapeTupleStruct);
    var ptr0 = img_shape.ptr;
    img_shape.ptr = 0;
    _assertClass(mark_shape, ShapeTupleStruct);
    var ptr1 = mark_shape.ptr;
    mark_shape.ptr = 0;
    wasm.sign_img_adapt(addHeapObject(img_arr), ptr0, addHeapObject(mark_arr), ptr1, alpha);
}

/**
*/
export class ShapeTupleStruct {

    static __wrap(ptr) {
        const obj = Object.create(ShapeTupleStruct.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_shapetuplestruct_free(ptr);
    }
    /**
    * @returns {number}
    */
    get 0() {
        var ret = wasm.__wbg_get_shapetuplestruct_0(this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} arg0
    */
    set 0(arg0) {
        wasm.__wbg_set_shapetuplestruct_0(this.ptr, arg0);
    }
    /**
    * @returns {number}
    */
    get 1() {
        var ret = wasm.__wbg_get_shapetuplestruct_1(this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} arg0
    */
    set 1(arg0) {
        wasm.__wbg_set_shapetuplestruct_1(this.ptr, arg0);
    }
    /**
    * @param {number} width
    * @param {number} height
    * @returns {ShapeTupleStruct}
    */
    static new(width, height) {
        var ret = wasm.shapetuplestruct_new(width, height);
        return ShapeTupleStruct.__wrap(ret);
    }
}

export const __wbindgen_object_drop_ref = function(arg0) {
    takeObject(arg0);
};

export const __wbg_buffer_bc64154385c04ac4 = function(arg0) {
    var ret = getObject(arg0).buffer;
    return addHeapObject(ret);
};

export const __wbg_length_19d18b6bc04503c8 = function(arg0) {
    var ret = getObject(arg0).length;
    return ret;
};

export const __wbg_new_e0158f0dbcc01d9c = function(arg0) {
    var ret = new Uint8ClampedArray(getObject(arg0));
    return addHeapObject(ret);
};

export const __wbg_set_033ae99511fe4e0e = function(arg0, arg1, arg2) {
    getObject(arg0).set(getObject(arg1), arg2 >>> 0);
};

export const __wbindgen_throw = function(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
};

export const __wbindgen_memory = function() {
    var ret = wasm.memory;
    return addHeapObject(ret);
};

