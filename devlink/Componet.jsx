"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Componet.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-47":{"id":"e-47","name":"","animationType":"custom","eventTypeId":"PAGE_START","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-29","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-48"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695310349264}},"actionLists":{"a-29":{"id":"a-29","title":"Home Page Load","actionItemGroups":[{"actionItems":[{"id":"a-29-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"7b5eec08-3e1d-7dd4-57c9-7f2b253fe0a7"},"xValue":null,"yValue":80,"xUnit":"px","yUnit":"px","zUnit":"PX"}},{"id":"a-29-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"7b5eec08-3e1d-7dd4-57c9-7f2b253fe0a7"},"value":0,"unit":""}},{"id":"a-29-n-13","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"7b5eec08-3e1d-7dd4-57c9-7f2b253fe0b5"},"xValue":null,"yValue":80,"xUnit":"px","yUnit":"px","zUnit":"PX"}},{"id":"a-29-n-14","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"7b5eec08-3e1d-7dd4-57c9-7f2b253fe0b5"},"value":0,"unit":""}},{"id":"a-29-n-18","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"68fb29d91a23ce77313eafa0|6041f3ea-2d64-7ebc-2c2a-5c95d22f6b02"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-29-n-16","actionTypeId":"STYLE_OPACITY","config":{"delay":400,"easing":"outQuad","duration":1000,"target":{"id":"7b5eec08-3e1d-7dd4-57c9-7f2b253fe0b5"},"value":1,"unit":""}},{"id":"a-29-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":400,"easing":"outQuad","duration":500,"target":{"id":"7b5eec08-3e1d-7dd4-57c9-7f2b253fe0a7"},"xValue":null,"yValue":0,"xUnit":"px","yUnit":"px","zUnit":"PX"}},{"id":"a-29-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":400,"easing":"outQuad","duration":1000,"target":{"id":"7b5eec08-3e1d-7dd4-57c9-7f2b253fe0a7"},"value":1,"unit":""}},{"id":"a-29-n-15","actionTypeId":"TRANSFORM_MOVE","config":{"delay":400,"easing":"outQuad","duration":650,"target":{"id":"7b5eec08-3e1d-7dd4-57c9-7f2b253fe0b5"},"xValue":null,"yValue":0,"xUnit":"px","yUnit":"px","zUnit":"PX"}},{"id":"a-29-n-20","actionTypeId":"STYLE_OPACITY","config":{"delay":1000,"easing":"outQuad","duration":1000,"target":{"id":"68fb29d91a23ce77313eafa0|6041f3ea-2d64-7ebc-2c2a-5c95d22f6b02"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1694020967677}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Componet({ as: _Component = _Builtin.Grid }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "cta-header-component")}
      tag="div"
      hello="world"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "hero-header-component")}
        data-w-id="7b5eec08-3e1d-7dd4-57c9-7f2b253fe0a7"
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "hero-text-wrapper")}
          tag="div"
        >
          <_Builtin.Heading
            className={_utils.cx(_styles, "hero-heading")}
            tag="h1"
          >
            {"The bank of the future. "}
            <_Builtin.Span className={_utils.cx(_styles, "text-color-gray500")}>
              {"Embrace a new era of financial management."}
            </_Builtin.Span>
          </_Builtin.Heading>
        </_Builtin.Block>
        <_Builtin.Block className={_utils.cx(_styles, "button-row")} tag="div">
          <_Builtin.Link
            className={_utils.cx(_styles, "button")}
            button={false}
            block="inline"
            options={{
              href: "#",
            }}
          >
            <_Builtin.Block tag="div">{"Get started"}</_Builtin.Block>
          </_Builtin.Link>
          <_Builtin.Link
            className={_utils.cx(_styles, "button-tertiary", "hide-tablet")}
            button={false}
            block="inline"
            options={{
              href: "#",
            }}
          >
            <_Builtin.Block tag="div">{"Learn more"}</_Builtin.Block>
          </_Builtin.Link>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "header-image-wrapper")}
        id={_utils.cx(
          _styles,
          "w-node-_7b5eec08-3e1d-7dd4-57c9-7f2b253fe0b4-253fe0a6"
        )}
        tag="div"
      >
        <_Builtin.Image
          className={_utils.cx(_styles, "image")}
          data-w-id="7b5eec08-3e1d-7dd4-57c9-7f2b253fe0b5"
          loading="lazy"
          width="auto"
          height="auto"
          alt="Hero image showcasing an intuitive bank account management interface with credit card details."
          src="https://cdn.prod.website-files.com/68fb29d81a23ce77313eaebf/68fb29d91a23ce77313eafe8_EN%20-%20Hero%20Image.webp"
        />
      </_Builtin.Block>
    </_Component>
  );
}
