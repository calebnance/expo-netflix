import { Image } from 'react-native';
import { Asset, Font } from 'expo';

export const cacheFonts = fonts => {
  const mappedFonts = fonts.map(font => Font.loadAsync(font));

  return mappedFonts;
};

export const cacheImages = images => {
  const imagesArray = Object.values(images);

  return imagesArray.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    }

    return Asset.fromModule(image).downloadAsync();
  });
};
