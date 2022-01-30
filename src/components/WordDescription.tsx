import React from "react";

import { OverlayTrigger, Tooltip } from "react-bootstrap";

type Props = {
  definitions: string[];
  pos: string;
};

export default function WordDescription(props: Props) {
  return (
    <div className="wordDescriptionDiv">
      <OverlayTrigger
        placement={"right"}
        overlay={<Tooltip>Get random word with this part of speech</Tooltip>}
      >
        <h5 className="posH5">{props.pos}</h5>
      </OverlayTrigger>
      {props.definitions.map((des) => {
        return <p key={des}>{des}</p>;
      })}
    </div>
  );
}
