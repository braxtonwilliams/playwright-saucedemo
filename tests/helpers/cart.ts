import { expect } from "playwright/test";
import { login } from "./auth";
import { pass, user } from "./config";

export async function addToCart(page) {
    await page.click('#add-to-cart-sauce-labs-backpack');
    await page.click('#add-to-cart-sauce-labs-bike-light');
    await expect(page.locator('#add-to-cart-sauce-labs-backpack')).not.toBeVisible;
    await expect(page.locator('#add-to-cart-sauce-labs-bike-light')).not.toBeVisible;
}

export async function removeFromCart(page, clickable) {
    await page.click(clickable);
}

export async function listCartItems(page, clickable) {

}

export async function openCart(page) {
    await page.locator('.shopping_cart_link').first().click();
    await expect(page.locator('.title')).toHaveText("Your Cart");
}