export default function ({ Plugin, types: t }) {
  return new Plugin("property-literals", {
    metadata: {
      group: "builtin-trailing"
    },
    
    visitor: {
      Property: {
        exit(node) {
          var key = node.key;
          if (t.isLiteral(key) && t.isValidIdentifier(key.value)) {
            // "foo": "bar" -> foo: "bar"
            node.key = t.identifier(key.value);
            node.computed = false;
          }
        }
      }
    }
  });
}