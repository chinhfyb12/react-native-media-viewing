/**
 * Copyright (c) JOB TODAY S.A. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from "react";
import { GestureResponderEvent } from "react-native";
import { MediaSource } from "../../@types";

declare type Props = {
  mediaSrc: MediaSource;
  onRequestClose: () => void;
  onZoom: (isZoomed: boolean) => void;
  onLongPress: (image: MediaSource) => void;
  delayLongPress: number;
  swipeToCloseEnabled?: boolean;
  doubleTapToZoomEnabled?: boolean;
};

declare const _default: React.MemoExoticComponent<
  ({
    mediaSrc,
    onZoom,
    onRequestClose,
    onLongPress,
    delayLongPress,
    swipeToCloseEnabled,
  }: Props) => JSX.Element
>;

export default _default;
