import PropTypes from "prop-types";
import React from "react";
import styles from "./PhotoGrid.css";
import { DefaultInfoElement } from "./DefaultInfoElement";

class PhotoGrid extends React.Component {
  static propTypes = {
    photos: PropTypes.array /* { src, id, bigSrc, isVideo}*/,
    columns: PropTypes.number,
    InformationElement: PropTypes.func,
  };

  constructor() {
    super();
    this.state = {
      fullScreenImage: null,
      fullScreenImageIndex: null,
    };
  }

  render() {
    return (
      <div>
        {this.getGridElements()}
        {this.getFullScreenImage(this.state.fullScreenImage)}
      </div>
    );
  }

  getGridElements() {
    const { photos } = this.props;
    const classNames = [styles.imageGridItem];
    const style = { width: this.getPercentWidth() + "%" };

    return photos.map((photo, index) => (
      <div className={classNames.join(" ")} style={style} key={photo.id}>
        {photo.isVideo
          ? this.getVideoElement(photo, index)
          : this.getImageElement(photo, index)}
      </div>
    ));
  }

  getVideoElement = (video, index) => {
    const classNames = [styles.imageWrapper];
    return (
      <video
        className={classNames.join(" ")}
        // onClick={this.image_clickHandler(photo, index)}
      >
        <source src={video.src} type="video/mp4"></source>
      </video>
    );
  };

  getImageElement = (photo, index) => {
    // const InformationElement = this.props.InformationElement ? this.props.InformationElement : DefaultInfoElement;
    const classNames = [styles.imageWrapper];
    // const style = { backgroundImage: `url(${photo.src})` };

    return (
      <img
        className={classNames.join(" ")}
        onClick={this.image_clickHandler(photo, index)}
        src={photo.src}
      />
    );
  };

  getFullScreenImage = (src) => {
    const classNames = src ? [styles.lightbox] : [styles.hide, styles.lightbox];
    const { photos } = this.props;
    return (
      <a
        href="#_"
        className={classNames.join(" ")}
        onClick={this.lightBox_clickHandler}
      >
        {photos.map((photo, index) => (
          <img
            key={photo.id}
            src={photo.bigSrc}
            className={photo.bigSrc == src ? "opaque" : ""}
            onClick={
              photo.bigSrc == src ? this.fullScreenImage_clickHandler : null
            }
          />
        ))}
      </a>
    );
  };

  image_clickHandler = (photo, index) => () => {
    this.setState({
      fullScreenImage: photo.bigSrc,
      fullScreenImageIndex: index,
    });
  };

  lightBox_clickHandler = (e) => {
    if (e.target.tagName.toUpperCase() == "IMG") return;
    this.setState({
      fullScreenImage: null,
      fullScreenImageIndex: null,
    });
  };

  fullScreenImage_clickHandler = (e) => {
    e.stopPropagation();
    const { fullScreenImageIndex } = this.state;
    const nextPhotoIndex = this.getNextPhotoIndex(fullScreenImageIndex);
    const nextPhoto = this.getPhoto(nextPhotoIndex);

    this.setState({
      fullScreenImage: nextPhoto ? nextPhoto.bigSrc : null,
      fullScreenImageIndex: nextPhotoIndex,
    });
  };

  getPercentWidth = () => 100 / this.props.columns - 1;
  getNextPhotoIndex = (currentIndex) =>
    this.props.photos.length > currentIndex + 1 ? currentIndex + 1 : 0;
  getPreviousPhotoIndex = (currentIndex) =>
    currentIndex - 1 >= 0 ? currentIndex - 1 : this.props.photos.length - 1;
  getPhoto = (index) =>
    this.props.photos.length > index ? this.props.photos[index] : null;
}

export default PhotoGrid;
