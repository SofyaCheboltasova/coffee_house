# 🍵 Coffee House 🍵

## 💠[Deploy](https://rolling-scopes-school.github.io/sofyacheboltasova-JSFE2023Q4/coffeehouse/)

## 💠Project's Description

Coffee House is a project where you will need to create a website consisting of two pages, make it responsive, and add interactivity.

## 💠Key skills

- Valid semantic responsive web design;
- Easy-to-maintain readable code;
- Exporting styles and graphics from Figma;
- Using JavaScript to implement the functionality specified in the task.

## 💠Project Work Stages

The task consists of three parts:
<details>
<summary>Coffee-House. Part 1: Fixed Layout</summary>

  - In this part of the task, you need to create the 'Home' and 'Menu' pages based on the layout, which should display correctly when the window width is at least 1440px;  
  - The validity of the work is checked, as well as its compliance with the layout.

  ### CrossCheck Criteria (100 points)

1. Checking validation of pages: **+18**
   - The layout for both pages is validated and error-free according to the W3C Validator (https://validator.w3.org/): **+12** (6 points per page)
     Valid markup of checked page corresponds to the message "Document checking completed. No errors or warnings to show." In this case, we assign the full points for the checked page (+6). If there are `warnings` but no `errors`, we assign half of the points (+3) for the checked page
   - Favicon is added to each page: **+2**
   - Each page has only one `<h1>` element: **+2**
   - The URL of the `menu` page differs from the URL of the `home` page (e.g. `your-site.com` for the `home` page and `your-site.com/menu` for the `menu` page): **+2**
3. The layout matches the design: **+40**
   - `<header>` block on each page: **+4**
   - `Enjoy` block on `home` page: **+6**
   - `Favourites Coffee` block on `home` page: **+6**
   - `About` block on `home` page: **+6**
   - `Mobile App` block on `home` page: **+6**
   - `Menu` block on `menu` page: **+6**
   - `<footer>` block on each page: **+6**
4. CSS Requirements: **+10**
   - For positioning images in `About` block on `home` page and products in `Menu` block on `menu` page used **Flexbox** or **Grid Layout**: **+4**
   - When scaling the browser page (<100%) or increasing the page width (>1440px), the layout of both pages is centered rather than shifted to the side and not stretched across the entire width: **+4**
   - The background color **Body** stretches across the entire width of the page: **+2**
5. Interactivity: **+32**
   - Navigation elements (except `Contact us`) lead to corresponding blocks on `home` page (anchor links): **+4**
   - `Contact us` in navigation panel links to the `<footer>` block on its own page (anchor link): **+2**
   - Smooth scrolling with anchor links: **+2**
   - When clicking on the **Menu** buttons in `header` and `Enjoy` block on `home` page, it navigates to the `menu` page: **+2**
   - The **Menu** button in `header` on `menu` page is non-interactive: **+2**
   - When clicking on the **Logo** in `header`, it navigates to the `home` page: **+2**
   - The active **Coffee** button in `Menu` block of `Menu` page is non-interactive: **+2**
   - Each Coffee-card in the `Menu` section of the `Menu` page is interactive when hovering over any area of the card: **+4**
   - In the `<footer>` block, clicking on the link with phone number (all area including icon) should initiate a phone call: **+2**
   - In the `<footer>` block, clicking on the link with the address (all area including icon) should open a new browser tab with Google Maps displaying any location of your choice: **+2**
   - Interactivity of links and buttons is implemented according to Figma layout. Interactivity includes not only changing cursor's appearance, for example, using the `cursor: pointer` property, but also the use of other visual effects, such as changing the background color or font color, following the **Styleguide** in Figma layout: **+4**
   - Mandatory requirement for interactivity: smooth change in the appearance of an element on hover, without affecting adjacent elements: **+4**
</details>

<details>
<summary>Coffee-House. Part 2: Responsive Design</summary>
  
  - In this part of the task, it is necessary to add responsiveness to the pages created in the first stage, up to and including a width of 380px;
  - The validity of the work is checked, its alignment with the layout at the corresponding page width, layout responsiveness, and the absence of horizontal scroll bars.

### CrossCheck Criteria (90 points)

1. The layout of the pages aligns the design at a screen width of 1440px: **+14**
   - `<header>` block on each page: **+2**
   - `Enjoy` block on `home` page: **+2**
   - `Favourites Coffee` block on `home` page: **+2**
   - `About` block on `home` page: **+2**
   - `Mobile App` block on `home` page: **+2**
   - `Menu` block on `menu` page: **+2**
   - `<footer>` block on each page: **+2**
2. The layout of the pages aligns the design at a screen width of 768px: **+14**
   - `<header>` block on each page: **+2**
   - `Enjoy` block on `home` page: **+2**
   - `Favourites Coffee` block on `home` page: **+2**
   - `About` block on `home` page: **+2**
   - `Mobile App` block on `home` page: **+2**
   - `Menu` block on `menu` page: **+2**
   - `<footer>` block on each page: **+2**
3. The layout of the pages aligns the design at a screen width of 380px: **+14**
   - `<header>` block on each page: **+2**
   - `Enjoy` block on `home` page: **+2**
   - `Favourites Coffee` block on `home` page: **+2**
   - `About` block on `home` page: **+2**
   - `Mobile App` block on `home` page: **+2**
   - `Menu` block on `menu` page: **+2**
   - `<footer>` block on each page: **+2**
4. There is no horizontal scrollbar at all screen width up to 380px inclusive. All page content remains as per the design: it is not cropped, removed, or shifted to the side: **+20**
   - `home` page: no horizontal scroll bar between 1440px and 768px widths: **+5**
   - `home` page: no horizontal scroll bar between 768px and 380px widths: **+5**
   - `menu` page: no horizontal scroll bar between 1440px and 768px widths: **+5**
   - `menu` page: no horizontal scroll bar between 768px and 380px widths: **+5**
5. During smooth resizing of the browser window from 1440px to 380px, the layout occupies the full width of the window (including specified margins), elements adjust their sizes and positions appropriately without full scaling, no elements overlap, and images maintain their correct aspect ratios: **+8**
   - On `home` page: **+4**
   - On `menu` page: **+4**
6. At screen widths of 768px and below, the menu and navigation buttons in the header are concealed on both pages, and a burger menu icon is displayed: **+4**  
   (Note: Activation of the burger menu icon is not evaluated at this stage.)
7. Hover effects are active on desktop devices (as per the `Desktop` device type in DevTools) and are disabled for mobile devices (as per the `Mobile` device type in DevTools) on both pages: **+4**
8. The layout for both pages is validated and error-free according to the W3C Validator (https://validator.w3.org/): **+12**

</details>

<details>
<summary>Coffee-House. Part 3: Adding Functionality</summary>
  
  - In this part of the task, we use JavaScript to add interactivity to the pages;
  - The implemented functionality is being checked.

  ### CrossCheck Criteria (90 points)

1. Implementation of the **burger menu** on both pages: **+22**
   - At a page width of 768px or less, the navigation panel hides, and the burger icon appears: **+2**
   - When clicking the burger icon, the burger menu slides out from the right, and the burger icon smoothly transforms into a cross: **+4**
   - The burger menu occupies the entire available screen area below the `<header>` block: **+2**
   - When clicking the cross, the burger menu smoothly hides, moving to the right of the screen, and the cross smoothly transforms into a burger icon: **+4**
   - The burger icon is created using HTML and CSS without the use of images: **+2**
   - Links in the burger menu work, providing smooth scrolling to anchor points: **+2**
   - When clicking on any link (interactive or non-interactive) in the menu, the burger menu smoothly hides to the right, and the cross smoothly transforms into a burger icon: **+2**
   - The placement and dimensions of elements in the burger menu match the layout (horizontal centering of menu items): **+2**
   - When the page width increases to 769px or higher, the burger icon and the open burger menu hide, and the navigation panel appears: **+2**
2. Implementation of the **Carousel** on the `home` page: **+24**
   - Carousel elements are automatically scroll to the left with a specified time interval by default. The time interval duration is at the student's choose, but the recommended value is 5-7 seconds: **+4**
   - The current state until the next automatic switch is shown in the progress bar of the corresponding slide by filling it with color: **+4**
   - Only the progress bar of the current slide can be filled; the rest remain in their default state: **+2**
   - When hovering the mouse or touch-and-hold on the displayed carousel element, the time to the element switch is paused. When the mouse cursor moves out, or the hold ends, the time continues from where it stopped: **+2**
   - The switch slides is accompanied by like the carousel animation (the method of animation execution is not verified): **+4**
   - Manual switching in the corresponding direction is implemented by pressing left arrow button or right arrow button: **+2**
   - For mobile devices, manual switching in the corresponding direction is additionally implemented by swiping left or right: **+2**
   - When manually switching, the progress bar state of the switched slide resets, and the progress bar of the displayed slide starts to fill: **+2**
   - When switching to the right after the third element, it returns to the first. When switching to the left after the first element, it returns to the third: **+2**
3. Implementation of the **Category switching** for products on the `menu` page: **+4**
   - The **Coffee** category is active and the corresponding products are displayed when opening or reloading the `menu` page: **+2**
   - When switching categories, the products of the selected category are displayed: **+2**
4. Implementation of the **Loading more products** on the `menu` page **+12**
   - For screens with a width of 768px or less, when opening/reloading the page or switching categories, only 4 products are displayed. If there are more than 4 products in the displayed category, a **Load More** button is displayed below: **+4**
   - When clicking the **Load More** button below the displayed products, the missing products are added, and the **Load More** button is hidden: **+4**
   - When changing the screen width, the product display mode (8 products per page or 4 products with a **Load More** button) changes without page reloading: **+4**
5. Implementation of the **Modal** for selected product on the `menu` page: **+20**
   - The Modal with the description of a specific product opens when clicking on any part of a card of product: **+2**
   - The part of the page outside the Modal is darkened: **+2**
   - When the Modal is open, the vertical scroll of the page becomes inactive; when closed, it becomes active again: **+2**
   - Clicking on the area around the Modal and **Close** button closes it: **+2**
   - The Modal is centered on both axes, sizes of modal elements and their layout match the design: **+2**
   - After the Modal is opened, the 'Size' option 'S' is selected, and no option in the 'Additives' section is selected. The product's final price is the same as in the card: **+2**
   - Only one 'Size' option can be selected. Changing this option also changes the final price of the product based on the choice (+$0.00 for **S**, +$0.50 for **M**, +$1.00 for **L**): **+4**
   - Multiple 'Additives' options can be selected, and each selected option increases the final price of the product by $0.50: **+4**
6. Video on the `home` page: **+8**
   - In the `Enjoy` block of the `home` page, a video is played in the background instead of an image, without sound and control elements, and without the ability to interact with it: **+4**
   - After the video is finished, it automatically starts over: **+4**
</details>

[Design in Figma](https://www.figma.com/file/SAoBmuOqTfguehdT4IFRxQ/Coffee-House?type=design&node-id=0-1&mode=design&t=qis81E9Ovgx47eVl-0)
