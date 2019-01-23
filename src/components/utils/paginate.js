import _ from "lodash";

export function paginate(item, current, count) {
  const toGet = (current - 1) * count;
  return _(item)
    .slice(toGet)
    .take(count)
    .value();
}
