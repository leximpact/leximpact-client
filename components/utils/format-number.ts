const formatNumber = (number: number, options: { sign?: boolean } = {}): string => {
  const str = number
    .toString()
    .replace(".", ",")
    // https://stackoverflow.com/a/32013016/3942056
    // (?=pattern) is the lookahead, \d{3} is 3 digits, and (pattern)+ meansrepeat the
    // last pattern one or more times (greedily) until a the end of the String $
    .replace(/(\d)(?=(\d{3})+$)/g, "$1 ");

  if (options.sign) {
    return `${number > 0 ? "+" : "-"} ${str}`;
  }

  return str;
};

export default formatNumber;
