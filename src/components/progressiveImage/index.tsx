import React, {FC, useCallback, useMemo, useState} from 'react';
import {Image, View, ActivityIndicator, ImageStyle} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import styles from './styles';

type IImageProps = {
  uri: string;
  imageStyles?: ImageStyle | ImageStyle[];
};

const ProgressiveImage: FC<IImageProps> = ({uri, imageStyles}) => {
  const [loading, setLoading] = useState(true);
  const [isWrongImageURL, setIsWrongImageURL] = useState(false);

  const disableLoader = useCallback(() => {
    setLoading(false);
  }, []);

  const showError = useCallback(() => {
    setLoading(false);
    setIsWrongImageURL(true);
    showMessage({
      message: 'Can not load image',
      type: 'danger',
    });
  }, []);

  const loader = useMemo(() => {
    if (!loading) {
      return null;
    }

    return (
      <View style={styles.imageLoader}>
        <ActivityIndicator size={'large'} color={'green'} />
      </View>
    );
  }, [loading]);

  const image = useMemo(() => {
    if (!isWrongImageURL) {
      return (
        <Image
          source={{uri}}
          style={imageStyles}
          onLoad={disableLoader}
          onError={showError}
        />
      );
    }

    return <View style={[styles.defaultImage, imageStyles]} />;
  }, [isWrongImageURL, imageStyles, uri, disableLoader, showError])

  return (
    <View>
      {image}
      {loader}
    </View>
  );
};

export default ProgressiveImage;
