# Device Catalogue

A customer would like to browse all the Apple devices avaiable for purchase. Create an application with a component that reads and displays devices from the local restful API on port `8081`.
The API has two routes `/watches` which returns a list of watches and `/iphones` which returns a list of iPhones.

Create two routes locally with your perferred client-side routing library: `/watches` and `/iphones`. The `/watches` routes should **ONLY** display a grid of watch device cards (a referrence card design is displayed below) and the `/iphones` route should **ONLY** display a grid of iphone device cards.
Each route represents a page in the application, each page should have a heading indicating the type of devices listed on the page and a grid showing all the devices in that category.

## Application Requirements

- [x] An index page with a list of all pages (i.e. A watch page and phone page).
- [x] Unit tests for **at least** one component.
- [x] [TDS](https://tds.telus.com/components/index.html) components **MOST** be used (A list of useful components can be found below).
- [x] The applications should display a grid of device cards for each device type.

Apple Watch and iPhone assets are available in the public directory

```
public/
├─ images/
│  ├─ iphone.jpg
│  ├─ watch.jpg

```

## The anotomy of the device API response

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

![device card](https://github.com/akeemattelus/catalogue/blob/master/public/images/device-card.png)


## Reference Device Grid 

The device grid should look as close as possible to the following device grid but exact spacing isn't required:

![device card](https://github.com/akeemattelus/catalogue/blob/master/public/images/device-grid.png)

## Useful TDS components

- [TDS Heading](https://tds.telus.com/components/index.html#/Typography?id=heading)
- [TDS Card](https://tds.telus.com/components/index.html#/Content?id=card)
- [TDS Image](https://tds.telus.com/components/index.html#/Content?id=image)
- [TDS PriceLockup](https://tds.telus.com/components/index.html#/Typography?id=pricelockup)
- [TDS Text](https://tds.telus.com/components/index.html#/Typography?id=text)
- [TDS Flex Grid](https://tds.telus.com/components/index.html#/Layout?id=flexgrid)

