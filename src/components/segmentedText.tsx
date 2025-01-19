import { segmentize } from "@atcute/bluesky-richtext-segmenter";
import { AppBskyRichtextFacet } from "@atcute/client/lexicons";
import React from "preact/compat";

interface SegmentedInput {
  text: string;
  facets: AppBskyRichtextFacet.Main[];
}

export function SplitText({ text }: { text: string }) {
  console.log(text);
  return (
    <>
      {text.split("\n").map((line, i) => (
        <React.Fragment key={i}>
          {line}
          {i !== text.split("\n").length - 1 && <br />}
        </React.Fragment>
      ))}
    </>
  );
}

export function SegmentedText({ text, facets }: SegmentedInput) {
  const segments = segmentize(text, facets);
  console.log(segments);
  return (
    <>
      {segments.map((segment, index) => {
        if (!segment.features || segment.features.length === 0) {
          return (
            <span key={index}>
              <SplitText text={segment.text} />
            </span>
          );
        }
        switch (segment.features[0].$type) {
          case "app.bsky.richtext.facet#link": {
            return (
              <a
                key={index}
                href={segment.features[0].uri}
                target="_blank"
                rel="noreferrer"
              >
                <SplitText text={segment.text} />
              </a>
            );
          }
          case "app.bsky.richtext.facet#mention": {
            return (
              <span key={index} className="text-blue-500 font-bold">
                <SplitText text={segment.text} />
              </span>
            );
          }
          default: {
            return (
              <span key={index}>
                <SplitText text={segment.text} />
              </span>
            );
          }
        }
      })}
    </>
  );
}
