export interface ShareOptions {
  /**
   * Set a title for any message. This will be the subject
   * if sharing to email
   *
   * @since 1.0.0
   */
  title?: string;

  /**
   * Set some text to share
   *
   * @since 1.0.0
   */
  text?: string;

  /**
   * Set a URL to share, can be http, https or file:// URL
   *
   * @since 1.0.0
   */
  url?: string;

  /**
   * Array of file:// URLs of the files to be shared.
   * Only supported on iOS and Android.
   *
   * @since 4.1.0
   */
  files?: string[];

  /**
   * Set a title for the share modal.
   * This option is only supported on Android.
   *
   * @since 1.0.0
   */
  dialogTitle?: string;

  /**
   * This is option that don't exist in the official repository.
   * Send directly to another app if not empty. It will not open the share modal.
   * This option is only supported on Android.
   * 
   * @since 7.0.0
  */
  packageName?: string;
}

export interface ShareResult {
  /**
   * Identifier of the app that received the share action.
   * Can be an empty string in some cases.
   *
   * On web it will be undefined.
   *
   * @since 1.0.0
   */
  activityType?: string;
}

export interface CanShareResult {
  /**
   * Whether sharing is supported or not.
   *
   * @since 1.1.0
   */
  value: boolean;
}

export interface ShareToPlugin {
  /**
   * Check if sharing is supported.
   *
   * @since 1.1.0
   */
  canShare(): Promise<CanShareResult>;

  /**
   * Show a Share modal for sharing content with other apps
   * If option packageName provided, it will not show the share modal and will send the data directly to that package.
   * @since 1.0.0
   */
  share(options: ShareOptions): Promise<ShareResult>;
}