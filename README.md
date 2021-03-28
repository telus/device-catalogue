# Device Catalogue

A customer would like to browse all the Apple devices available for purchase. Create an application with a component that reads and displays devices from the local restful API on port `8081`.
The API has two routes `/watches` which returns a list of watches and `/iphones` which returns a list of iPhones.

Create two routes locally with your perferred client-side routing library: `/watches` and `/iphones`. The `/watches` routes should **ONLY** display a grid of watch device cards (a reference card design is displayed below) and the `/iphones` route should **ONLY** display a grid of iPhone device cards.
Each route represents a page in the application, each page should have a heading indicating the type of devices listed on the page and a grid showing all the devices in that category.

## Application Requirements

- [ ] An index page with a list of all pages (i.e. A watch page and phone page).
- [ ] Unit tests for **at least** one component.
- [ ] [TDS](https://tds.telus.com/components/index.html) components **MUST** be used (A list of useful components can be found below).
- [ ] The applications should display a grid of device cards for each device type.
- [ ] Submit your solution as git bundle via email to your hiring manager.

Apple Watch and iPhone assets are available in the public directory

```
public/
├─ images/
│  ├─ iphone.jpg
│  ├─ watch.jpg

```

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

## Starting the Application

`npm run dev` will start the local API server on port 8081 along with a client side user interface available on port 8080.

## Reference Device Card

All device cards should look as close as possible to the following device card:

Note: all device cards should simply showcase the name of the device, the brand and price with the following copy:

> TELUS Easy Payment and Bring-It-Back applied. Read legal footnote Taxes due upfront.
> Retail price: $1130

![device card](https://github.com/telus/device-catalogue/blob/master/public/images/device-card.png)

## Reference Device Grid

The device grid should look as close as possible to the following device grid but exact spacing isn't required:

![device card](https://github.com/telus/device-catalogue/blob/master/public/images/device-grid.png)

## Useful TDS components

- [TDS Heading](https://tds.telus.com/components/index.html#/Typography?id=heading)
- [TDS Card](https://tds.telus.com/components/index.html#/Content?id=card)
- [TDS Image](https://tds.telus.com/components/index.html#/Content?id=image)
- [TDS PriceLockup](https://tds.telus.com/components/index.html#/Typography?id=pricelockup)
- [TDS Text](https://tds.telus.com/components/index.html#/Typography?id=text)
- [TDS Flex Grid](https://tds.telus.com/components/index.html#/Layout?id=flexgrid)
