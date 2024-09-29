import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';
import type { ViewProps } from 'react-native';
import type { DirectEventHandler } from 'react-native/Libraries/Types/CodegenTypes';

export enum EPasteEventPayloadItemType {
  TextPlain = 'text/plain',
}

export type IPasteEventPayloadItem = {
  data?: string;
  type?: EPasteEventPayloadItemType;
};
export type IPasteEventPayload = IPasteEventPayloadItem[];
export type IPasteEventParams = {
  nativeEvent: {
    items?: {
      data?: string;
      type?: string;
    }[];
  };
};
interface NativeProps extends ViewProps {
  onPaste?: DirectEventHandler<IPasteEventParams>;
}

export default codegenNativeComponent<NativeProps>('OneKeyTextInput');
