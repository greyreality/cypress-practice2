/// <reference types="cypress" />
import { loginPage } from "./pages/LoginPage"
import { itemPage } from "./pages/ItemPage"
import { cartPage } from "./pages/CartPage"

let ItemId

describe("Delete Item from a Cart - Negative API tests", () => {
  beforeEach("Add item into a Cart", () => {
    cy.fixture("testdata").as("testdata");
    cy.get("@testdata").then((testdata) => {
      console.log(testdata.authorization)
      const queryAddCart = "mutation addCartItemSF($cartId: ID!, $input: CartItemAddInput!) {\n  addCartItem(cartId: $cartId, input: $input) {\n    ...cartItemDetailsNB\n    __typename\n  }\n}\n\nfragment cartItemDetailsNB on CartItem {\n  id\n  productId\n  product {\n    ...productDetailsNB\n    __typename\n  }\n  productPackageId\n  productDesignId\n  productVariantId\n  selectedProductOptionValueIds\n  selectedProductPackageOptions {\n    product {\n      ...productDetailsNB\n      __typename\n    }\n    productId\n    productVariantId\n    selectedProductOptionValueIds\n    selectedOptions {\n      title\n      value\n      __typename\n    }\n    __typename\n  }\n  personalizations {\n    total {\n      ...cartPriceDetailsNB\n      __typename\n    }\n    items {\n      total {\n        ...cartPriceDetailsNB\n        __typename\n      }\n      title\n      value\n      type\n      __typename\n    }\n    __typename\n  }\n  personalizationOptions {\n    personalizationGroupId\n    options {\n      productPersonalizationOptionId\n      title\n      value\n      __typename\n    }\n    __typename\n  }\n  productDesignRevisionNo\n  designPreviewUrl\n  salesChannelId\n  salesChannelGroupId\n  salesChannelTargetCategoryId\n  quantity\n  meta\n  sellingPrice {\n    ...cartPriceDetailsNB\n    __typename\n  }\n  productPrice {\n    ...cartPriceDetailsNB\n    __typename\n  }\n  discountsAndUpcharges {\n    ...cartPriceModifierDetailsNB\n    __typename\n  }\n  unitPrice {\n    ...cartPriceDetailsNB\n    __typename\n  }\n  total {\n    ...cartPriceDetailsNB\n    __typename\n  }\n  __typename\n}\n\nfragment productDetailsNB on Product {\n  id\n  type\n  salesChannelId\n  price {\n    ...productPriceDetailsNB\n    __typename\n  }\n  title\n  description\n  options {\n    id\n    type\n    title\n    values {\n      id\n      productOptionId\n      value\n      title\n      selected\n      __typename\n    }\n    __typename\n  }\n  personalizationGroups {\n    id\n    inputType\n    options {\n      id\n      duplicationRule\n      title\n      __typename\n    }\n    title\n    __typename\n  }\n  media {\n    type\n    source\n    default\n    visibleInCollection\n    productOptionValueId\n    isCustomProductMedia\n    __typename\n  }\n  status\n  requestQuotationEnabled\n  bulkOrderEnabled\n  thumbnailUrl\n  attributes {\n    ...attributeDetail\n    __typename\n  }\n  slugLocalizations {\n    langCode\n    content\n    __typename\n  }\n  titleLocalizations {\n    langCode\n    content\n    __typename\n  }\n  descriptionLocalizations {\n    langCode\n    content\n    __typename\n  }\n  childProducts {\n    id\n    salesChannelId\n    type\n    personalizationGroups {\n      id\n      title\n      inputType\n      options {\n        id\n        duplicationRule\n        title\n        __typename\n      }\n      __typename\n    }\n    price {\n      basePrice {\n        currencyCode\n        amount\n        __typename\n      }\n      salesPrice {\n        currencyCode\n        amount\n        __typename\n      }\n      discountedPrice {\n        currencyCode\n        amount\n        __typename\n      }\n      __typename\n    }\n    title\n    description\n    options {\n      id\n      internalId\n      type\n      values {\n        id\n        productOptionId\n        value\n        title\n        selected\n        __typename\n      }\n      title\n      __typename\n    }\n    personalizationGroups {\n      id\n      inputType\n      options {\n        id\n        duplicationRule\n        title\n        __typename\n      }\n      title\n      __typename\n    }\n    media {\n      type\n      source\n      default\n      visibleInCollection\n      productOptionValueId\n      __typename\n    }\n    requestQuotationEnabled\n    bulkOrderEnabled\n    createdAt\n    thumbnailUrl\n    attributes {\n      id\n      title\n      titleSpotlight\n      iconSpotlight\n      iconUrl\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n\nfragment productPriceDetailsNB on ProductPrice {\n  basePrice {\n    ...priceDetailsNB\n    __typename\n  }\n  salesPrice {\n    ...priceDetailsNB\n    __typename\n  }\n  discountedPrice {\n    ...priceDetailsNB\n    __typename\n  }\n  __typename\n}\n\nfragment priceDetailsNB on Price {\n  currencyCode\n  amount\n  __typename\n}\n\nfragment attributeDetail on ProductAttribute {\n  id\n  title\n  titleSpotlight\n  iconSpotlight\n  iconUrl\n  iconCssClass\n  __typename\n}\n\nfragment cartPriceDetailsNB on CartPrice {\n  price\n  tax\n  __typename\n}\n\nfragment cartPriceModifierDetailsNB on CartPriceModifier {\n  total {\n    ...cartPriceDetailsNB\n    __typename\n  }\n  items {\n    id\n    total {\n      ...cartPriceDetailsNB\n      __typename\n    }\n    unitTotal {\n      ...cartPriceDetailsNB\n      __typename\n    }\n    type\n    category\n    title\n    discountValue\n    couponCode\n    linkedDiscount {\n      ...discountDetailsNB\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n\nfragment discountDetailsNB on Discount {\n  id\n  category\n  discountType\n  discountValue\n  isUpcharge\n  isVisibleToCustomer\n  applyBeforeTax\n  __typename\n}\n"

      const requestHeaders = {
        "Authorization": testdata.authorization,
        "x-brikl-shop-id": testdata.shop
      }

      const requestBody = {
        "operationName": "addCartItemSF",
        "variables": {
          "cartId": "f6c13952-aeaf-4959-b4f4-1fa418bdbab5",
          "input": {
            "quantity": 1,
            "productId": "620f7636-3551-4db2-9368-95395af1b5c2",
            "salesChannelId": "1964d51d-b81c-4057-bef6-52523b9d2fac",
            "meta": null
          }
        },
        "query": queryAddCart
      }

      cy.request({
        method: 'POST',
        url: testdata.api_url,
        body: requestBody,
        headers: requestHeaders
      })
        .its('body').then(body => {
          console.log(body)
          expect(body.data.addCartItem).to.have.property('id')
          ItemId = body.data.addCartItem.id
          console.log(ItemId)
        })
    })
  })

  afterEach(("Delete item from a Cart"), () => {
    cy.get("@testdata").then((testdata) => {
      const requestHeaders = {
        "Authorization": testdata.authorization,
        "x-brikl-shop-id": testdata.shop
      }

      const requestBody = {
        "operationName": "deleteCartItemSF",
        "variables": {
          "id": ItemId,
          "cartId": testdata.cart
        },
        "query": "mutation deleteCartItemSF($id: ID!, $cartId: ID!) {\n  deleteCartItem(id: $id, cartId: $cartId) {\n    success\n    __typename\n  }\n}\n"
      }

      cy.request({
        method: 'POST',
        url: testdata.api_url,
        body: requestBody,
        headers: requestHeaders
      }).then(response => {
        console.log(response)
        expect(response.status).to.equal(200)
        expect(response.body.data.deleteCartItem.success).to.equal(true)
      })

    })

  })

  it.only("APITEST-01 As user I want to delete non-exist item from Cart", () => {
    cy.get("@testdata").then((testdata) => {
      const requestHeaders = {
        "Authorization": testdata.authorization,
        "x-brikl-shop-id": testdata.shop
      }

      const requestBody = {
        "operationName": "deleteCartItemSF",
        "variables": {
          "id": "non-exist-item-id",
          "cartId": testdata.cart
        },
        "query": "mutation deleteCartItemSF($id: ID!, $cartId: ID!) {\n  deleteCartItem(id: $id, cartId: $cartId) {\n    success\n    __typename\n  }\n}\n"
      }

      const errorText = "cartItem: non-exist-item-id, in cart: f6c13952-aeaf-4959-b4f4-1fa418bdbab5 not found"
      cy.request({
        method: 'POST',
        url: testdata.api_url,
        body: requestBody,
        headers: requestHeaders
      }).then(response => {
        console.log(response)
        expect(response.body.errors[0].message).to.equal(errorText)
      })

    })

  })

  it.only("APITEST-02 As user I want to delete item from non-exit Cart", () => {
    cy.get("@testdata").then((testdata) => {
      const requestHeaders = {
        "Authorization": testdata.authorization,
        "x-brikl-shop-id": testdata.shop
      }

      const requestBody = {
        "operationName": "deleteCartItemSF",
        "variables": {
          "id": ItemId,
          "cartId": "non-exist-cart-id"
        },
        "query": "mutation deleteCartItemSF($id: ID!, $cartId: ID!) {\n  deleteCartItem(id: $id, cartId: $cartId) {\n    success\n    __typename\n  }\n}\n"
      }

      const errorText = "in cart: non-exist-cart-id not found"
      cy.request({
        method: 'POST',
        url: testdata.api_url,
        body: requestBody,
        headers: requestHeaders
      }).then(response => {
        console.log(response)
        expect(response.body.errors[0].message).to.contain(errorText)
      })

    })

  })

  it("APITEST-03 As a user I want to delete item from Cart without required field x-brikl-shop-id", () => {
    // to check required fields
  })

  it("APITEST-04 As a user I want to delete item from Cart without required field Authorization", () => {
    // to check required fields
  })

  it("APITEST-05 As a user I want to delete item from Cart without required field Authorization", () => {
    // to check required fields
  })

  it("APITEST-06 As a user I want to delete already deleted item from Cart", () => {
    // to check required fields
  })
})