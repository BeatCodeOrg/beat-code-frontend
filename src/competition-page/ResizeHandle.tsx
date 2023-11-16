import { PanelResizeHandle } from "react-resizable-panels";
import React from "react";
import styles from "./styles.module.css";

export default function ResizeHandle({
  className = "",
  id
}: {
  className?: string;
  id?: string;
}) {
  return (
    <PanelResizeHandle
      className={[styles.ResizeHandleOuter, className].join(" ")}
      id={id}
    >
      <div className={styles.ResizeHandleInner}></div>
    </PanelResizeHandle>
  );
}
