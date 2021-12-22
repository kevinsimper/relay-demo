/**
 * @generated SignedSource<<113c01ff118a90409f6ae5bbb1afd0e8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type diskusage_MyComponent$data = {
  readonly diskUsage: number | null;
  readonly " $fragmentType": "diskusage_MyComponent";
};
export type diskusage_MyComponent$key = {
  readonly " $data"?: diskusage_MyComponent$data;
  readonly " $fragmentSpreads": FragmentRefs<"diskusage_MyComponent">;
};

const node: ReaderFragment = {
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

(node as any).hash = "ce72f8fb1b6a76c0ea44d9a106fca047";

export default node;
