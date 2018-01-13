const isArray = v => (Object.prototype.toString.call(v) === '[object Array]');
const isObject = v => (Object.prototype.toString.call(v) === '[object Object]');

/**
 * Validates a object against a passed schema
 */
const validateScheme = (object, schema) =>
  Object.keys(schema).map(prop =>
    [prop, schema[prop](object[prop])]
  ).reduce((errors, pair) => {
    (!pair[1]) && errors.push(`${pair[0]} is invalid`);
    return errors;
  }, []);

/**
 * Schema containing the rules for a lang object
 */
const languageSchema = {
  showMore: val => (typeof val === 'string'),

  dayNameLong: val => (isArray(val) && val.length > 6),
  dayNameShort: val => (isArray(val) && val.length > 6),

  monthNameLong: val => (isArray(val) && val.length > 11),
  monthNameShort: val => (isArray(val) && val.length > 11)
};

/**
 * Validates a set of language objects and returns a list containing the keys
 * of valid objects.
 */
export default (langObjects) => {
  if (!isObject(langObjects) || !Object.keys(langObjects).length) {
    return [];
  }

  return Object.keys(langObjects).map(key => [
    key,
    validateScheme(langObjects[key], languageSchema)
  ]).reduce((valid, pair) => {
    (pair[1].length === 0) && valid.push(pair[0]);
    return valid;
  }, []);
};
