# Device Catalogue

A customer would like to browse all the Apple devices available for purchase. Create an application with a component that reads and displays devices from the local restful API on port `8081`.
The API has two routes `/watches` which returns a list of watches and `/iphones` which returns a list of iPhones.

## Application Requirements

* Create a `/watches` route that displays a grid of watch device cards - reference [card design](#reference-device-card)
* Create a `/iphones` route that displays a grid of iPhone device cards - reference [card design](#reference-device-card)
* Each route represents a page in the application. Each page should have a heading indicating the type of device listed on the page and a grid showing all the devices in that category.
* An index page with a list of all pages (i.e. A watch page and phone page).
* Unit tests for your work where it makes sense. At Telus Digital we pride ourselves on having applications with great test coverage. Please be prepared to talk about your testing choices.
* [TDS](https://tds.telus.com/components/index.html) components **MUST** be used. List of useful [components](#useful-tds-components).

Apple Watch and iPhone assets are available in the [public directory](/public/images)

## Submission Requirements

* Fork this repository to your personal Github account
* Submit your solution as a Pull Request against the main branch of your forked repository

## The anatomy of the device API response

The mock API replies with the following structure:

```javascript
{
  "data": [
    {
      "name": "Apple Watch Series 6",
      "brand": "Apple",
      "price": 1399
    }
  ]
}
```

## Local development

Install dependencies

```sh
npm install
```

Start the local API server on port 8081 along with a client side user interface on port 8080.

```sh
npm run dev
```

Running the tests

```sh
npm run unit
```

## Reference Device Card

All device cards should look as close as possible to the following device card:

Note: all device cards should simply showcase the name of the device, the brand and price with the following copy:

> TELUS Easy Payment and Bring-It-Back applied. Read legal footnote Taxes due upfront.

![device card](https://github.com/telus/device-catalogue/blob/master/public/images/device-card.png)

## Reference Device Grid

The device grid should look as close as possible to the following device grid but exact spacing isn't required:

![device card](https://github.com/telus/device-catalogue/blob/master/public/images/device-grid.png)

## Useful TDS components

* [TDS Heading](https://tds.telus.com/components/index.html#/Typography?id=heading)
* [TDS Card](https://tds.telus.com/components/index.html#/Content?id=card)
* [TDS Image](https://tds.telus.com/components/index.html#/Content?id=image)
* [TDS PriceLockup](https://tds.telus.com/components/index.html#/Typography?id=pricelockup)
* [TDS Text](https://tds.telus.com/components/index.html#/Typography?id=text)
* [TDS Flex Grid](https://tds.telus.com/components/index.html#/Layout?id=flexgrid)

## Recommendations

* Use multiple commits to show incremental progress. Learn more about the Github flow [here](https://guides.github.com/introduction/flow/)
* Treat this exercise as a pull request you’d submit to your colleagues or to an open source project.
