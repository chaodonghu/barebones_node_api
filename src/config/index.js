// Object.freeze makes the module emmutable and read-only
module.exports = Object.freeze({
  port: parseInt(process.env.PORT || 8080, 10)
});
