import * as React from "react";
import Image from "./Image";

import { graphql } from 'relay-runtime';
import { useFragment } from "react-relay";
import { PosterBylineFragment$key } from "./__generated__/PosterBylineFragment.graphql";

export type Props = {
  story: PosterBylineFragment$key
};

const PosterBylineFragment = graphql`
  fragment PosterBylineFragment on Actor {
    name
    profilePicture {
      ...ImageFragment @arguments(width: 60, height: 60)
    }
  }
`;

export default function PosterByline({ story }: Props): React.ReactElement {
  if (story == null) {
    return null;
  }

  const data = useFragment(
    PosterBylineFragment,
    story
  )

  return (
    <div className="byline">
      <Image
        image={data.profilePicture}
        width={60}
        height={60}
        className="byline__image"
      />
      <div className="byline__name">{data.name}</div>
    </div>
  );
}
