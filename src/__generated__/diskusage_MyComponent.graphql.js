/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type diskusage_MyComponent$ref: FragmentReference;
declare export opaque type diskusage_MyComponent$fragmentType: diskusage_MyComponent$ref;
export type diskusage_MyComponent = {|
  +diskUsage: ?number,
  +$refType: diskusage_MyComponent$ref,
|};
export type diskusage_MyComponent$data = diskusage_MyComponent;
export type diskusage_MyComponent$key = {
  +$data?: diskusage_MyComponent$data,
  +$fragmentRefs: diskusage_MyComponent$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "diskusage_MyComponent",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "diskUsage",
      "storageKey": null
    }
  ],
  "type": "Repository",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = 'ce72f8fb1b6a76c0ea44d9a106fca047';

module.exports = node;
