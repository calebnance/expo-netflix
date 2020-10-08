import { Image } from 'react-native';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';

import preloadFonts from './preloadFonts';
import preloadImages from './preloadImages';

// cache fonts
// /////////////////////////////////////////////////////////////////////////////
const cacheFonts = (fonts) => fonts.map((font) => Font.loadAsync(font));

// cache images
// /////////////////////////////////////////////////////////////////////////////
const cacheImages = (images) => {
  return Object.values(images).map((image) => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    }

    return Asset.fromModule(image).downloadAsync();
  });
};

// preload async
// /////////////////////////////////////////////////////////////////////////////
const loadAssetsAsync = async () => {
  // preload assets
  const fontAssets = cacheFonts(preloadFonts);
  const imageAssets = cacheImages(preloadImages);

  // promise load all
  return Promise.all([...fontAssets, ...imageAssets]);
};

export default {
  cacheFonts,
  cacheImages,
  loadAssetsAsync
};
