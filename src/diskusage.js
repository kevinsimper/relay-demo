import React from "react";
import { useFragment } from "react-relay";
import graphql from "babel-plugin-relay/macro";

export function DiskUsageComponent(props) {
  const data = useFragment(
    graphql`
      fragment diskusage_MyComponent on Repository {
        diskUsage
      }
    `,
    props.repository
  );

  return <div>{data.diskUsage}</div>;
}
