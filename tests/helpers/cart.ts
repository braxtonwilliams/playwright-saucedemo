import { expect } from "playwright/test";
import { login } from "./auth";
import { pass, user } from "./config";

export async function addToCart(page) {
    await page.click('#add-to-cart-sauce-labs-backpack');
    await page.click('#add-to-cart-sauce-labs-bike-light');
    await expect(page.locator('.title')).toHaveText("Your Cart");
}

export async function removeFromCart(page) {
}

export async function removeFromCartSingle(page, clickable) {
    await page.click(clickable);
}

export async function listCartItems(page, clickable) {

}
