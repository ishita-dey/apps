
# App Footer

<!-- DOCS-IGNORE:start -->
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
<!-- DOCS-IGNORE:end -->

App Footer is useful while adding a footer to your store. User can customise the app as per their prefrence.

![image](https://user-images.githubusercontent.com/93201110/148345876-251616f1-7dc6-4a52-b04c-7a1500fb58f0.png)


## Configuration 

1. Install the app "echidna.footer@0.0.1"
2. Add the "echidna.footer@0.0.1" as a theme dependency in the `manifest.json` file

![image](https://user-images.githubusercontent.com/93201110/148352444-abf074f9-ebdc-46e4-a4f2-4b1e179f029e.png)


3. Now, you can use the main block exported by the footer app. Check out the list below:

| Blaock name    |           Description    |                                                                                                                             
| ------------ |  --------------------------------------------------------------------------------------------------------------------------------------------- | 
| app-footer      |   ![image](https://user-images.githubusercontent.com/93201110/148353803-f3e867d2-4fe0-4166-94be-c9aa271df4c4.png) Enables you to build the Footer.            |

5. On the desire store page add the block to display the footer app. Take bellow example:

![image](https://user-images.githubusercontent.com/93201110/148354627-feaa5e1d-0173-45a7-b899-0e21d5888c92.png)

## configuration

Check all props to configure your footer in the table below:

| Prop name    | Type            | Description    | Default value                                                                                                                               |
| ------------ | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | 
| title      | array       | List of titles(headers) for your contents (Example: 'Products', 'Buying' ect. from above reference image)      | undefined     |
| column(n), url | array       | 1. column(n): List of contents to be displayed on your footer (Example: column1, column2.... ect can be used for number of columns required) 2. URL for each content in the list. For reference:  ![image](https://user-images.githubusercontent.com/93201110/148360912-85ed026e-d114-456b-b89f-5aee6760b8f4.png)  | undefined     |
| imageURL      | array       | List of image URL's for displaying social icon images or any other images as per user prefrence       | undefined     |
| socailLinks      | array       |  List of URL's to link your images(social icon)        | undefined     |
| copyright      | string       |  Copyright string for your footer         | undefined     |
| disclamer      | string       |  Defines the disclamer or any string content for your footer         | undefined     |


Prop types are: 

- `string` 
- `array` 

## Customization

`In order to apply CSS customizations in this and other blocks, follow the instructions given in the recipe on [Using CSS Handles for store customization](https://vtex.io/docs/recipes/style/using-css-handles-for-store-customization).`

To apply CSS customization in this and other blocks, follow the instructions given in the recipe on Using CSS Handles for store customization.

| CSS Handles |
| ----------- | 
| 'footerContainer'|
| 'headerContainer'|
| 'header'|
|  'subheader'|
|  'links'|
|  'icons'|
|  'socialImage'|
|  'disclamer'|
|  'copyright'|
| 'copyrightContainer' |


## Contributors ✨

Thanks goes to these wonderful people

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind are welcome!

<!-- DOCS-IGNORE:end -->

---- 

Check out some documentation models that are already live: 
- [Breadcrumb](https://github.com/vtex-apps/breadcrumb)
- [Image](https://vtex.io/docs/components/general/vtex.store-components/image)
- [Condition Layout](https://vtex.io/docs/components/all/vtex.condition-layout@1.1.6/)
- [Add To Cart Button](https://vtex.io/docs/components/content-blocks/vtex.add-to-cart-button@0.9.0/)
- [Store Form](https://vtex.io/docs/components/all/vtex.store-form@0.3.4/)
