export default {

  isArray(obj) {
    return Array.isArray(obj);
  },


  each(obj, callback) {
    let i;

    if (this.isArray(obj)) {
      let len = obj.length;

      for (i = 0; i < len; i++) {
        if (callback(obj[i], i, obj) === false) {
            break;
        }
      }
    } else {
      for (i in obj) {
        if (callback(obj[i], i, obj) === false) {
            break;
        }
      }
    }

    return obj;
  }
};
