import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { client } from '_lib/client';

export const defaultAspect = 1.77;

export default class DynamicImage {
  private _source: SanityImageSource;
  private _aspect: number;
  private _width: number;
  private _height: number;
  private _builder: any;

  constructor(source: SanityImageSource, width: number, aspect: number = defaultAspect) {
    this._source = source;
    this._aspect = aspect;
    this._width = width;
    this._height = parseInt((this._width / this._aspect).toFixed(0));
    this._aspect = aspect;
    this._builder = imageUrlBuilder(client);
  }

  /**
   * GetUrl
   */
  public GetUrl(lowRes: boolean = false): string {
    if (!this._source) {
      return `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${this._width} ${this._height}"%3E%3C/svg%3E`;
    }

    let urlBuilder = this._builder.image(this._source).auto('format').width(parseInt(this._width.toFixed())).height(this._height).fit('crop');

    // If lowRes is true, reduce the quality to create a blurry effect
    if (lowRes) {
      urlBuilder = urlBuilder.quality(20); // Adjust the quality value as needed
    }

    return urlBuilder.url();
  }
}