export default function createActions(prefix, action) {
  return `${prefix}/${action}Action`;
}
