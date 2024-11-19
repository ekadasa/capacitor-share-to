# capacitor-share-to

Copied from https://github.com/ionic-team/capacitor-plugins/tree/plugin/screen-orientation/share with modifications (except for the iOS code, as I have no knowledge of it).


I initially tried to fork the project, but encountered an error when building the Android version (something about a deprecated feature in Gradle 9). Since I have only basic knowledge of Java and no experience with native Android development, I decided to create my own copy due to the urgency of this modification.

The difference between this and the original repository is that this version includes a packageName in param options in the share method.


## API

<docgen-index>

* [`canShare()`](#canshare)
* [`share(...)`](#share)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### canShare()

```typescript
canShare() => Promise<CanShareResult>
```

Check if sharing is supported.

**Returns:** <code>Promise&lt;<a href="#canshareresult">CanShareResult</a>&gt;</code>

**Since:** 1.1.0

--------------------


### share(...)

```typescript
share(options: ShareOptions) => Promise<ShareResult>
```

Show a Share modal for sharing content with other apps
If option packageName provided, it will not show the share modal and will send the data directly to that package.

| Param         | Type                                                  |
| ------------- | ----------------------------------------------------- |
| **`options`** | <code><a href="#shareoptions">ShareOptions</a></code> |

**Returns:** <code>Promise&lt;<a href="#shareresult">ShareResult</a>&gt;</code>

**Since:** 1.0.0

--------------------


### Interfaces


#### CanShareResult

| Prop        | Type                 | Description                          | Since |
| ----------- | -------------------- | ------------------------------------ | ----- |
| **`value`** | <code>boolean</code> | Whether sharing is supported or not. | 1.1.0 |


#### ShareResult

| Prop               | Type                | Description                                                                                                              | Since |
| ------------------ | ------------------- | ------------------------------------------------------------------------------------------------------------------------ | ----- |
| **`activityType`** | <code>string</code> | Identifier of the app that received the share action. Can be an empty string in some cases. On web it will be undefined. | 1.0.0 |


#### ShareOptions

| Prop              | Type                  | Description                                                                                                                                                                        | Since |
| ----------------- | --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- |
| **`title`**       | <code>string</code>   | Set a title for any message. This will be the subject if sharing to email                                                                                                          | 1.0.0 |
| **`text`**        | <code>string</code>   | Set some text to share                                                                                                                                                             | 1.0.0 |
| **`url`**         | <code>string</code>   | Set a URL to share, can be http, https or file:// URL                                                                                                                              | 1.0.0 |
| **`files`**       | <code>string[]</code> | Array of file:// URLs of the files to be shared. Only supported on iOS and Android.                                                                                                | 4.1.0 |
| **`dialogTitle`** | <code>string</code>   | Set a title for the share modal. This option is only supported on Android.                                                                                                         | 1.0.0 |
| **`packageName`** | <code>string</code>   | This is option that don't exist in the official repository. Send directly to another app if not empty. It will not open the share modal. This option is only supported on Android. | 7.0.0 |

</docgen-api>
