# react-native-media-viewing

Media viewing inherit from [react-native-image-viewing](https://github.com/jobtoday/react-native-image-viewing) library.

> React Native modal component for viewing images and videos as a sliding gallery.

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

<p align="center">
  <img src="https://github.com/jobtoday/react-native-image-viewing/blob/master/demo.gif?raw=true" height="480" />
</p>

## Installation

```bash
yarn add react-native-media-viewing
```

or

```bash
npm install --save react-native-media-viewing
```

## Usage

```jsx
import MediaViewing from "react-native-media-viewing";

const media = [
  {
    uri: "https://images.unsplash.com/photo-1571501679680-de32f1e7aad4",
    mediaType: "image",
  },
  {
    uri: "https://images.unsplash.com/photo-1573273787173-0eb81a833b34",
    mediaType: "image",
  },
  {
    uri: "https://images.unsplash.com/photo-1569569970363-df7b6160d111",
    mediaType: "image",
  },
];

const [visible, setIsVisible] = useState(false);

<MediaViewing
  media={media}
  imageIndex={0}
  visible={visible}
  onRequestClose={() => setIsVisible(false)}
/>;
```

#### [See Example](https://github.com/jobtoday/react-native-image-viewing/blob/master/example/App.tsx#L62-L80)

## Props

| Prop name                | Description                                                                                         | Type                                                        | Required |
| ------------------------ | --------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- | -------- |
| `media`                  | Array of images and videos to display                                                               | MediaSource[]                                               | true     |
| `keyExtractor`           | Uniqely identifying each image                                                                      | (mediaSrc: MediaSource, index: number) => string            | false    |
| `imageIndex`             | Current index of image to display                                                                   | number                                                      | true     |
| `visible`                | Is modal shown or not                                                                               | boolean                                                     | true     |
| `onRequestClose`         | Function called to close the modal                                                                  | function                                                    | true     |
| `onImageIndexChange`     | Function called when image index has been changed                                                   | function                                                    | false    |
| `onLongPress`            | Function called when image long pressed                                                             | function (event: GestureResponderEvent, image: MediaSource) | false    |
| `delayLongPress`         | Delay in ms, before onLongPress is called: default `800`                                            | number                                                      | false    |
| `animationType`          | Animation modal presented with: default `fade`                                                      | `none`, `fade`, `slide`                                     | false    |
| `presentationStyle`      | Modal presentation style: default: `fullScreen` **Android:** Use `overFullScreen` to hide StatusBar | `fullScreen`, `pageSheet`, `formSheet`, `overFullScreen`    | false    |
| `backgroundColor`        | Background color of the modal in HEX (#000000EE)                                                    | string                                                      | false    |
| `swipeToCloseEnabled`    | Close modal with swipe up or down: default `true`                                                   | boolean                                                     | false    |
| `doubleTapToZoomEnabled` | Zoom image by double tap on it: default `true`                                                      | boolean                                                     | false    |
| `HeaderComponent`        | Header component, gets current `imageIndex` as a prop                                               | component, function                                         | false    |
| `FooterComponent`        | Footer component, gets current `imageIndex` as a prop                                               | component, function                                         | false    |

- type MediaSource = ImageURISource

## Contributing

See the [repository](https://github.com/jobtoday/react-native-image-viewing) to learn how to contribute to the repository and the development workflow.

## License

MIT
