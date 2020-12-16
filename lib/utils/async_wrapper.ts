/*
 * lib/utils/async_wrapper.ts
 * Description: Quick and dirty "useState - like" wrapper function for Promises
 * Copyright (c) 2020 Mark Fehrenbacher
 */

const AsyncWrapper = async (promise: Promise<any>): Promise<any> => {
  return promise.then((data) => [null, data]).catch((err) => [err, null])
}

export default AsyncWrapper
