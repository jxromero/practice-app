import _ from "lodash";

export function tab(tabToShow, pageRange, currentTab) {
  const prevMid = Math.ceil(tabToShow / 2);
  const nextMid = pageRange.length - prevMid + 1;
  var tabs;
  if (currentTab <= prevMid) {
    tabs = 0;
  } else if (currentTab >= nextMid) {
    tabs = pageRange.length - tabToShow;
  } else {
    tabs = currentTab - prevMid;
  }
  return _(pageRange)
    .slice(tabs)
    .take(tabToShow)
    .value();
}
