module.exports = (str) => {
  const distinct = (value, index, self) => {
    return self.indexOf(value) === index;
  };
  str = str.replace(/([^a-zA-Z0-9&.'-]+|[.&'-]+[.&'-]|\s[&.'-]|[&.'-]\s|[&.'-]{1}$)/gm, " ");
  str = str.replace(/[.]/gm, "");
  str = str.split(/\s+/g).filter(distinct);
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "") {
      str.splice(i, 1);
    }
  }
  return str;
};
